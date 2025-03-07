import GoogleButton from "@/components/GoogleButton";
import Preview from "@/components/Preview";
import { userSession } from "@/lib/userSession";

import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  
  const user =await userSession();
  if (user) redirect("/dashboard")
 
  return (
    <main className="w-full flex flex-col items-center mt-5 gap-3">
      <h1 className="text-4xl font-bold text-black">
        Welcome to language Practice Platform{" "}
        <span className="bg-linear-to-r from-black to-blue-400 bg-clip-text text-transparent">
          Powered by AI
        </span>
      </h1>
      <p className="text text-gray-700">
        Improve your language skills with text & voice input, real-world
        conversations, vocabulary building, grammar tips, and progress tracking!
        🚀
      </p>
      <GoogleButton title="Get started and Continue with google"/>
      <Preview />
    </main>
  );
};

export default Home;
