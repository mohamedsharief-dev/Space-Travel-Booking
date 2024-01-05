import { signInWithEmailAndPassword } from "firebase/auth";

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in: ", user);
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