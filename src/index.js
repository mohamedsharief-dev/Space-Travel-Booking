// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
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

document.getElementById('register-form').addEventListener('submit', register);



// Function to login a user
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // The user is signed in!
      console.log("User logged in: ", userCredential.user);
    })
    .catch((error) => {
      console.error("Error logging in: ", error);
    });
}


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in: ", user);
  } else {
    console.log("No users is logged in.");
  }
});

function register(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("User registered: " + userCredential.user.email);
        })
        .catch((error) => {
            alert("Error registering user: " + error.message);
        });
}