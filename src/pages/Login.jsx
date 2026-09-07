import React, { useRef, useState } from "react";
import { formValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const errorMessage = formValidation(
      email.current.value,
      password.current.value,
      !isSignIn ? name.current.value : null,
    );
    setError(errorMessage);
    if (errorMessage) return;
    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {});
        })
        .catch((error) => {
          if (error.message.includes("auth/email-already-in-use")) {
            setError("Email is already registered please sign in...");
            name.current.value = "";
            email.current.value = "";
            password.current.value = "";
          } else {
            setError("Some error occured");
          }
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          if (error.message.includes("auth/invalid-credential")) {
            setError("Email or password is invalid");
          } else {
            setError("Some error occ");
          }
        });
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className='absolute inset-0 bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_small.jpg")] bg-cover bg-center' />

      <div className="absolute inset-0 bg-black/65" />

      <form
        className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[90%] max-w-[420px]
        rounded-md
        bg-black/85
        px-7 py-9
        text-white
        shadow-2xl
        sm:px-10 sm:py-10
      "
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="mb-7 text-3xl font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="
            mb-4 w-full rounded-md
            bg-[#333]
            px-4 py-3
            text-sm text-white
            placeholder:text-gray-400
            outline-none
            transition
            focus:bg-[#3d3d3d]
            focus:ring-1 focus:ring-gray-500
          "
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="
          mb-4 w-full rounded-md
          bg-[#333]
          px-4 py-3
          text-sm text-white
          placeholder:text-gray-400
          outline-none
          transition
          focus:bg-[#3d3d3d]
          focus:ring-1 focus:ring-gray-500
        "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="
          mb-2 w-full rounded-md
          bg-[#333]
          px-4 py-3
          text-sm text-white
          placeholder:text-gray-400
          outline-none
          transition
          focus:bg-[#3d3d3d]
          focus:ring-1 focus:ring-gray-500
        "
        />

        {!isSignIn && (
          <p className="mb-5 text-xs text-gray-500">
            Password must contain at least 8 characters and 1 capital letter.
          </p>
        )}

        <button
          className="
          mb-5 w-full rounded-md
          bg-red-600
          px-4 py-3
          text-sm font-semibold
          text-white
          transition
          hover:bg-red-700
          active:scale-[0.99]
          cursor-pointer
        "
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="mb-5 min-h-5 text-center text-sm font-medium text-red-500">
          {error && error}
        </p>

        <p className="text-sm text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}
          <span
            className="ml-1 cursor-pointer text-white hover:underline"
            onClick={() => {
              setIsSignIn(!isSignIn);
              setError(null);
            }}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
