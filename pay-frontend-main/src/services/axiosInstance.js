import axios from "axios";
import { baseURL } from "../constants/Constant";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = JSON.parse(localStorage.getItem("user_data")) || "";
    config.headers.Authorization = `${authToken.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if it's a 401 error. If it is, the token is either expired or invalid.
    if (error.response.status === 401) {
      // Remove the token from localStorage.
      localStorage.removeItem("user_data");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
