// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC80B2YF6PHbliYlDMDV168iNjVf2toYoE",
    authDomain: "photography-eb494.firebaseapp.com",
    projectId: "photography-eb494",
    storageBucket: "photography-eb494.firebaseapp.com",
    messagingSenderId: "359696090459",
    appId: "1:359696090459:web:be60d8c5d5579643a4867e"
};

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event Listener for Signup Form
const signup = document.getElementById("signupform");
signup.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up successfully:", user);
            alert("Signup successful!");
        })
        .catch((error) => {
            console.error("Error during signup:", error.code, error.message);
            alert(`Signup failed: ${error.message}`);
        });
});
