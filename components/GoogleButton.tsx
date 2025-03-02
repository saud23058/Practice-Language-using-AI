
import { signIn } from "@/lib/auth";
import React from "react";

const GoogleButton =  () => {
  const handler = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <form action={handler}>
      <button
        className="bg-black py-2 text-white px-4 rounded-md hover:bg-gray-700 cursor-pointer  font-bold"
        type="submit"
      >
        Continue with Google
      </button>
    </form>
  );
};

export default GoogleButton;
