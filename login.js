import firebase, { auth } from './firebaseConfig.js';

function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign in successful.
            var user = userCredential.user;
            // You can use the 'user' object here.
        })
        .catch((error) => {
            // An error occurred. Handle it here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function signOut() {
    auth.signOut()
        .then(() => {
            // Sign out successful.
        })
        .catch((error) => {
            // An error occurred. Handle it here.
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        var uid = user.uid;
        // You can use the 'uid' here.
    } else {
        // User is signed out.
    }
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    signIn(email, password);
});