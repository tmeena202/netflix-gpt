/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-5ABamdjUOKrqfpnGorQH2qX1bh2uWKY",
  authDomain: "moviegpt-5072f.firebaseapp.com",
  projectId: "moviegpt-5072f",
  storageBucket: "moviegpt-5072f.appspot.com",
  messagingSenderId: "216912789964",
  appId: "1:216912789964:web:3fa71149e48c4f15e31d69",
  measurementId: "G-517EK4VGE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
