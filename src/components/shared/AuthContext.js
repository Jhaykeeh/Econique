import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('econique_user');
    const token = localStorage.getItem('econique_token');
    if (saved && token) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) return parsed;
    }
    localStorage.removeItem('econique_user');
    localStorage.removeItem('econique_role');
    localStorage.removeItem('econique_token');
    return null;
  });
  const [role, setRole] = useState(() => localStorage.getItem('econique_role'));

  const login = async (email, password, userRole, firstName, lastName) => {
    const mockToken = `mock-token-${userRole}-${Date.now()}`;
    const mockUser = { email, firstName: firstName || email.split('@')[0], lastName: lastName || '', name: firstName && lastName ? `${firstName} ${lastName}` : (firstName || email.split('@')[0]), totalPosts: 0, totalLikes: 0 };

    localStorage.setItem('econique_token', mockToken);
    localStorage.setItem('econique_user', JSON.stringify(mockUser));
    localStorage.setItem('econique_role', userRole);

    setUser(mockUser);
    setRole(userRole);

    return { success: true };
  };

  const register = async (firstName, lastName, email, password, userRole) => {
    return login(email, password, userRole, firstName, lastName);
  };

  const incrementPostCount = () => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, totalPosts: (prev.totalPosts || 0) + 1 };
      localStorage.setItem('econique_user', JSON.stringify(updated));
      return updated;
    });
  };

  const addLikes = (n) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, totalLikes: (prev.totalLikes || 0) + n };
      localStorage.setItem('econique_user', JSON.stringify(updated));
      return updated;
    });
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
    <AuthContext.Provider value={{ user, role, login, register, incrementPostCount, addLikes, logout, isAuthenticated }}>
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
