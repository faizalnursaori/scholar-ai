import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { UserData } from "../utils/types";
import { getCurrentUser } from "../utils/services/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleSetUser = (userData: UserData | null) => {
    setUser(userData);
    setIsAuthenticated(!!userData);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    logout();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setUser: handleSetUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
