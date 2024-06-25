import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptsearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex px-1 py-4">
          <button
            onClick={handleGptsearchClick}
            className="my-2 px-2 py-1 mx-4 bg-purple-800 bg-opacity-70 text-white border border-white rounded-2xl"
          >
            🤩 GPT Search
          </button>
          <img
            className="w-10 h-10 my-2 rounded-md"
            src={user.photoURL}
            alt="userIcon"
          />
          <button onClick={handleSignOut} className="text-white font-bold p-1">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
