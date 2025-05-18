import axios from "axios";
import type { LoginData, UserData, AuthResponse } from "../types";

const API_URL = "http://localhost:8000/api"; // Sesuaikan dengan URL backend

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/users/login/`, data);
  return response.data;
};

export const getCurrentUser = (): UserData | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const storeAuthData = (data: AuthResponse): void => {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("refresh_token", data.refresh);
};

export const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getAuthHeader = (): { Authorization: string } | Record<string, never> => {
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
