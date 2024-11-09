// subscribe.mjs
import emailjs from "@emailjs/nodejs";


export const sendSubscriptionEmail = async (email) => {
  const emailData = {
    to: email,
    subject: "Subscription Confirmation",
    message: `You have successfully subscribed to the Nomad Haven newsletter.`,
  };

  try {
      const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      emailData,
      {
        publicKey: import.meta.env.VITE_publicKey,
        privateKey: import.meta.env.VITE_privateKey, // optional
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
