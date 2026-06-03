# 🚀 SaaS Management Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-violet?style=for-the-badge\&logo=next.js)
![Django](https://img.shields.io/badge/Django-5-green?style=for-the-badge\&logo=django)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-blue?style=for-the-badge\&logo=postgresql)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-yellow?style=for-the-badge\&logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Google_Auth-orange?style=for-the-badge\&logo=firebase)

### 🌟 Enterprise Multi-Tenant SaaS Platform

A modern SaaS platform consisting of:

✅ Admin Dashboard
✅ User Portal
✅ Multi-Tenant Architecture
✅ Subscription Management
✅ Payment Tracking
✅ Notification System
✅ Firebase Google Authentication
✅ JWT Authentication
✅ Responsive Design

Built with Next.js, Django REST Framework, PostgreSQL, Firebase, and modern SaaS architecture.

</div>

---

# ✨ Features

## 🔐 Authentication

### Admin Authentication

* JWT Login
* JWT Logout
* Token Refresh
* Protected Routes
* Role-Based Access

### User Authentication

* User Login
* User Signup
* Google Login
* Firebase Authentication
* Session Management
* JWT Integration

---

# 👥 User Roles

| Role            | Access                 |
| --------------- | ---------------------- |
| 👑 SUPER_ADMIN  | Full Platform Access   |
| 🏢 TENANT_ADMIN | Tenant Management      |
| 👤 USER         | Customer Portal Access |

---

# 🖥️ Admin Dashboard

Administrators can manage the entire platform.

### Dashboard

* Total Users
* Total Tenants
* Revenue Overview
* Active Subscriptions
* Notifications
* Analytics

### User Management

* Create User
* Edit User
* Delete User
* Search Users
* Filter Users
* View User Details

### Tenant Management

* Create Tenant
* Edit Tenant
* Delete Tenant
* Tenant Analytics

### Subscription Management

* View Subscriptions
* Create Subscriptions
* Renew Subscriptions
* Monitor Expiry

### Payments

* Revenue Analytics
* Payment History
* Transaction Tracking
* Payment Status

### Notifications

* Create Notifications
* Send Notifications
* View Notification History

### Settings

* General Settings
* Branding Settings
* SMTP Settings
* Security Settings

---

# 👤 User Portal

Users have a dedicated customer-facing portal.

### User Dashboard

* Welcome Section
* Subscription Summary
* Payment Summary
* Notification Summary
* Account Information

### User Profile

* Edit Profile
* Update Personal Information
* Change Password
* Upload Avatar

### User Subscription

* Browse Plans
* Subscribe
* Upgrade
* Renew Subscription

### User Payments

* Payment History
* Transaction Tracking
* Status Monitoring

### User Notifications

* Notification Center
* Read/Unread Status
* Notification Drawer

### User Settings

* Profile Settings
* Security Settings
* Notification Preferences
* Theme Settings

---

# 🔄 Admin ↔ User Synchronization

The platform is fully integrated.

### User Registration

When a user signs up:

```text
User Signup
      ↓
Backend
      ↓
Admin Dashboard Users
```

The newly registered user automatically appears in:

```text
Admin Dashboard → Users
```

---

### User Subscription

When a user subscribes:

```text
User Subscription
       ↓
Backend
       ↓
Admin Dashboard Subscriptions
```

The subscription automatically appears in:

```text
Admin Dashboard → Subscriptions
```

---

### User Payment

When a user completes a payment:

```text
Dummy Payment Flow
       ↓
Backend
       ↓
Admin Dashboard Payments
```

The payment automatically appears in:

```text
Admin Dashboard → Payments
```

---

### Notifications

When an admin sends a notification:

```text
Admin Dashboard
       ↓
Backend
       ↓
User Portal
```

The notification appears in:

```text
User Dashboard
User Notifications
```

---

# 💳 Dummy Payment System

A simulated payment system is implemented.

### Flow

```text
User Selects Plan
       ↓
Payment Modal
       ↓
Card Validation
       ↓
Generate Transaction ID
       ↓
Save Payment
       ↓
Activate Subscription
```

Example Transaction:

```text
TXN-2026-10001
```

No third-party payment gateway is required.

---

# 🔔 Notification System

Features:

* Create Notifications
* User Notifications
* Read/Unread Tracking
* Notification Drawer
* Notification Badge Count

---

# 🎨 UI / UX Features

Inspired by:

* Linear
* Stripe
* Vercel
* Framer
* Notion
* Supabase

### Design Features

* Glassmorphism
* Animated Gradients
* Framer Motion Animations
* Floating Cards
* Soft Shadows
* Hover Effects
* Micro Interactions
* Dark Mode
* Light Mode
* Responsive Layout

---

# 🏗️ Project Structure

```text
SAAS/
│
├── backend/
│   │
│   ├── accounts/
│   ├── tenants/
│   ├── subscriptions/
│   ├── payments/
│   ├── analytics_app/
│   ├── notifications_app/
│   ├── settings_app/
│   ├── config/
│   │
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── tenants/
│   │   ├── subscriptions/
│   │   ├── payments/
│   │   ├── notifications/
│   │   ├── analytics/
│   │   ├── settings/
│   │   │
│   │   └── user/
│   │       │
│   │       ├── login/
│   │       ├── signup/
│   │       ├── dashboard/
│   │       ├── profile/
│   │       ├── subscription/
│   │       ├── payments/
│   │       ├── notifications/
│   │       └── settings/
│   │
│   ├── features/
│   │   │
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── tenants/
│   │   ├── subscriptions/
│   │   ├── payments/
│   │   ├── notifications/
│   │   ├── analytics/
│   │   ├── settings/
│   │   │
│   │   └── user/
│   │
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── lib/
│   │   ├── api.js
│   │   └── firebase.js
│   │
│   └── styles/
│
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

```http
POST /api/auth/login/
POST /api/auth/register/
POST /api/auth/logout/
POST /api/auth/token/refresh/
GET  /api/auth/me/
```

---

## Users

```http
GET    /api/users/
POST   /api/users/
PUT    /api/users/{id}/
DELETE /api/users/{id}/
```

---

## Tenants

```http
GET    /api/tenants/
POST   /api/tenants/
PUT    /api/tenants/{id}/
DELETE /api/tenants/{id}/
```

---

## Subscriptions

```http
GET    /api/subscriptions/
POST   /api/subscriptions/
```

---

## Payments

```http
GET    /api/payments/
POST   /api/payments/
```

---

## Notifications

```http
GET    /api/notifications/
POST   /api/notifications/
```

---

# 🔥 Firebase Configuration

Create:

```env
frontend/.env.local
```

Add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Enable:

```text
Firebase Authentication
→ Google Provider
→ Enable
```

---

# ⚙️ Backend Environment

Create:

```env
backend/.env
```

Example:

```env
SECRET_KEY=your-secret-key

DEBUG=True

DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432

SUPABASE_URL=
SUPABASE_ANON_KEY=
```

---

# 🚀 Installation

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver
```

Backend:

```text
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

# 🌐 Deployment

## Render

Deploy:

### Backend

Render Web Service

```text
Root Directory:
backend
```

### Frontend

Render Web Service

```text
Root Directory:
frontend
```

Add environment variables from:

```text
backend/.env
frontend/.env.local
```

---

# 🔒 Security Features

* JWT Authentication
* Refresh Tokens
* Protected Routes
* Firebase Google Authentication
* Role-Based Access Control
* Secure Password Hashing
* Environment Variables
* Access Control

---

# 👨‍💻 Author

## Hitesh Kumar S

🎓 Amrita Vishwa Vidyapeetham

💻 Full Stack Developer | Software Engineer

---

<div align="center">

### ⭐ Star this repository if you found it useful

🚀 Built with Next.js + JavaScript + Django + PostgreSQL + Firebase

</div>
