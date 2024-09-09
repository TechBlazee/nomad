// addition

import { useState } from "react";
import { readUserData } from "../functions/database";

const ReadUserData = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleReadData = async () => {
    const data = await readUserData(userId);
    setUserData(data);
  };

  return (
    <div>
      <h2>Read User Data</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={handleReadData}>Read Data</button>
      {userData && (
        <div>
          <p>Name: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ReadUserData;
