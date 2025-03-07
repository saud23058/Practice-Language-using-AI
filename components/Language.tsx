"use client"
import { useUserIdMutation } from "@/lib/redux_toolkit/features/chatApiSlice";
import React, { useEffect, useState } from "react";

const Language = ({ userId }: { userId: string }) => {
  const [func] = useUserIdMutation()
  const [language,setLanguage]=useState("")
  
  useEffect(() => {
    const fetchLanguage = async() => {
      const res = await func(userId)
      setLanguage(res.data.language)
      
    }
    fetchLanguage()
},[])


  return (
    <div>
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-60 h-[156px]">
        <h2 className="text-lg font-bold mb-2">Selected Language</h2>

        <p className="text-green-600 text-xl font-bold">{language }</p>
      </div>
    </div>
  );
};

export default Language;
