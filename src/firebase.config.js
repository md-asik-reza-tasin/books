// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwW0DC28d-nvYzUfPzMEuUDwh696HDdXY",
  authDomain: "books-authentication-d98e0.firebaseapp.com",
  projectId: "books-authentication-d98e0",
  storageBucket: "books-authentication-d98e0.firebasestorage.app",
  messagingSenderId: "240980054181",
  appId: "1:240980054181:web:a1f1ae9d0bf384dbddfd4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
