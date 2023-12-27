import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Mock authentication logic (e.g., check credentials)
    // For demo purposes, setting isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Mock logout logic (clear user session, tokens, etc.)
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
