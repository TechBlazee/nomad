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
      "service_bdd86uu",
      "template_ldbfi8k",
      emailData,
      {
        publicKey: "uqa0JEUP6Yaxx_xcG",
        privateKey: "Vs1tsLJUqDIUI0DB-6xeO", // optional, highly recommended for security reasons
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