import React, { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const lastMsg = useRef();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi there! I'm you AI assistant, I'm here to help you out with your questions. Ask me anything you want.",
    },
  ]);
  const [processing, setProcessing] = useState(false);

  const handleSubmission = async () => {
    if (!messageText.trim() || processing) return;
  
    const tempMessages = [
      ...messages,
      {
        from: "human",
        text: messageText,
      },
    ];
  
    setMessages(tempMessages);
    setMessageText("");
  
    setTimeout(() =>
      lastMsg.current.scrollIntoView({
        behavior: "smooth",
      })
    );
  
    try {
      setProcessing(true);
      const res = await fetch(`http://localhost:8000/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          question: messageText, // Include the question key here
        }),
      });
      setProcessing(false);
  
      const data = await res.text(); // Assuming API returns plain text
      const ans = data.trim();
  
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: ans,
        },
      ]);
    } catch (err) {
      const error = "Error Processing this message. Please try again later";
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: error,
        },
      ]);
    }
  
    setTimeout(() =>
      lastMsg.current.scrollIntoView({
        behavior: "smooth",
      })
    );
  };
  
  return (
    <AppContext.Provider
      value={{
        lastMsg,
        messageText,
        setMessageText,
        processing,
        setProcessing,
        messages,
        setMessages,
        handleSubmission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
