import { useCashflowContext } from "../context/CashflowContext";

const DEFAULTS = {
  amount: 50000,
  rate: 6.5,
  payment: 500,
} as const;

export const loanFields = [
  {
    label: "Loan Amount",
    name: "loanAmount",
    placeholder: String(DEFAULTS.amount),
  },
  {
    label: "Interest Rate",
    name: "loanInterest",
    placeholder: String(DEFAULTS.rate),
    suffix: "%",
  },
  {
    label: "Monthly Payment",
    name: "loanPayment",
    placeholder: String(DEFAULTS.payment),
  },
];

export const useLoan = () => {
  const { loanValues, setLoanValues } = useCashflowContext();

  const onChange = (name: string, value: string) => {
    setLoanValues((prev) => ({ ...prev, [name]: value }));
  };

  const parsed = {
    amount: loanValues.loanAmount
      ? Number(loanValues.loanAmount)
      : DEFAULTS.amount,
    rate:
      (loanValues.loanInterest
        ? Number(loanValues.loanInterest)
        : DEFAULTS.rate) / 100,
    payment: loanValues.loanPayment
      ? Number(loanValues.loanPayment)
      : DEFAULTS.payment,
  };

  return {
    fields: loanFields,
    values: loanValues,
    onChange,
    parsed,
  };
};
