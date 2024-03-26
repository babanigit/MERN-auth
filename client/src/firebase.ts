// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bf717.firebaseapp.com",
  projectId: "mern-auth-bf717",
  storageBucket: "mern-auth-bf717.appspot.com",
  messagingSenderId: "776586159514",
  appId: "1:776586159514:web:721ea8f73be0bc8b198623"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);