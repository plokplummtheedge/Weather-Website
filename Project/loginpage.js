document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to homepage
            window.location.href = 'Homepage.html';
        })
        .catch((error) => {
            alertbox("Email not Registered");
          
        });
});

document.getElementById('registerBtn').addEventListener('click', function() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered
            alert('Registration successful!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error(error.message);
        });
});
