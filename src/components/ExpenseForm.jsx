import { useState } from 'react'

const CATEGORIES = ['Food', 'Travel', 'Marketing', 'Utilities', 'Other']

function ExpenseForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Please enter an expense name.')
      triggerShake()
      return
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount.')
      triggerShake()
      return
    }
    onAdd({ name: name.trim(), amount: parseFloat(Number(amount).toFixed(2)), category })
    setName('')
    setAmount('')
    setCategory('Food')
    setError('')
  }

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  return (
    <div className="card form-card">
      <div className="card-header">
        <span className="card-icon">＋</span>
        <h2 className="card-title">Add Expense</h2>
      </div>

      <form onSubmit={handleSubmit} className={`expense-form ${shake ? 'shake' : ''}`} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Expense Name</label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="e.g. Team Lunch"
              value={name}
              onChange={e => { setName(e.target.value); setError('') }}
              maxLength={60}
            />
          </div>

          <div className="form-group form-group--sm">
            <label className="form-label" htmlFor="amount">Amount (USD)</label>
            <input
              id="amount"
              type="number"
              className="form-input"
              placeholder="0.00"
              value={amount}
              onChange={e => { setAmount(e.target.value); setError('') }}
              min="0.01"
              step="0.01"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <div className="category-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`pill ${category === cat ? 'pill--active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {categoryEmoji(cat)} {cat}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn-add">
          Add Expense
        </button>
      </form>
    </div>
  )
}

function categoryEmoji(cat) {
  const map = { Food: '🍽', Travel: '✈️', Marketing: '📣', Utilities: '⚡', Other: '📦' }
  return map[cat] || '📦'
}

export default ExpenseForm
