"use client";

import { Chrome } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

export default function GoogleAuthButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-11 w-full border-white/30 bg-white/70 text-slate-900 hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      onClick={() => toast.info("Google sign-in is ready for backend OAuth configuration.")}
    >
      <Chrome className="h-4 w-4" />
      Continue with Google
    </Button>
  );
}
