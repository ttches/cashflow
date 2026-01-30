import { useCashflowContext } from "../context/CashflowContext";

export const useTimeHorizon = () => {
  const { timeHorizon, setTimeHorizon } = useCashflowContext();

  return {
    years: timeHorizon,
    setYears: setTimeHorizon,
  };
};
