import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import FinancialDefaults from '../defaults/financialDefaults';
import { getBalance } from '../service/financial.service'
const FinancialContext = createContext(FinancialDefaults);

export const useFinancialContext = () => useContext(FinancialContext);

const FinancialProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [pendingBalance, setPendingBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const retriveBalance = async () => {
    try {
      setIsLoading(true);
      const response = await getBalance();
      setIsLoading(false);
      console.log(response.data)
      setBalance(response.data.available[0].amount ?? 0);
      setPendingBalance(response.data.pending[0].amount ?? 0);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    retriveBalance();
  }, []);


  const values = useMemo(
    () => ({
      balance,
    }),
    [
      balance,
    ]
  );
  return (
    <FinancialContext.Provider value={values}>
      <>{children}</>
    </FinancialContext.Provider>
  );
};

export default FinancialProvider;
