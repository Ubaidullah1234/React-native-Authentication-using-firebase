// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDocrTTVrHbtmfFOpLlyi_6I7wUxvyZ-Hw",
  authDomain: "rnauth-7057f.firebaseapp.com",
  projectId: "rnauth-7057f",
  storageBucket: "rnauth-7057f.appspot.com",
  messagingSenderId: "418451433641",
  appId: "1:418451433641:web:7a2ba8ab65c971a0ebe1b8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);