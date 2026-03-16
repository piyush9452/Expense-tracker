const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
]

function CurrencyConverter({ total, currency, onCurrencyChange, exchangeRates, loading, error }) {
  const selected = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0]

  const convertedAmount = exchangeRates && exchangeRates[currency]
    ? total * exchangeRates[currency]
    : null

  const formatAmount = (amount, curr) => {
    if (curr === 'JPY') return Math.round(amount).toLocaleString()
    return amount.toFixed(2)
  }

  return (
    <div className="card converter-card">
      <div className="card-header">
        <span className="card-icon">💱</span>
        <h2 className="card-title">Currency Converter</h2>
      </div>

      {/* Source total */}
      <div className="converter-source">
        <span className="converter-source__label">Total in USD</span>
        <span className="converter-source__value">${total.toFixed(2)}</span>
      </div>

      {/* Currency selector */}
      <div className="converter-select-wrap">
        <label className="form-label" htmlFor="currency-select">Convert to</label>
        <select
          id="currency-select"
          className="currency-select"
          value={currency}
          onChange={e => onCurrencyChange(e.target.value)}
        >
          {CURRENCIES.map(c => (
            <option key={c.code} value={c.code}>
              {c.symbol} {c.name} ({c.code})
            </option>
          ))}
        </select>
      </div>

      {/* Result */}
      <div className="converter-result">
        {loading ? (
          <div className="converter-loading">
            <div className="spinner" />
            <span>Fetching live rates…</span>
          </div>
        ) : error ? (
          <div className="converter-error">
            <span className="error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        ) : convertedAmount !== null ? (
          <div className="converter-output">
            <span className="converter-output__arrow">→</span>
            <div>
              <span className="converter-output__symbol">{selected.symbol}</span>
              <span className="converter-output__amount">
                {formatAmount(convertedAmount, currency)}
              </span>
              <span className="converter-output__code">{currency}</span>
            </div>
            {exchangeRates && (
              <p className="converter-rate">
                1 USD = {selected.symbol}{exchangeRates[currency]?.toFixed(4)} {currency}
              </p>
            )}
          </div>
        ) : (
          <p className="converter-na">Rate unavailable</p>
        )}
      </div>
    </div>
  )
}

export default CurrencyConverter
