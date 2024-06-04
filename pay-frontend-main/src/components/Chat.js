import React, { useEffect, useState } from "react";
import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  dropMessages,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { io } from "socket.io-client";
import { sendMessage } from "../services/chat_service";

const buttons = [
  { label: "first", value: "1" },
  { label: "second", value: "2" },
];

function generateSessionID() {
  const timestamp = Date.now();
  const uniqueString = Math.random().toString(36).substring(7);
  return `${timestamp}_${uniqueString}`;
}

const Chat = () => {
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const socket = io("https://oneozo.com/api");

    // const socket = io("http://localhost:5000/");
    const sessionID = generateSessionID();
    socket.emit("initiateChat", { sessionID });
    setSessionId(sessionID);

    socket.on("newUserNotification", (data) => {
      console.log(data);
      if (data?.data?.userType === "admin") {
        addResponseMessage(data?.data?.content);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = async (newMessage) => {
    const data = {
      sessionID: sessionId,
      senderID: `user_${sessionId}`,
      email: `user_${sessionId}`,
      name: `user_${sessionId}`,
      userType: "user",
      content: newMessage,
      contentType: "text",
    };
    try {
      const res = await sendMessage(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dropMessages(); // Clear previous chats
    addResponseMessage("How may I help you?");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    handleSendMessage(newMessage);
  };

  const handleQuickButtonClicked = (data) => {
    console.log(data);
    setQuickButtons(buttons.filter((button) => button.value !== data));
  };

  return (
    <div className="Chat">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
        title="One Ozo"
        subtitle="Customer Support"
        profileAvatar={"./images/career/logo1.png"}
        emojis={true}
        launcherOpenImg={"./images/career/logo1.png"}
      />
    </div>
  );
};

export default Chat;
