const CATEGORY_ORDER = ['Food', 'Travel', 'Marketing', 'Utilities', 'Other']

function categoryColor(cat) {
  const map = {
    Food: 'var(--cat-food)',
    Travel: 'var(--cat-travel)',
    Marketing: 'var(--cat-marketing)',
    Utilities: 'var(--cat-utilities)',
    Other: 'var(--cat-other)',
  }
  return map[cat] || 'var(--cat-other)'
}

function categoryEmoji(cat) {
  const map = { Food: '🍽', Travel: '✈️', Marketing: '📣', Utilities: '⚡', Other: '📦' }
  return map[cat] || '📦'
}

function SummaryPanel({ total, categoryTotals }) {
  const hasExpenses = total > 0

  // Sort categories by amount descending
  const sortedCats = CATEGORY_ORDER.filter(c => categoryTotals[c])

  return (
    <div className="card summary-card">
      <div className="card-header">
        <span className="card-icon">📊</span>
        <h2 className="card-title">Summary</h2>
      </div>

      {/* Total */}
      <div className="summary-total">
        <span className="summary-total__label">Total Spent</span>
        <span className="summary-total__value">${total.toFixed(2)}</span>
      </div>

      {/* Category breakdown */}
      <div className="summary-breakdown">
        <h3 className="breakdown-heading">By Category</h3>
        {!hasExpenses ? (
          <p className="breakdown-empty">No data yet.</p>
        ) : (
          <ul className="breakdown-list">
            {sortedCats.map(cat => {
              const amt = categoryTotals[cat]
              const pct = total > 0 ? (amt / total) * 100 : 0
              return (
                <li key={cat} className="breakdown-item">
                  <div className="breakdown-item__header">
                    <span className="breakdown-item__label">
                      {categoryEmoji(cat)} {cat}
                    </span>
                    <span className="breakdown-item__amount">${amt.toFixed(2)}</span>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-bar__fill"
                      style={{ width: `${pct}%`, background: categoryColor(cat) }}
                    />
                  </div>
                  <span className="breakdown-item__pct">{pct.toFixed(0)}%</span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SummaryPanel
