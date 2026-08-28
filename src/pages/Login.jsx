import React, { useRef, useState } from "react";
import { formValidation } from "../utils/validation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const validate = formValidation(
      email.current.value,
      password.current.value,
      !isSignIn ? name.current.value : null,
    );
    setError(validate);
  };
  return (
    <div>
      <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_small.jpg")] absolute top-0 left-0 z-[-1] w-full h-screen'></div>

      <div className="absolute top-0 left-0 bg-black opacity-70 h-screen w-full"></div>

      <form
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 min-h-100 w-[90%] max-w-90 text-white rounded-sm p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="font-bold text-xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full rounded-sm bg-gray-800 p-2 mb-6 border-0 outline-0"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter your Email"
          className="w-full rounded-sm bg-gray-800 p-2 mb-6 border-0 outline-0"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="w-full rounded-sm bg-gray-800 p-2 mb-6 border-0 outline-0"
        />
        <button
          className="bg-red-600 w-full rounded-sm cursor-pointer p-2 mb-6"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold text-center mb-4">
          {error && error}
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsSignIn(!isSignIn);
            setError(null);
          }}
        >
          {isSignIn
            ? "New to Netflix? Click here for Sign Up"
            : "Already have an account Click here for Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
