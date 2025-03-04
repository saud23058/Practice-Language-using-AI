"use client";
import { useConversation } from "@11labs/react";
import React from "react";

const Conversation = () => {
  const conversation = useConversation();
  const { status } = conversation;

  const startConversation = async () => {
    try {
      await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_AGENT_ID,
      });
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };

  const endConversation = async () => {
    await conversation.endSession();
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6">
      <h1 className="text-2xl font-bold mb-12 text-gray-500">Please Allow your mic to start conversation with AI</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800"><span className='bg-linear-to-r from-black to-blue-400 bg-clip-text text-transparent'>Conversation wih AI</span></h1>
        <p className="mt-2 text-gray-500">Click the button below to start</p>

        {status === "connected" ? (
          <button
            onClick={endConversation}
            className="mt-4 px-6 py-2 text-white bg-black hover:bg-gray-600 rounded-lg disabled:bg-gray-400"
          >
            End Conversation
          </button>
        ) : (
          <button
            onClick={startConversation}
            className="mt-4 px-6 py-2 text-white  bg-black hover:bg-gray-600 rounded-lg disabled:bg-gray-400"
          >
            Start Conversation
          </button>
        )}
      </div>
    </div>
  );
};

export default Conversation;
