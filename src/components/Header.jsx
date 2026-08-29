import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="p-8 relative bg-gradient-to-b from-black/40 to-transparent z-50 flex justify-between items-center">
      <div>
        <img src="./logo.svg" alt="Netflix Logo" className="w-30" />
      </div>
      {user && (
        <button
          className="bg-red-600 text-white p-2 rounded-sm cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;
