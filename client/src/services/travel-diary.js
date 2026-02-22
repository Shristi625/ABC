import api from "../lib/axios";

export const createTravelDiary = (data) =>
  api.post("api/v1/travel-diaries", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getMyTravelDiaries = () => api.get("api/v1/travel-diaries");

export const getTravelDiaryById = (id) =>
  api.get(`api/v1/travel-diaries/${id}`);

export const updateTravelDiary = (id, data) =>
  api.put(`api/v1/travel-diaries/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteTravelDiary = (id) =>
  api.delete(`api/v1/travel-diaries/${id}`);
