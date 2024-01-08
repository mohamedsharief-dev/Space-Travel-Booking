import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

document.getElementById('register-form').addEventListener('submit', register);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in: ", user);
  } else {
    console.log("No users is logged in.");
  }
});

async function register(e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a new document in the 'users' collection with the user's ID
        await setDoc(doc(db, 'users', user.uid), {
            // Add any additional fields you want in the document here
            email: user.email
            // ...
        });

        console.log('User registered and added to Firestore: ', user.uid);
    } catch (error) {
        console.error('Error registering user: ', error);
    }
}