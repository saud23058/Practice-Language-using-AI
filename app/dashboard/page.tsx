import NewWord from "@/components/NewWord";
import Language from "@/components/Language";
import Streak from "@/components/Streak";
import { userSession } from "@/lib/userSession";
import Link from "next/link";
import React, { Suspense } from "react";

const Dashboard = async () => {
  const userId = (await userSession()) || "";

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
       <h1 className="font-bold text-5xl ">
          Dashboard
        </h1>
      <p className="text-center text-lg font-semibold text-gray-600">
        Please select the Language in the Grammar portion before starting
        practice
      </p>

      <div className="flex gap-4 justify-center items-center w-full ">
        <Suspense fallback="Fetching data...">
          <NewWord userId={userId} />
        </Suspense>

        <Suspense fallback="Fetching data...">
          <Streak userId={userId} />
        </Suspense>
        <Suspense fallback="Fetching data...">
        <Language userId={userId} />
        </Suspense>
       
      </div>
    
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/grammar">
          <button className="bg-black py-2 px-4 text-white rounded-md hover:bg-gray-700 font-bold">
            Grammar Portion
          </button>
        </Link>
        <Link href="/chat-ai">
          <button className="bg-black py-2 px-4 text-white rounded-md hover:bg-gray-700 font-bold">
            Text & Voice Chat with AI
          </button>
        </Link>
        <Link href="/objects-names">
          <button className="bg-black py-2 px-4 text-white rounded-md hover:bg-gray-700 font-bold">
          Real world objects
          </button>
        </Link>
        <Link href="/conversation">
          <button className="bg-black py-2 px-4 text-white rounded-md hover:bg-gray-700 font-bold">
            Conversation with AI
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default Dashboard;
