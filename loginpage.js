// Import necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4YzHW4nAxRPVFi2PRiGYauz1oIKKKRmQ",
    authDomain: "weatheready-ilsg3.firebaseapp.com",
    projectId: "weatheready-ilsg3",
    storageBucket: "weatheready-ilsg3.appspot.com",
    messagingSenderId: "616320062383",
    appId: "1:616320062383:web:43b171e69dbfb008a7d55a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if we're on the register or login page based on the form ID
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        // Login Page: Handle Login
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission
    
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Store the user's email or display name in localStorage
        localStorage.setItem('userEmail', user.email); // Example: storing user email
        // If the user has a display name, store it (Firebase Auth user info includes displayName if set)
        if (user.displayName) {
            localStorage.setItem('userName', user.displayName);
        }

        // Redirect to homepage after login
        window.location.href = "homepage.html";
                })
                .catch((error) => {
                    // Firebase error code
                    const errorCode = error.code;
                    let errorMessage;
    
                    // Check for specific error codes and customize the message
                    switch (errorCode) {
                        case 'auth/wrong-password':
                            errorMessage = "Invalid password"; // For incorrect credentials
                            break;
                        case 'auth/invalid-login-credentials':
                            errorMessage = "Invalid email"; // For incorrect credentials
                            break;
                        case 'auth/invalid-email':
                            errorMessage = "The email address is not valid."; // Invalid email format
                            break;
                        case 'auth/user-disabled':
                            errorMessage = "This account has been disabled."; // Account disabled
                            break;
                        case 'auth/too-many-requests':
                            errorMessage = "Too many failed login attempts. Please try again later.";
                            break;
                        case 'auth/operation-not-allowed':
                            errorMessage = "Email/password accounts are not enabled."; // Auth not enabled
                            break;
                        default:
                            errorMessage = "An error occurred. Please try again."; // Generic message
                    }
    
                    // Display the custom error message
                    document.getElementById('errorMessage').innerText = errorMessage;
                });
        });
    }
    
});


