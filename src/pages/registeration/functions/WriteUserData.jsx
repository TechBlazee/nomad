import { useState } from "react";
import { writeUserData } from "./database";

const WriteUserData = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await writeUserData(userId, email);
      alert("Data written successfully!");
    } catch (error) {
      alert("Failed to write data: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write User Data</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Write Data</button>
    </form>
  );
};

export default WriteUserData;
