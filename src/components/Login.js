import React from "react";
import Header from "./Header";
import ControlledCheckBox from "./CheckBox";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSingInForm = (event) => {
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-screen h-auto object-cover"
          src="https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
          alt="landing-image"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-xl">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-xl"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-xl"
        />
        <input
          type="password"
          placeholder="PassWord"
          className="p-4 my-4 w-full rounded-xl"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <ControlledCheckBox />
        <div className="flex  justify-center items-center p-6">
          <h2 className="pr-6">
            {isSignInForm ? "New to Netflix?" : "Already registered!"}
          </h2>
          <button
            className="bg-red-700 px-2 py-2 rounded-xl cursor-pointer"
            onClick={toggleSingInForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
