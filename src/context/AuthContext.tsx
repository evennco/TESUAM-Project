"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (!tokenCookie) return;

    const token = tokenCookie.split('=')[1];

    try {
      const decoded = jwt.decode(token) as { exp?: number };
      
      if (!decoded || (decoded.exp && decoded.exp * 1000 < Date.now())) {
        console.warn("Token inválido o expirado");
        return;
      }

      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error al verificar el token:", error);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    router.push('/');
  };

  const logout = async () => {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Error al cerrar sesión');
        }

        setIsAuthenticated(false);
        router.push('/login');
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
