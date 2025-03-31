import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  const login = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        showAuthModal,
        setShowAuthModal,
        authMode,
        openAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};