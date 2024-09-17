import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABRwp44EBxrx0kia7picM201Dmq9h85X0",
  authDomain: "registrationnomad.firebaseapp.com",
  databaseURL:
    "https://registrationnomad-default-rtdb.firebaseio.com" ||
    "http://localhost:5173",
  projectId: "registrationnomad",
  storageBucket: "registrationnomad.appspot.com",
  messagingSenderId: "684716994418",
  appId: "1:684716994418:web:6953186f74fca1d603b7eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database, firebaseConfig, getAuth };
