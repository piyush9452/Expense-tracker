import ExpenseCard from './ExpenseCard'

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="card list-card">
      <div className="card-header">
        <span className="card-icon">📋</span>
        <h2 className="card-title">Expenses</h2>
        <span className="count-badge">{expenses.length}</span>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🧾</div>
          <p className="empty-text">No expenses yet.</p>
          <p className="empty-sub">Add your first expense above.</p>
        </div>
      ) : (
        <ul className="expense-list">
          {expenses.map(expense => (
            <ExpenseCard key={expense.id} expense={expense} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList
