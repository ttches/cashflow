import { CashflowProvider } from "./context/CashflowContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <CashflowProvider>
      <Home />
    </CashflowProvider>
  );
};

export default App;
