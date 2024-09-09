// src/components/ChatWindow.jsx
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MDEditor from "@uiw/react-md-editor";
import InputBox from "./InputBox";

import logo from "../../../assets/icons/chat buddy.svg";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Header = () => {
  return (
    <div className="text-center text-white py-5">
      <h1 id="chat-header" className="flex justify-center items-end">
        <img src={logo} alt="gemini" width={30} />
        <b className="ml-1">Chat-buddy</b>
      </h1>
      <small>Ask away!</small>
    </div>
  );
};

const ChatWindow = () => {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (inputText) => {
    if (!inputText) {
      return;
    }

    // Update messages with the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user", timestamp: new Date() },
    ]);

    setLoading(true);

    try {
      const result = await model.generateContent(inputText);
      const text = result.response.text();

      // Check if the response is code before updating messages
      const isCode = text.includes("```");

      // Update messages with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: text,
          sender: "ai",
          timestamp: new Date(),
          isCode, // Add a flag to identify code snippets
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div className="w-full h-full object-cover flex flex-col justify-between bg-teal-600 p-5">
      <Header />
      <div className="flex-grow overflow-y-auto" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 mb-4 rounded-lg border ${
              message.sender === "user"
                ? "self-end bg-gray-300 text-white border-teal"
                : "self-start bg-gray-300 text-white border-teal-600"
            }`}
          >
            {message.isCode ? (
              <MDEditor.Markdown
                source={message.text}
                style={{ whiteSpace: "pre-wrap" }}
              />
            ) : (
              <>
                <p className="message-text">{message.text}</p>
                <span
                  className={`text-xs ${
                    message.sender === "user" ? "text-white" : "text-white"
                  }`}
                >
                  {message.timestamp
                    ? dayjs(message.timestamp).format("DD.MM.YYYY HH:mm:ss")
                    : ""}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      <InputBox sendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default ChatWindow;
