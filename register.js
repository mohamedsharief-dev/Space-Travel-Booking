const firebase = window.firebase;
const auth = firebase.auth();

function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registration successful.
            var user = userCredential.user;
            // You can use the 'user' object here.
        })
        .catch((error) => {
            // An error occurred. Handle it here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('registerEmailInput').value;
    const password = document.getElementById('registerPasswordInput').value;
    signUp(email, password);
});