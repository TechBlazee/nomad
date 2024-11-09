// subscribe.mjs
import emailjs from "@emailjs/nodejs";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables


export const sendSubscriptionEmail = async (email) => {
  const emailData = {
    to: email,
    subject: "Subscription Confirmation",
    message: `You have successfully subscribed to the Nomad Haven newsletter.`,
  };

  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID,
       process.env.TEMPLATE_ID,
      emailData,
      {
        publicKey: process.env.publicKey,
        privateKey: process.env.privateKey, // optional, highly recommended for security reasons
      }
    );

    return {
      status: response.status,
      text: response.text,
    };
  } catch (error) {
    throw new Error(`Email sending failed: ${error.message}`);
  }
};
