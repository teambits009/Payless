# 💳 Payless — Buy Now, Pay Later (BNPL) Platform

Payless is a seamless, secure, and scalable Buy Now, Pay Later (BNPL) solution for online and offline merchants. It empowers customers to split payments into interest-free installments while allowing merchants to get paid instantly.

---

## ✨ Key Features

- 🛒 **Split Payments** — Flexible installment plans (4x, 6x, 12x options)
- 🧾 **Instant Approvals** — Fast eligibility checks using soft credit scoring
- 🔒 **Secure Transactions** — Encrypted and tokenized payment processing
- 📊 **Merchant Dashboard** — Track transactions, customer repayment, insights
- 📱 **Customer Portal** — Manage payments, repayment schedules, and reminders
- 📈 **Scalable APIs** — Easily integrate into any e-commerce platform or POS

---

## 💡 Why It Works

- Increases merchant sales conversion rates
- Offers affordable financing to customers without credit card usage
- Fast and user-friendly onboarding and integration process
- Transparent fees and repayment terms

---

## 🧪 Tech Stack

| Component | Tech |
|----------|------|
| Frontend | React (Merchant Portal), Flutter (Customer App) |
| Backend | Node.js / Express or Python / FastAPI |
| Database | PostgreSQL (Relational), Redis (Cache & Queues) |
| Payment Processor | Stripe / Paystack / Flutterwave API |
| Auth | OAuth2, JWT |
| Credit Scoring | External APIs (Plaid, TransUnion, etc.) |
| Infrastructure | Docker, Kubernetes, CI/CD (GitHub Actions) |

---

## 🏗️ Technical Design

### Architecture Overview

```
+--------------------+           +-----------------------+
|   Customer App     | ←──────→ |  BNPL Backend API     |
|  (Flutter)          |           |  (FastAPI / Node.js)   |
+--------------------+           +-----------------------+
           ↑                             ↓
+---------------------+         +-------------------------+
|  Merchant Portal     | ←────→ |  Payment Gateway (Stripe)|
|  (React)             |         +-------------------------+
           ↓                             ↓
+-------------------------+   +-----------------------------+
|  Credit Scoring Engine   |   |  PostgreSQL + Redis         |
|  (External API / ML)     |   |  DB, Queue, Session Store   |
+-------------------------+   +-----------------------------+
```

### Modules

#### 🔐 Authentication & Access
- Customer & Merchant login via JWT/OAuth2
- Multi-role access control and session tokens

#### 💸 Payment Engine
- Handles split payments and repayment schedules
- Auto-debit, late fee calculation, and alerts
- Integrates with Stripe, Paystack, or Flutterwave

#### 🧠 Credit Evaluation
- Performs soft credit checks using 3rd-party APIs
- Scores user based on bank data, income, and credit behavior
- Determines eligibility and credit limit

#### 📊 Merchant Analytics
- Dashboard with revenue tracking, approval rates, and cohort analysis
- Payout schedules and outstanding payment reports

#### 🔁 Scheduler & Notifications
- Cron jobs for due dates, payment retries, and reminders
- Email, SMS, and push notification support

---

## 🚀 Getting Started

### Backend Setup
```bash
# Clone the repo
$ git clone https://github.com/your-org/payless-bnpl.git
$ cd payless-bnpl/backend

# Install dependencies
$ pip install -r requirements.txt  # for Python OR npm install for Node.js

# Start the API server
$ uvicorn main:app --reload  # for FastAPI OR npm run dev
```

### Frontend Setup (React or Flutter)
```bash
# Merchant portal
$ cd frontend-merchant
$ npm install && npm start

# Customer app (Flutter)
$ cd customer-app
$ flutter pub get
$ flutter run
```

---

## 🧠 API Endpoints (Sample)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/login` | POST | Authenticate merchant/customer |
| `/checkout` | POST | Initiate BNPL checkout session |
| `/repayments/:id` | GET | Fetch repayment schedule |
| `/merchants/:id/dashboard` | GET | Analytics dashboard |
| `/credit-score` | POST | Run soft credit check |

---

## 🛡️ Security Considerations

- HTTPS enforced across all services
- Token-based session management
- Data encryption at rest and in transit
- GDPR & PCI DSS compliance
- Webhooks secured with signature verification

---

## 🛣️ Roadmap

- [ ] Add biometric login to customer app
- [ ] Loyalty rewards system for early payments
- [ ] Add Open Banking integrations
- [ ] ML-based fraud detection engine
- [ ] Installment plan simulations & credit limits calculator

---

## 📄 License

MIT License — see [LICENSE](LICENSE)

---

## 📬 Contact

- GitHub:https://github.com/teambits009/Payless
- Email: brandonopere6@gmail.com

