"use client";
import { useNewWordMutation } from "@/lib/redux_toolkit/features/chatApiSlice";
import React, { useEffect, useState } from "react";

interface Props {
  userId: string;
}

const NewWord = ({ userId }: Props) => {
  const [newWordMutation, { isLoading, error }] = useNewWordMutation();
  const [word, setWord] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewWord = async () => {
      try {
        const response = await newWordMutation(userId).unwrap();
        setWord(response.modal);
      } catch (err) {
        console.error("Error fetching new word:", err);
      }
    };

    fetchNewWord();
  }, [newWordMutation, userId]);

  return (
    <div>
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-60 h-[156px]">
        <h2 className="text-lg font-bold mb-2">New Word</h2>
        {isLoading ? (
          <p className="text-blue-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Failed to fetch word.</p>
        ) : (
          <p className="text-green-600 text-xl font-bold">{word}</p>
        )}
      </div>
    </div>
  );
};

export default NewWord;
