# 💸 Expense Tracker

A personal expense tracking app built with **React + Vite**. Log expenses, view category breakdowns, and convert totals to live exchange rates via the Frankfurter API.

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+ installed ([nodejs.org](https://nodejs.org))

### Steps

```bash
# 1. Clone / download the project
cd expense-tracker

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

---

## ☁️ Deploy on Vercel (Free)

### Option A — Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Inside the project folder, run:
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist

# 3. For subsequent deploys:
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

Your live URL will be something like `https://expense-tracker-xxx.vercel.app`

---

## ☁️ Deploy on Netlify (Alternative)

```bash
# 1. Build the project
npm run build

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=dist
```

Or drag & drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx       # Add expense form with category pills
│   ├── ExpenseList.jsx       # Scrollable list container
│   ├── ExpenseCard.jsx       # Individual expense card with delete
│   ├── SummaryPanel.jsx      # Total + category breakdown with bars
│   └── CurrencyConverter.jsx # Live currency conversion via API
├── styles/
│   └── App.css               # All styles (CSS variables, responsive)
├── App.jsx                   # Root component, state management
└── main.jsx                  # Entry point
```

---

## 🔌 API Used

**Frankfurter.app** — Free, no API key needed  
`https://api.frankfurter.app/latest?from=USD`

Returns live exchange rates for USD → EUR, GBP, INR, JPY, CAD, AUD, and more.

---

## ✅ Features

- ➕ Add expenses with name, amount, and category
- 🗑 Delete any expense
- 🧮 Live running total
- 📊 Category breakdown with progress bars
- 💱 Real-time currency conversion (7 currencies)
- ⚠️ Graceful API loading and error states
- 📱 Fully responsive (mobile 414px → desktop 1600px)
