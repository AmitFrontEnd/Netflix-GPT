import React from "react";

const BrowsePageLoading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        {/* Outer glow */}
        <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl" />

        {/* Spinner */}
        <div
          className="
            h-14 w-14
            rounded-full
            border-4
            border-gray-800
            border-t-red-600
            border-r-red-600
            animate-spin
          "
        />

        {/* Center Netflix-style N */}
        <span className="absolute text-xl font-extrabold text-red-600">
          N
        </span>
      </div>
    </div>
  );
};

export default BrowsePageLoading;