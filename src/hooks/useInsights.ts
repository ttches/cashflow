import { useMemo } from "react";
import { useLoan } from "./useLoan";
import { useInvestment } from "./useInvestment";
import { useAdditionalFunds } from "./useAdditionalFunds";
import { useTimeHorizon } from "./useTimeHorizon";
import { calculateScenario, type ScenarioParams } from "../utils/scenario";

type Insights = {
  finalNetWorth: number;
  totalInterestPaid: number;
  totalContributions: number;
  appreciation: number;
  payoffMonth: number | null;
  netWorthPositiveYear: number | null;
  hasComparison: boolean;
  timeSavedMonths: number;
  interestSaved: number;
  wealthGained: number;
  extraAmount: number;
  years: number;
};

const calculateTimeSaved = (
  baselinePayoff: number | null,
  currentPayoff: number | null,
  horizonMonths: number
): number => {
  if (baselinePayoff !== null && currentPayoff !== null) {
    return baselinePayoff - currentPayoff;
  }
  if (baselinePayoff === null && currentPayoff !== null) {
    return horizonMonths - currentPayoff;
  }
  return 0;
};

export const useInsights = (): Insights => {
  const { parsed: loan } = useLoan();
  const { parsed: investment } = useInvestment();
  const { extraToLoan, extraToInvest, redirectAfterPayoff, enabled } =
    useAdditionalFunds();
  const { years } = useTimeHorizon();

  return useMemo(() => {
    const baseParams: ScenarioParams = {
      loan: {
        principal: loan.amount,
        rate: loan.rate,
        monthlyPayment: loan.payment,
      },
      investment: {
        initialAmount: investment.initialAmount,
        returnRate: investment.returnRate,
        monthlyContribution: investment.monthlyContribution,
      },
      additional: {
        extraToLoan,
        extraToInvest,
        redirectAfterPayoff,
      },
      years,
    };

    const current = calculateScenario(baseParams);

    const baseline = calculateScenario({
      ...baseParams,
      additional: {
        extraToLoan: 0,
        extraToInvest: 0,
        redirectAfterPayoff: false,
      },
    });

    const hasComparison = enabled && (extraToLoan > 0 || extraToInvest > 0);

    return {
      finalNetWorth: current.finalNetWorth,
      totalInterestPaid: current.totalInterestPaid,
      totalContributions: current.totalContributions,
      appreciation: current.appreciation,
      payoffMonth: current.payoffMonth,
      netWorthPositiveYear: current.netWorthPositiveYear,
      hasComparison,
      timeSavedMonths: calculateTimeSaved(
        baseline.payoffMonth,
        current.payoffMonth,
        years * 12
      ),
      interestSaved: baseline.totalInterestPaid - current.totalInterestPaid,
      wealthGained: current.finalNetWorth - baseline.finalNetWorth,
      extraAmount: extraToLoan + extraToInvest,
      years,
    };
  }, [
    loan.amount,
    loan.rate,
    loan.payment,
    investment.initialAmount,
    investment.returnRate,
    investment.monthlyContribution,
    extraToLoan,
    extraToInvest,
    redirectAfterPayoff,
    enabled,
    years,
  ]);
};
