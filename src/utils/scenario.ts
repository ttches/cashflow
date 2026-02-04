import { calculateLoanSchedule, type LoanScheduleResult } from "./loan";
import {
  calculateInvestmentSchedule,
  type InvestmentDataPoint,
} from "./investment";

type ScenarioParams = {
  loan: {
    principal: number;
    rate: number;
    monthlyPayment: number;
  };
  investment: {
    initialAmount: number;
    returnRate: number;
    monthlyContribution: number;
  };
  additional: {
    extraToLoan: number;
    extraToInvest: number;
    redirectAfterPayoff: boolean;
  };
  years: number;
};

type ScenarioResult = {
  loan: LoanScheduleResult;
  investment: InvestmentDataPoint[];
  finalNetWorth: number;
  totalInterestPaid: number;
  totalContributions: number;
  appreciation: number;
  payoffMonth: number | null;
  netWorthPositiveYear: number | null;
};

const calculateScenario = (params: ScenarioParams): ScenarioResult => {
  const { loan: loanParams, investment: invParams, additional, years } = params;

  const loan = calculateLoanSchedule(
    loanParams.principal,
    loanParams.rate,
    loanParams.monthlyPayment,
    years,
    additional.extraToLoan
  );

  const investment = calculateInvestmentSchedule(
    invParams.initialAmount,
    invParams.returnRate,
    invParams.monthlyContribution,
    years,
    additional.extraToInvest,
    additional.redirectAfterPayoff ? additional.extraToLoan : 0,
    additional.redirectAfterPayoff ? loan.payoffMonth : null
  );

  const finalLoan = loan.dataPoints.at(-1)!;
  const finalInv = investment.at(-1)!;

  const netWorthPositivePoint = loan.dataPoints.find(
    (d, i) => investment[i].totalValue >= d.balance
  );

  return {
    loan,
    investment,
    finalNetWorth: finalInv.totalValue - finalLoan.balance,
    totalInterestPaid: finalLoan.totalInterestPaid,
    totalContributions: finalInv.totalContributions,
    appreciation: finalInv.appreciation,
    payoffMonth: loan.payoffMonth,
    netWorthPositiveYear: netWorthPositivePoint?.year ?? null,
  };
};

export { calculateScenario };
export type { ScenarioParams, ScenarioResult };
