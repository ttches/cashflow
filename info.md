# Invest vs Pay Off Debt Calculator

A financial visualization tool to help users decide whether to invest extra money or pay off student debt faster.

## Inputs

### Loan Details
- **Loan Amount** - Current loan balance
- **Interest Rate** - Annual interest rate (%)
- **Monthly Payment** - Amount paid each month

### Investment Details
- **Initial Amount** - Starting investment balance
- **Return Rate** - Expected annual return (%)
- **Monthly Contribution** - Amount invested each month

## Outputs

### Three Interactive Charts (over 10 years, adjustable)

1. **Loan Graph**
   - Remaining loan balance over time
   - Cumulative interest paid

2. **Investment Graph**
   - Total amount invested (contributions)
   - Amount from appreciation (growth)
   - Total value

3. **Net Worth Graph**
   - Net worth over time (Investment Total - Remaining Loan Balance)

### Features
- Hover over charts to see detailed values at any point
- Payoff date calculated automatically based on inputs
- Time horizon slider to adjust the view period

## Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Nivo (charts)
