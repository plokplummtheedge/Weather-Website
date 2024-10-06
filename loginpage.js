// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4YzHW4nAxRPVFi2PRiGYauz1oIKKKRmQ",
    authDomain: "weatheready-ilsg3.firebaseapp.com",
    databaseURL: "https://weatheready-ilsg3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weatheready-ilsg3",
    storageBucket: "weatheready-ilsg3.appspot.com",
    messagingSenderId: "616320062383",
    appId: "1:616320062383:web:43b171e69dbfb008a7d55a"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register User
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered
            const user = userCredential.user;
            alert(`Welcome ${name}!`);
            // Redirect to homepage or do something else
            window.location.href = "Homepage.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Login User
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in
            window.location.href = "Homepage.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Display user info and handle logout
auth.onAuthStateChanged((user) => {
    const userInfo = document.getElementById('user-info');
    const logoutButton = document.getElementById('logout-button');
    
    if (user) {
        userInfo.innerHTML = `Hello, ${user.email}`;
        logoutButton.style.display = "block";
    } else {
        userInfo.innerHTML = 'Not logged in';
        logoutButton.style.display = "none";
    }
});

// Logout User
logoutButton?.addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
});
