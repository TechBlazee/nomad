// server.js
import express from "express";
import cors from "cors"; // Importing the cors package
import { sendSubscriptionEmail } from "../src/components/function/subscribe.mjs";

const app = express();
const PORT = 5000;

app.use(cors()); // Using cors middleware
app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await sendSubscriptionEmail(email);
    res.status(200).json({ message: "Subscription successful", response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
