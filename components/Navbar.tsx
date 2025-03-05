import React from "react";
import GoogleButton from "./GoogleButton";
import { Mic } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import Image from "next/image";
const Navbar = async () => {
  const session = await auth();
  const user = session?.user;
  

  return (
    <nav>
      <div className="w-full py-4 flex justify-between items-center px-8">
        <Mic size={30} />
        <div>
          {user ? (<div className="flex justify-center items-center gap-4">
            <form action={async() => {
              "use server"
              await signOut({redirectTo:'/'})
            }}>
              <button className="bg-white py-2 px-3 rounded-xl font-bold hover:bg-gray-600 cursor-pointer">Logout</button>
            </form>
            <Image
              src={user.image!}
              width={50}
              height={50}
              alt={user.name?.charAt(0) || ""}
            
              className="rounded-full"
            />
            </div>
          ) : (
            <GoogleButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
