import api from "../lib/axios";

export const signup = (data) => api.post("/api/v1/auth/sign-up", data);

export const login = (data) => api.post("/api/v1/auth/login", data);

export const logout = async () => {
  try {
    const response = await api.post("/api/v1/auth/logout");
    // Clear authentication token and user data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    return response;
  } catch (error) {
    // Still clear everything even if API fails
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    throw error;
  }
};

export const googleSignup = () => {
  const base = import.meta.env.VITE_API_BASE_URL || "";
  window.location.href = `${base}/api/v1/auth/google`;
};
