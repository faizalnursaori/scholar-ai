import axios from "axios";
import type { LoginData, UserData, AuthResponse, RegistrationPayload } from "../types";
import { api } from "../axios";

export const notifyAuthChange = () => {
  window.dispatchEvent(new Event("auth-change"));
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>("/users/login/", data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    }
    throw new Error("Login failed");
  }
};

export const getCurrentUser = (): UserData | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const storeAuthData = (data: AuthResponse): void => {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("refresh_token", data.refresh);

  notifyAuthChange();
};

export const logout = async (): Promise<void> => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");

    if (refreshToken && accessToken) {
      await api.post(
        "/users/logout/",
        { refresh: refreshToken },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    }
  } catch (error) {
    console.error("Logout API call failed:", error);
  } finally {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    notifyAuthChange();
  }
};

export const getAuthHeader = (): { Authorization: string } | Record<string, never> => {
  const token = localStorage.getItem("access_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const registerUser = (payload: RegistrationPayload) => {
  return api.post("/users/register/", payload);
};
