import React from "react";
import GoogleButton from "./GoogleButton";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full py-4 flex justify-between items-center px-8">
        <h1>LOGO</h1>
        <div>
          <GoogleButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
