function categoryEmoji(cat) {
  const map = { Food: '🍽', Travel: '✈️', Marketing: '📣', Utilities: '⚡', Other: '📦' }
  return map[cat] || '📦'
}

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

function ExpenseCard({ expense, onDelete }) {
  const { id, name, amount, category } = expense

  return (
    <li className="expense-card" style={{ '--accent': categoryColor(category) }}>
      <div className="expense-card__accent" />
      <div className="expense-card__body">
        <div className="expense-card__icon">{categoryEmoji(category)}</div>
        <div className="expense-card__info">
          <span className="expense-card__name">{name}</span>
          <span className="expense-card__cat">{category}</span>
        </div>
        <div className="expense-card__amount">${amount.toFixed(2)}</div>
        <button
          className="expense-card__delete"
          onClick={() => onDelete(id)}
          aria-label={`Delete ${name}`}
          title="Delete"
        >
          ✕
        </button>
      </div>
    </li>
  )
}

export default ExpenseCard
