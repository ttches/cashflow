import { useCashflowContext } from "../context/CashflowContext";

const DEFAULTS = {
  initialAmount: 1000,
  returnRate: 7,
  monthlyContribution: 300,
} as const;

export const investmentFields = [
  {
    label: "Initial Investment",
    name: "initialAmount",
    placeholder: String(DEFAULTS.initialAmount),
  },
  {
    label: "Return Rate",
    name: "returnRate",
    placeholder: String(DEFAULTS.returnRate),
    suffix: "%",
  },
  {
    label: "Monthly Contribution",
    name: "monthlyContribution",
    placeholder: String(DEFAULTS.monthlyContribution),
  },
];

export const useInvestment = () => {
  const { investmentValues, setInvestmentValues } = useCashflowContext();

  const onChange = (name: string, value: string) => {
    setInvestmentValues((prev) => ({ ...prev, [name]: value }));
  };

  const parsed = {
    initialAmount: investmentValues.initialAmount
      ? Number(investmentValues.initialAmount)
      : DEFAULTS.initialAmount,
    returnRate:
      (investmentValues.returnRate
        ? Number(investmentValues.returnRate)
        : DEFAULTS.returnRate) / 100,
    monthlyContribution: investmentValues.monthlyContribution
      ? Number(investmentValues.monthlyContribution)
      : DEFAULTS.monthlyContribution,
  };

  return {
    fields: investmentFields,
    values: investmentValues,
    onChange,
    parsed,
  };
};
