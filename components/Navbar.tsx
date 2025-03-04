import React from "react";
import GoogleButton from "./GoogleButton";
import { Mic } from "lucide-react";
const Navbar = () => {
  return (
    <nav>
      <div className="w-full py-4 flex justify-between items-center px-8">
        <Mic size={30}/>
        <div>
          <GoogleButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
