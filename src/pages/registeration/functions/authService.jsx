import axiosInstance from "./axiosConfig";
import { toast } from "react-toastify";
import { auth, provider } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

// Function to set the auth header
const setAuthHeader = async () => {
  const authInstance = getAuth();
  const user = authInstance.currentUser;

  if (user) {
    const token = await user.getIdToken(true); // Fetches a fresh token
   // console.log("Setting token:", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
   // console.log("No user is authenticated");
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// Sign Up
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
   // console.log("User credential after sign-up:", userCredential); // Log user credential

    await setAuthHeader();
    await axiosInstance.post(`/users/${user.uid}.json`, { email });

    toast.success("User created successfully!");
    return user;
  } catch (error) {
  //  console.error("Sign-up error:", error); // Log error
    toast.error("Email already in use");
    throw error;
  }
};

// Log In
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
   // console.log("User credential after log-in:", userCredential); // Log user credential

    await setAuthHeader();
    toast.success("User logged in successfully!");
    return userCredential.user;
  } catch (error) {
   // console.error("Log-in error:", error); // Log error
    toast.error("Log in failed, check your details");
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
   // console.log("Result after Google sign-in:", result); // Log result

    await setAuthHeader();
    toast.success("Success!");
    return result.user;
  } catch (error) {
   // console.error("Google sign-in error:", error); // Log error
    toast.error("Error, Please try again");
    throw error;
  }
};
