"use client";

import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const { data } = await api.get("/auth/me");
      if (data.success) {
        setUser(data.user);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (rollNo, password) => {
    try {
      const { data } = await api.post("/auth/login", { rollNo, password });
      if (data.success) {
        setUser(data.user);
        // if (data.user.role === "admin") {
        //   router.push("/admin");
        // } else {
        //   router.push("/");
        // }
      }
      return data;
    } catch (err) {
      throw err.response?.data || err;
    }
  };

  const signup = async (userData) => {
    try {
      const { data } = await api.post("/auth/signup", userData);
      if (data.success) {
        setUser(data.user);
        if (data.user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }
      return data;
    } catch (err) {
      throw err.response?.data || err;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, checkUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
