import axios from "axios";

export const api = axios.create({
  baseURL: "https://project-winevo-backend.onrender.com/api",
  withCredentials: true,
});

// export const api = axios.create({
//   baseURL: "http://localhost:8080/api",
//   withCredentials: true,
// });

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = ``;
};
