import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjoXCuxMjt9T4SiPJCeeYR5ZeEj06TlHs",
  authDomain: "spacetravel-5de7a.firebaseapp.com",
  projectId: "spacetravel-5de7a",
  storageBucket: "spacetravel-5de7a.appspot.com",
  messagingSenderId: "837488187883",
  appId: "1:837488187883:web:55668ad1dc38157984e1ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in: ", user);
    window.location.href = '/index.html';
  } catch (error) {
    console.error("Error signing in with password and email", error);
  }
}

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});