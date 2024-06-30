import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form Data
    const nameValue = name.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(passwordValue);

    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    // Proceed and do sign up and sign in
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: nameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL || USER_AVATAR,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-full"
          src={NETFLIX_BG}
          alt="background_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black bg-opacity-85 rounded-md w-[90%] md:w-4/12 mx-auto my-40 md:my-24 right-0 left-0"
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
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign up now"
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
