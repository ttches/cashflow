import UltraMinimalChart from "../components/UltraMinimalChart";
import HoverPanel from "../components/HoverPanel";
import KeyInsightsPanel from "../components/KeyInsightsPanel";
import Logo from "../components/Logo";
import LoanSection from "../components/LoanSection";
import InvestmentSection from "../components/InvestmentSection";
import AdditionalPaymentsSection from "../components/AdditionalPaymentsSection";
import { useTimeHorizon } from "../hooks/useTimeHorizon";
import { useChartData } from "../hooks/useChartData";

const Home = () => {
  const timeHorizon = useTimeHorizon();
  const chartData = useChartData();

  return (
    <div className="h-screen bg-[#15152a] overflow-hidden">
      <div className="h-full mx-auto px-2 py-4 min-[764px]:px-4 min-[764px]:py-8">
        <div className="h-full grid grid-cols-2 min-[764px]:grid-cols-[1fr_3fr_1fr] gap-2 min-[764px]:gap-8">
          <div className="space-y-6 overflow-y-auto">
            <Logo />
            <LoanSection />
            <InvestmentSection />
            <AdditionalPaymentsSection />
            <div>
              <label className="block text-sm font-medium text-[#a196e4] mb-2">
                Time Horizon: {timeHorizon.years} years
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={timeHorizon.years}
                onChange={(e) => timeHorizon.setYears(Number(e.target.value))}
                className="w-full accent-[#fad003]"
              />
            </div>
          </div>

          <div className="hidden min-[764px]:flex flex-col gap-4 h-full">
            <div className="flex-1 min-h-0">
              <UltraMinimalChart
                title="Loan Balance"
                data={chartData.loanBalanceData}
              />
            </div>
            <div className="flex-1 min-h-0">
              <UltraMinimalChart
                title="Investment Growth"
                data={chartData.investmentGrowthData}
              />
            </div>
            <div className="flex-1 min-h-0">
              <UltraMinimalChart
                title="Net Worth"
                data={chartData.netWorthData}
                yMin={chartData.netWorthYMin}
              />
            </div>
          </div>

          <div className="pt-6 flex flex-col gap-6 min-[764px]:h-full overflow-y-auto">
            <HoverPanel className="hidden min-[764px]:block" />
            <KeyInsightsPanel className="min-[764px]:mt-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
