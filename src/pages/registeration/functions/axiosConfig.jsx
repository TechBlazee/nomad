import axios from "axios";
import { getAuth } from "firebase/auth";

// Axios instance
const axiosInstance = axios.create({
  baseURL:
    "https://registrationnomad-default-rtdb.firebaseio.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the auth header
const setAuthHeader = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  try {
    if (user) {
      const token = await user.getIdToken(true); // Fetches a fresh token
      //  console.log("Setting token:", token);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      // console.log("No user is authenticated");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  } catch (error) {
    //  console.error("Error setting auth header:", error);
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// Add a request interceptor to ensure the token is set before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    await setAuthHeader();
    //  console.log("Request config:", config); // Log request configuration
    return config;
  },
  (error) => {
    //  console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
