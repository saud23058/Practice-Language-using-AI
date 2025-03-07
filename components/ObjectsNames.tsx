"use client"
import { useObjectsMutation } from '@/lib/redux_toolkit/features/chatApiSlice';
import React, { useEffect, useState } from 'react';
import markdown from "markdown-it";

const md = markdown({ breaks: true });

const ObjectsNames = ({ userId }: { userId: string }) => {
  const [data, setData] = useState<string>("");
  const [func, { isLoading, error }] = useObjectsMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await func(userId);
        setData(response.data.modal);
      } catch (err) {
        console.error("Error fetching data:", err);
        setData("## ❌ Error loading content.");
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {isLoading ? (
        <p className="text-lg text-blue-500 font-semibold text-center animate-pulse">🔄 Loading...</p>
      ) : (
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed" 
             dangerouslySetInnerHTML={{ __html: md.render(data) }} />
      )}
      {error && <p className="text-red-500 font-semibold text-center mt-4">❌ Failed to load data.</p>}
    </div>
  );
};

export default ObjectsNames;
