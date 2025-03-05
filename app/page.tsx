import Preview from "@/components/Preview";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const session = await auth();

  const user = session?.user;
  if (user) redirect("/dashboard")
 

  return (
    <main className="w-full flex flex-col items-center mt-12 gap-3">
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
      <Preview />
    </main>
  );
};

export default Home;
