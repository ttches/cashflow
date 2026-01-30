import { useState } from 'react'
import InputSection from '../components/InputSection'
import ChartPlaceholder from '../components/ChartPlaceholder'

const loanFields = [
  { label: 'Loan Amount', name: 'loanAmount', placeholder: '50000' },
  { label: 'Interest Rate', name: 'loanInterest', placeholder: '6.5', suffix: '%' },
  { label: 'Monthly Payment', name: 'loanPayment', placeholder: '500' },
]

const investmentFields = [
  { label: 'Initial Amount', name: 'initialAmount', placeholder: '1000' },
  { label: 'Return Rate', name: 'returnRate', placeholder: '7', suffix: '%' },
  { label: 'Monthly Contribution', name: 'monthlyContribution', placeholder: '300' },
]

const Home = () => {
  const [loanValues, setLoanValues] = useState<Record<string, string>>({})
  const [investmentValues, setInvestmentValues] = useState<Record<string, string>>({})
  const [timeHorizon, setTimeHorizon] = useState(10)

  const handleLoanChange = (name: string, value: string) => {
    setLoanValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleInvestmentChange = (name: string, value: string) => {
    setInvestmentValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-[#171421]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#C792EA]">
            Invest vs Pay Off Debt
          </h1>
          <p className="text-[#A9A1C1] mt-2">
            Visualize the trade-offs between investing and paying off student loans
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InputSection
            title="Loan Details"
            fields={loanFields}
            values={loanValues}
            onChange={handleLoanChange}
          />
          <InputSection
            title="Investment Details"
            fields={investmentFields}
            values={investmentValues}
            onChange={handleInvestmentChange}
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-[#A9A1C1] mb-2">
            Time Horizon: {timeHorizon} years
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={timeHorizon}
            onChange={(e) => setTimeHorizon(Number(e.target.value))}
            className="w-full max-w-md accent-[#E5C07B]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartPlaceholder title="Loan Balance" />
          <ChartPlaceholder title="Investment Growth" />
          <ChartPlaceholder title="Net Worth" />
        </div>
      </div>
    </div>
  )
}

export default Home
