import { useContext, createContext, useMemo, useState } from 'react';
import { signInAccount } from '../service/account.service';
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [account, setAccount] = useState({});

  const signInUser = async (cred) => {
    try {
      const response = await signInAccount(cred);
      const { user = {} } = response;
      setAccount(user ?? {});
    } catch (error) {
      return error;
    }
  };
  useMemo(() => {
    if (account) {
      setIsAdminLoggedIn(true);
    }
  }, [account]);
  const values = useMemo(
    () => ({
      isAdminLoggedIn,
      signInUser,
      account,
    }),
    [isAdminLoggedIn, account]
  );
  return (
    <AuthContext.Provider value={values}>
      <>
        <>{children}</>
      </>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
