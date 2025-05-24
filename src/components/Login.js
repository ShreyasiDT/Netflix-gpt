import React from "react";
import Header from "./Header";
import ControlledCheckBox from "./CheckBox";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSingInForm = (event) => {
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate my form, if the email and password is acceptable or not
    checkValidData(email, password);
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-screen h-auto object-cover"
          src="https://i.pinimg.com/736x/b4/b3/7d/b4b37d0de743c3aacd6c652578b03c4e.jpg"
          alt="landing-image"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-xl">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-xl"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-xl bg-slate-200 text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="PassWord"
          className="p-4 my-4 w-full rounded-xl bg-slate-200 text-black"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-xl"
          onClick={handleButtonClick}
        >
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
            {isSignInForm ? "Sign In" : "Sign Up "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
