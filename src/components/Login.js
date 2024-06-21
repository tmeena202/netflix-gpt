import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form Data
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(message);

    // Proceed and do sign up and sign in
  };

  const toggleSingInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black  bg-opacity-85 rounded-md w-4/12 mx-auto my-24 right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 w-full rounded-md bg-transparent border border-white text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email or number"
          className="my-4 p-2 w-full rounded-md bg-transparent border border-white text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="my-4 p-2 w-full rounded-md bg-transparent border border-white text-white"
        />
        <p className="text-red-500 text-sm">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="my-4 p-2 w-full bg-red-600 rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSingInForm}>
          {isSignInForm
            ? " New to Netflix? Sign up now"
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
