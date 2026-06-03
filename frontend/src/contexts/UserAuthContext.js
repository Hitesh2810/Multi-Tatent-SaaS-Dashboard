"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import api, { apiErrorMessage, tokenStore } from "@/lib/api";

const UserAuthContext = createContext(null);

function cacheUser(user) {
  if (typeof window === "undefined") return;
  if (user) localStorage.setItem("currentUser", JSON.stringify(user));
}

export function UserAuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const cached = typeof window !== "undefined" ? localStorage.getItem("currentUser") : null;
    if (cached) {
      try {
        setUser(JSON.parse(cached));
      } catch {
        localStorage.removeItem("currentUser");
      }
    }

    if (!tokenStore.getAccess()) {
      setIsBooting(false);
      return;
    }

    api.get("/auth/me/")
      .then((response) => {
        setUser(response.data);
        cacheUser(response.data);
      })
      .catch(() => tokenStore.clear())
      .finally(() => setIsBooting(false));
  }, []);

  async function refreshUser() {
    const response = await api.get("/auth/me/");
    setUser(response.data);
    cacheUser(response.data);
    return response.data;
  }

  async function login(credentials, options = {}) {
    try {
      const response = await api.post("/auth/login/", credentials);
      tokenStore.set(response.data.access, response.data.refresh);
      const profile = response.data.user || (await refreshUser());
      setUser(profile);
      cacheUser(profile);
      if (options.remember) localStorage.setItem("rememberUser", credentials.email);
      toast.success("Welcome back");
      router.push("/user/dashboard");
    } catch (error) {
      toast.error(apiErrorMessage(error));
      throw error;
    }
  }

  async function signup(payload) {
    try {
      await api.post("/auth/register/", payload);
      await login({ email: payload.email, password: payload.password }, { remember: true });
      toast.success("Account created");
    } catch (error) {
      toast.error(apiErrorMessage(error));
      throw error;
    }
  }

  async function updateProfile(payload) {
    const response = await api.patch("/auth/me/", payload);
    setUser(response.data);
    cacheUser(response.data);
    toast.success("Profile updated");
    return response.data;
  }

  async function changePassword(payload) {
    await api.post("/auth/change-password/", payload);
    toast.success("Password changed");
  }

  function logout() {
    api.post("/auth/logout/", { refresh: tokenStore.getRefresh() }).catch(() => null);
    tokenStore.clear();
    setUser(null);
    router.push("/user/login");
  }

  useEffect(() => {
    const publicPath = pathname === "/user/login" || pathname === "/user/signup";
    if (!isBooting && !tokenStore.getAccess() && pathname?.startsWith("/user") && !publicPath) {
      router.replace("/user/login");
    }
  }, [isBooting, pathname, router]);

  const value = useMemo(() => ({
    user,
    isBooting,
    isAuthenticated: Boolean(tokenStore.getAccess()),
    login,
    signup,
    logout,
    refreshUser,
    updateProfile,
    changePassword
  }), [user, isBooting]);

  return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
}

export function useUserAuth() {
  const context = useContext(UserAuthContext);
  if (!context) throw new Error("useUserAuth must be used inside UserAuthProvider");
  return context;
}
