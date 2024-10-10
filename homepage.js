// Import necessary Firebase functions
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";


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
const auth = getAuth(app); // Get the Firebase Auth instance

// Logout function
function logout() {
    console.log("Logout function called."); // Debugging log
    auth.signOut().then(() => {
        // Clear localStorage
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');

        // Redirect to login page
        window.location.href = "login.html";
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}


// Add event listener to logout button when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        logout(); // Call logout function when button is clicked
    });

    // Retrieve user information from localStorage and display it
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const userDisplayElement = document.getElementById('userDisplay');

    if (userName) {
        userDisplayElement.innerText = `Welcome, ${userName}`;
    } else if (userEmail) {
        userDisplayElement.innerText = `Welcome, ${userEmail}`;
    } else {
        userDisplayElement.innerText = "Welcome, Guest";
    }
});


logoutButton.addEventListener('click', () => {
    console.log("Logout button clicked."); // Debugging log
    logout(); // Call logout function
});





// Menu
const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');

// Toggle side nav on menu icon click
menuToggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
});

// Automatically show side nav on hover
menuToggle.addEventListener('mouseenter', () => {
    sideNav.classList.add('active');
});

// Hide side nav when mouse leaves the menu icon
menuToggle.addEventListener('mouseleave', () => {
    if (!sideNav.classList.contains('active')) {
        sideNav.classList.remove('active');
    }
});

// Hide side nav when mouse leaves the navigation bar
sideNav.addEventListener('mouseleave', () => {
    sideNav.classList.remove('active');
});


// Get the current page URL
const currentUrl = window.location.href;

// Select all navigation links
const navLinks = document.querySelectorAll('.tab a');

// Loop through each link
navLinks.forEach(link => {
  // Check if the link's href matches the current URL
  if (link.href === currentUrl) {
    // Add the 'active' class to the current page's link
    link.classList.add('active');
  }
});


