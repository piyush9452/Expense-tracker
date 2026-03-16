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
