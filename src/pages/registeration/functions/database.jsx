// src/database.js
import { ref, set, get, child } from "firebase/database";
import { database } from "./firebaseConfig";

// Write data to the database
export const writeUserData = (userId, email) => {
  set(ref(database, "users/" + userId), {
    email: email,
  });
};

// Read data from the database
export const readUserData = async (userId) => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
   //   console.log("No data available");
    }
  } catch (error) {
//    console.error(error);
  }
};
