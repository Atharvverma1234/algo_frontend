import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // In a real app, you would verify credentials with a backend
    const userData = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const signup = (email, password) => {
    // In a real app, you would create a new user in backend
    const userData = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const deleteAccount = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};