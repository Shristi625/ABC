import api from "../lib/axios";

// Get current user profile
export const getUserProfile = () => api.get("/api/v1/users/profile");

// Update user profile with avatar file
export const updateUserProfile = (formData) =>
  api.put("/api/v1/users/profile", formData);

// Change user password
export const changeUserPassword = (payload) =>
  api.put("/api/v1/users/change-password", payload);

// Get user by ID
export const getUserById = (id) => api.get(`/api/v1/users/${id}`);

// Delete user account
export const deleteUserAccount = () => api.delete("/api/v1/users/account");
