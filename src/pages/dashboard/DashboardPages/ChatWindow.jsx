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
    <div className="text-center py-5 ">
      <h1 id="chat-header" className="flex justify-center items-end">
        <img src={logo} alt="gemini" width={30} />
        <b className="text-cener">Chat-buddy</b>
      </h1>
      <small>Ask away!</small>
    </div>
  );
};

const ChatWindow = () => {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (inputText) => {
    if (!inputText) {
      return;
    }

    // Hide header after the first message
    if (showHeader) {
      setShowHeader(false);
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

      // Update messages with the AI response and assume Markdown format
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: text,
          sender: "ai",
          timestamp: new Date(),
          isMarkdown: true, // Set flag for Markdown rendering
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div className="w-full h-full object-cover flex flex-col justify-between bg-white px-4 sm:px-10 md:px-16 lg:px-36">
      {showHeader && <Header />}
      <div className="flex-grow overflow-y-auto" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 mb-4 rounded-2xl ${
              message.sender === "user"
                ? "self-end border border-teal-200 bg-teal-200 sm:w-3/4 md:w-3/5 ml-auto"
                : "self-start"
            }`}
          >
            {message.isMarkdown ? (
              <MDEditor.Markdown
                source={message.text}
                style={{
                  whiteSpace: "pre-wrap",
                  backgroundColor: "white", // Set background to white
                  color: "black", // Ensure text color is black for readability
                  padding: "10px", // Add padding for better spacing
                  borderRadius: "8px", // Optional: Rounded corners for a cleaner look
                }}
              />
            ) : (
              <>
                <p className="message-text mb-2">{message.text}</p>
                <span
                  className={`text-xs font-light ${
                    message.sender === "user"
                      ? "text-gray-700"
                      : "text-gray-700"
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
