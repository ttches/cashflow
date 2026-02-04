import { useCashflowContext } from "../context/CashflowContext";

const Logo = () => {
  const { resetAll } = useCashflowContext();

  return (
    <button
      type="button"
      onClick={resetAll}
      className="text-2xl font-light cursor-pointer group"
    >
      <span className="text-[#a196e4] group-hover:text-[#d971d5] transition-colors">
        gr
      </span>
      <span className="text-[#fad003]">owe</span>
    </button>
  );
};

export default Logo;
