// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjoXCuxMjt9T4SiPJCeeYR5ZeEj06TlHs",
  authDomain: "spacetravel-5de7a.firebaseapp.com",
  projectId: "spacetravel-5de7a",
  storageBucket: "spacetravel-5de7a.appspot.com",
  messagingSenderId: "837488187883",
  appId: "1:837488187883:web:55668ad1dc38157984e1ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



