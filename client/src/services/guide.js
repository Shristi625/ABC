import api from "../lib/axios";

// Get all guides (with optional filters)
export const getAllGuides = (params = {}) =>
    api.get("/api/v1/guides", { params });

// Get guide specialties
export const getGuideSpecialties = () => api.get("/api/v1/guides/specialties");

// Get guide locations
export const getGuideLocations = () => api.get("/api/v1/guides/locations");

// Get guide languages
export const getGuideLanguages = () => api.get("/api/v1/guides/languages");

// Get single guide by ID
export const getGuideById = (id) => api.get(`/api/v1/guides/${id}`);

// Add review to guide
export const addReview = (id, reviewData) =>
    api.post(`/api/v1/guides/${id}/reviews`, reviewData);

// Admin only - Create new guide
export const createGuide = (formData) => api.post("/api/v1/guides", formData);

// Admin only - Update guide
export const updateGuide = (id, formData) =>
    api.put(`/api/v1/guides/${id}`, formData);

// Admin only - Delete guide
export const deleteGuide = (id) => api.delete(`/api/v1/guides/${id}`);
