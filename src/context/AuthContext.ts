import { createContext } from "react";

export interface User {
  username: string;
  fullname: string;
  email: string;
  phone: string;
}

export interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
