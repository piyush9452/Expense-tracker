import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import SummaryPanel from './components/SummaryPanel'
import CurrencyConverter from './components/CurrencyConverter'

const CURRENCY_API = 'https://api.frankfurter.app/latest?from=USD'

function App() {
  const [expenses, setExpenses] = useState([
    { id: '1', name: 'Team Lunch', amount: 85, category: 'Food' },
    { id: '2', name: 'Flight to Mumbai', amount: 210, category: 'Travel' },
    { id: '3', name: 'Google Ads', amount: 150, category: 'Marketing' },
  ])
  const [currency, setCurrency] = useState('USD')
  const [exchangeRates, setExchangeRates] = useState(null)
  const [apiLoading, setApiLoading] = useState(true)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    const fetchRates = async () => {
      setApiLoading(true)
      setApiError(null)
      try {
        const res = await fetch(CURRENCY_API)
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json()
        // Include USD as base (rate = 1)
        setExchangeRates({ USD: 1, ...data.rates })
      } catch (err) {
        setApiError('Could not load exchange rates. Showing USD only.')
        setExchangeRates({ USD: 1 })
      } finally {
        setApiLoading(false)
      }
    }
    fetchRates()
  }, [])

  const addExpense = (expense) => {
    setExpenses(prev => [{ ...expense, id: crypto.randomUUID() }, ...prev])
  }

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id))
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount
    return acc
  }, {})

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo-mark">ET</div>
          <div>
            <h1 className="app-title">Expense Tracker</h1>
            <p className="app-subtitle">Track · Categorise · Convert</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="badge-dot" />
          {expenses.length} {expenses.length === 1 ? 'entry' : 'entries'}
        </div>
      </header>

      {/* Main layout */}
      <main className="app-main">
        {/* Left column */}
        <section className="col-left">
          <ExpenseForm onAdd={addExpense} />
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </section>

        {/* Right column */}
        <aside className="col-right">
          <SummaryPanel total={total} categoryTotals={categoryTotals} />
          <CurrencyConverter
            total={total}
            currency={currency}
            onCurrencyChange={setCurrency}
            exchangeRates={exchangeRates}
            loading={apiLoading}
            error={apiError}
          />
        </aside>
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite · Exchange rates via Frankfurter.app</p>
      </footer>
    </div>
  )
}

export default App
