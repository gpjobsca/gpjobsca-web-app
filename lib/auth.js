/* eslint-disable camelcase */
import React, { useState, useEffect, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import api from './api';

const authContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const getToken = () => api().get('/sanctum/csrf-cookie');

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    await getToken();
    await api().post('/login', { email, password });
    Cookies.set('gpjobsca_is_authenticated', true, { expires: 1 });
    const {
      data: { data: authUser },
    } = await api().get('/user');
    setUser(authUser);
    return authUser;
  };

  const signup = (
    name,
    email,
    password,
    password_confirmation,
    company_name,
    company_location
  ) =>
    api()
      .post('/register', {
        name,
        email,
        password,
        password_confirmation,
        company_name,
        company_location,
      })
      .then((response) => {
        setUser(response.data.data);
        return response.data.data;
      });

  const signout = async () => {
    await api().post('/logout');
    Cookies.remove('gpjobsca_is_authenticated');
    setUser(false);
  };

  const sendPasswordResetEmail = (email) =>
    api()
      .post('/forgot-password', { email })
      .then(() => true);

  const confirmPasswordReset = (
    token,
    email,
    password,
    password_confirmation
  ) =>
    api()
      .post('/reset-password', {
        token,
        email,
        password,
        password_confirmation,
      })
      .then(() => true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const sessionToken = Cookies.get('gpjobsca_is_authenticated');
      if (sessionToken) {
        try {
          const {
            data: { data: authUser },
          } = await api().get('/user');
          if (authUser) setUser(authUser);
        } catch (e) {
          setUser(false);
          Cookies.remove('gpjobsca_is_authenticated');
        }
      }
    }
    loadUserFromCookies();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    getToken,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={{ auth, isAuthenticated: !!auth.user }}>
      {children}
    </authContext.Provider>
  );
};
