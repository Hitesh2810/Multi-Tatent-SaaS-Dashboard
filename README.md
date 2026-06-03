# 🚀 SaaS Admin Dashboard

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![Django](https://img.shields.io/badge/Django-5-green?style=for-the-badge\&logo=django)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-blue?style=for-the-badge\&logo=postgresql)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-yellow?style=for-the-badge\&logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss)
![DRF](https://img.shields.io/badge/Django_REST_Framework-red?style=for-the-badge)

### 🌟 Enterprise Multi-Tenant SaaS Management Platform

A modern, scalable, and production-ready SaaS Admin Dashboard built using **Next.js 15**, **JavaScript**, **Django REST Framework**, and **Supabase PostgreSQL**.

Designed to provide centralized management of tenants, users, subscriptions, payments, analytics, notifications, and platform settings through an intuitive and highly interactive interface.

</div>

---

# 📌 Features

## 🔐 Authentication & Authorization

* JWT Authentication
* Secure Login & Logout
* Token Refresh
* Role-Based Access Control (RBAC)
* Protected Routes
* Session Management

### Supported Roles

| Role            | Access                  |
| --------------- | ----------------------- |
| 👑 Super Admin  | Full System Access      |
| 🏢 Tenant Admin | Tenant Level Management |
| 👤 User         | Limited Access          |

---

# 📊 Dashboard Overview

Interactive dashboard with real-time insights.

### Dashboard Widgets

* 👥 Total Users
* 🏢 Total Tenants
* 💰 Revenue Tracking
* 📈 Growth Metrics
* 📦 Active Subscriptions
* 🔔 Notifications

### Analytics

* Revenue Growth Charts
* User Growth Charts
* Subscription Analytics
* Payment Trends
* Business Insights

---

# 🏢 Tenant Management

### Features

* Create Tenant
* Edit Tenant
* Delete Tenant
* View Tenant Details
* Tenant Status Management
* Tenant Analytics

---

# 👤 User Management

### Features

* Create User
* Update User
* Delete User
* Assign Roles
* Search Users
* Filter Users
* User Activity Tracking

---

# 📦 Subscription Management

### Features

* Plan Management
* Subscription Tracking
* Renewal Management
* Expiry Monitoring
* Billing Cycle Configuration

---

# 💳 Payment Management

### Features

* Payment History
* Revenue Reports
* Transaction Tracking
* Payment Status Monitoring
* Financial Analytics

---

# 🔔 Notifications

### Features

* Send Notifications
* Broadcast Messages
* Read / Unread Status
* User Alerts
* System Notifications

---

# ⚙️ Settings Management

### Features

* General Settings
* Security Settings
* SMTP Configuration
* Branding Configuration
* Application Preferences

---

# 🏗️ Project Architecture

```text
SAAS/
│
├── backend/
│   ├── accounts/
│   ├── tenants/
│   ├── subscriptions/
│   ├── payments/
│   ├── analytics_app/
│   ├── notifications_app/
│   ├── settings_app/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    │
    ├── public/
    │
    ├── src/
    │   │
    │   ├── app/
    │   │   ├── login/
    │   │   │   └── page.js
    │   │   ├── dashboard/
    │   │   │   └── page.js
    │   │   ├── tenants/
    │   │   │   └── page.js
    │   │   ├── users/
    │   │   │   └── page.js
    │   │   ├── subscriptions/
    │   │   │   └── page.js
    │   │   ├── payments/
    │   │   │   └── page.js
    │   │   ├── notifications/
    │   │   │   └── page.js
    │   │   ├── analytics/
    │   │   │   └── page.js
    │   │   └── settings/
    │   │       └── page.js
    │   │
    │   ├── components/
    │   │   ├── layout/
    │   │   ├── ui/
    │   │   ├── charts/
    │   │   ├── tables/
    │   │   └── common/
    │   │
    │   ├── contexts/
    │   │   ├── AuthContext.js
    │   │   └── ThemeContext.js
    │   │
    │   ├── hooks/
    │   │
    │   ├── lib/
    │   │   └── api.js
    │   │
    │   ├── services/
    │   │
    │   ├── utils/
    │   │
    │   ├── features/
    │   │   │
    │   │   ├── dashboard/
    │   │   │   ├── dashboard.js
    │   │   │   ├── DashboardCards.js
    │   │   │   ├── DashboardCharts.js
    │   │   │   └── DashboardStats.js
    │   │   │
    │   │   ├── tenants/
    │   │   │   ├── tenants.js
    │   │   │   ├── TenantTable.js
    │   │   │   ├── TenantForm.js
    │   │   │   └── TenantModal.js
    │   │   │
    │   │   ├── users/
    │   │   │   ├── users.js
    │   │   │   ├── UserTable.js
    │   │   │   ├── UserDrawer.js
    │   │   │   └── UserForm.js
    │   │   │
    │   │   ├── subscriptions/
    │   │   │   ├── subscriptions.js
    │   │   │   ├── PricingCards.js
    │   │   │   ├── SubscriptionTable.js
    │   │   │   └── RenewalModal.js
    │   │   │
    │   │   ├── payments/
    │   │   │   ├── payments.js
    │   │   │   ├── PaymentTable.js
    │   │   │   ├── RevenueCards.js
    │   │   │   └── PaymentModal.js
    │   │   │
    │   │   ├── notifications/
    │   │   │   ├── notifications.js
    │   │   │   ├── NotificationDrawer.js
    │   │   │   └── NotificationList.js
    │   │   │
    │   │   ├── analytics/
    │   │   │   ├── analytics.js
    │   │   │   ├── AnalyticsCharts.js
    │   │   │   └── AnalyticsCards.js
    │   │   │
    │   │   └── settings/
    │   │       ├── settings.js
    │   │       ├── GeneralSettings.js
    │   │       ├── BrandingSettings.js
    │   │       ├── SMTPSettings.js
    │   │       └── SecuritySettings.js
    │   │
    │   ├── styles/
    │   └── constants/
    │
    ├── .env.local
    ├── package.json
    ├── next.config.js
    ├── tailwind.config.js
    └── jsconfig.json
```

---

# 🛠️ Tech Stack

## Frontend

* Next.js 15
* JavaScript (ES2024)
* Tailwind CSS
* ShadCN UI
* Framer Motion
* React Query
* TanStack Table
* Recharts
* Axios
* Lucide Icons

## Backend

* Django
* Django REST Framework
* JWT Authentication
* CORS
* Swagger/OpenAPI

## Database

* PostgreSQL
* Supabase

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

## Tenants

```http
GET    /api/tenants/
POST   /api/tenants/
PUT    /api/tenants/{id}/
DELETE /api/tenants/{id}/
```

## Users

```http
GET    /api/users/
POST   /api/users/
PUT    /api/users/{id}/
DELETE /api/users/{id}/
```

## Subscriptions

```http
GET    /api/subscriptions/
POST   /api/subscriptions/
```

## Payments

```http
GET    /api/payments/
POST   /api/payments/
```

## Notifications

```http
GET    /api/notifications/
POST   /api/notifications/
```

## Analytics

```http
GET /api/analytics/dashboard/
```

## Settings

```http
GET  /api/settings/
POST /api/settings/
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

Backend URL:

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

Create:

```env
frontend/.env.local
```

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

Frontend URL:

```text
http://localhost:3000
```

---

# 🔒 Security Features

* JWT Authentication
* Refresh Tokens
* Protected Routes
* RBAC
* Secure Password Hashing
* Environment Variables
* Token Expiration Handling
* Auto Logout
* API Authorization Headers

---

# 🎨 UI/UX Highlights

* Glassmorphism
* Animated Gradients
* Floating Cards
* 3D Hover Effects
* Page Transitions
* Particle Backgrounds
* Dark Mode
* Light Mode
* Framer Motion Animations
* Mobile Responsive Layout
* Enterprise Dashboard Experience

---

# 👨‍💻 Author

### Hitesh Kumar S

🎓 Amrita Vishwa Vidyapeetham

💻 Full Stack Developer | Software Engineer

---

<div align="center">

### ⭐ If you found this project useful, give it a star!

🚀 Built with Next.js + JavaScript + Django + Supabase

</div>
