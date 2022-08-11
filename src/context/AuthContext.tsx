/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

type authContextType = {
  user: string | null;
  authTokens: {};
  loginUser: () => null;
  logoutUser: () => null;
};

const authContextDefaultValues: authContextType = {
  user: null,
  authTokens: {},
  loginUser: () => null,
  logoutUser: () => null,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
  children: React.ReactNode;
};

export default AuthContext;

export function AuthProvider({ children }: Props) {
  const djangoServerDomain =
    process.env.djangoServerDomain || 'http://localhost';
  const djangoServerPort = process.env.djangoServerPort || '8000';

  const [authTokens, setAuthTokens] = useState(
    JSON.parse(Cookies.get('authTokens') || '')
  );

  const [user, setUser] = useState<string | null>(() =>
    Cookies.get('authTokens')
      ? jwt_decode(JSON.parse(Cookies.get('authTokens') || '').access)
      : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `${djangoServerDomain}:${djangoServerPort}/api/token/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      Cookies.set('authTokens', JSON.stringify(data));
      // localStorage.setItem('authTokens', JSON.stringify(data))
      navigate('/');
    } else {
      alert('Something went wrong!');
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    Cookies.remove('authTokens');
    navigate('/login');
  };

  const updateToken = async () => {
    const response = await fetch(
      `${djangoServerDomain}:${djangoServerPort}/api/token/refresh/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );

    const data = await response.json();

    if (response.status === 200 && data.access) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      Cookies.set('authTokens', JSON.stringify(data));

      // localStorage.setItem('authTokens', JSON.stringify(data))
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  const contextData: {
    user: string | null;
    authTokens: {};
    loginUser: any;
    logoutUser: any;
  } = {
    user,
    authTokens,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        console.log('updating token after 4 minutes', authTokens);
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
