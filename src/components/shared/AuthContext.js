import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('econique_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [role, setRole] = useState(() => localStorage.getItem('econique_role'));

  const login = async (email, password, userRole) => {
    const mockToken = `mock-token-${userRole}-${Date.now()}`;
    const mockUser = { email, name: email.split('@')[0] };

    localStorage.setItem('econique_token', mockToken);
    localStorage.setItem('econique_user', JSON.stringify(mockUser));
    localStorage.setItem('econique_role', userRole);

    setUser(mockUser);
    setRole(userRole);

    return { success: true };
  };

  const register = async (name, email, password, userRole) => {
    return login(email, password, userRole);
  };

  const logout = () => {
    localStorage.removeItem('econique_token');
    localStorage.removeItem('econique_user');
    localStorage.removeItem('econique_role');
    setUser(null);
    setRole(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, role, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
