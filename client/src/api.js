import axios from "axios";

const rawBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").trim();

function normalizeApiBaseUrl(value) {
  if (!value) return "http://localhost:3001/api";

  const withoutTrailingSlash = value.replace(/\/+$/, "");
  if (/\/api$/i.test(withoutTrailingSlash)) {
    return withoutTrailingSlash;
  }

  return `${withoutTrailingSlash}/api`;
}

const api = axios.create({
  baseURL: normalizeApiBaseUrl(rawBaseUrl),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const validToken =
    token && token !== "undefined" && token !== "null" ? token : null;

  if (validToken) {
    config.headers.Authorization = `Bearer ${validToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const path = window.location.pathname || "";
    const onAuthPage = path.startsWith("/login") || path.startsWith("/register");

    if (status === 401 && !onAuthPage) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
