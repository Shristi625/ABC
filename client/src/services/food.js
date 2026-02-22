import api from "../lib/axios";

// Get all foods (with optional filters)
export const getAllFoods = (params = {}) =>
  api.get("/api/v1/foods", { params });

// Get food types
export const getFoodTypes = () => api.get("/api/v1/foods/types");

// Get single food by ID
export const getFoodById = (id) => api.get(`/api/v1/foods/${id}`);

// Admin only - Create new food
export const createFood = (formData) => api.post("/api/v1/foods", formData);

// Admin only - Update food
export const updateFood = (id, formData) =>
  api.put(`/api/v1/foods/${id}`, formData);

// Admin only - Delete food
export const deleteFood = (id) => api.delete(`/api/v1/foods/${id}`);
