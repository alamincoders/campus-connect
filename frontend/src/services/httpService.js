import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance with a base URL and default headers
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URI}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptor to add authorization header if user is logged in
instance.interceptors.request.use((config) => {
  let user;
  if (Cookies.get("user")) {
    user = JSON.parse(Cookies.get("user"));
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: user ? `Bearer ${user?.token}` : null,
    },
  };
});

// Response interceptor to handle CORS errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle CORS error here
    if (error.response.status === 403) {
      // Redirect or handle the error as needed
      console.error("CORS Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// Helper function to extract data from the response
const responseBody = (response) => response.data;

// Object containing various HTTP request methods
const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),
  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),
  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),
  patch: (url, body, headers) =>
    instance.patch(url, body, headers).then(responseBody),
  delete: (url, body, headers) =>
    instance.delete(url, body, headers).then(responseBody),
};

export default requests;
