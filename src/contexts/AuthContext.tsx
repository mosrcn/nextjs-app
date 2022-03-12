import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { IUser } from '@/redux/reducers/auth';
import { authSelector } from '@/redux/selectors/auth';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  login: () => void;
  logout: () => void;
}

const defaultContext = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  login: () => null,
  logout: () => null,
};

const AuthContext = createContext<IAuthContext>(defaultContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(authSelector);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUser = () => {
      setIsLoading(false);
    };
    loadUser();
  }, [dispatch]);

  const login = useCallback(() => null, []);

  const logout = useCallback(() => null, []);

  const value = useMemo(() => {
    return {
      isAuthenticated,
      isLoading,
      user,
      login,
      logout,
    };
  }, [isAuthenticated, isLoading, user, login, logout]);

  if (isLoading) {
    return <></>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
