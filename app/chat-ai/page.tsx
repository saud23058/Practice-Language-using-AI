"use client";
import { usePromptMutation } from "@/lib/redux_toolkit/features/chatApiSlice";
import React, { useState } from "react";
import markdown from "markdown-it";
import { Mic } from "lucide-react";
const md = markdown();
const AskAI = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [userInput, setUserInput] = useState<string[]>([]);

  const [chatApiSlice, { isLoading, error }] = usePromptMutation();

  const handler = async () => {
    if (!prompt.trim()) {
      setMessage("Please enter something");
      return;
    }
    if (userInput.length > 2) {
      setMessage("Please clear the chat history for better performance");
      return;
    }
    setPrompt("");
    setUserInput((pre) => [...pre, prompt]);
    const res = await chatApiSlice(prompt);
    setResponse((pre) => [...pre, res.data.model]);
  };

  const clear = () => {
    setUserInput([]);
    setResponse([]);
    setMessage("");
  };

  const startRecording = () => {
    const speechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.onresult = async (e) => {
      const text = e.results[0][0].transcript;
      setPrompt(text);
    };

    recognition.start();
  };

  return (
    <div className="flex justify-center items-center overflow-hidden w-full px-40">
      <div className="flex w-full h-[580px] justify-center items-center flex-col">
        <div className="flex flex-col w-full h-[450px] overflow-y-auto">
          {userInput.map((user, index) => (
            <div key={index} className="flex justify-end">
              <div className="bg-gray-400 px-4 py-2 m-2 rounded-xl text-black max-w-[60%]">
                {user}
              </div>
            </div>
          ))}
          {response.map((res, index) => (
            <div key={index} className="flex justify-start">
              <div className="bg-black text-white px-4 py-2 m-2 rounded-xl max-w-[60%]">
              🤖  <div dangerouslySetInnerHTML={{ __html: md.render(res) }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 items-center mt-12 w-[684px]">
          <input
            type="text"
            value={prompt}
            placeholder="Type your message"
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full py-4 rounded-md px-3 text-white bg-gray-500 focus:outline-none"
          />
          <Mic
            className="w-12 h-12 p-3 bg-black  hover:cursor-pointer hover:bg-gray-700 rounded-full text-white"
            onClick={startRecording}
          >
            Voice Input
          </Mic>
        </div>
        <button
          className="bg-black px-3 py-2 rounded-xl text-white text-xl font-bold hover:cursor-pointer mt-4 w-96"
          onClick={handler}
          disabled={isLoading}
        >
          {isLoading ? "Submitting.." : "Submit"}
        </button>
        {message && (
          <div>
            {message}{" "}
            <button
              className="bg-black px-3 py-2 rounded-xl text-white text-xl font-bold hover:cursor-pointer mt-4 w-96"
              onClick={clear}
            >
              Clear
            </button>
          </div>
        )}
        {error && <p className="text-red-500">{error.toString()}</p>}
      </div>
    </div>
  );
};

export default AskAI;
