document.getElementById('addNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    
    if (noteInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = noteInput.value;
        li.addEventListener('click', function() {
            this.remove();
        });
        notesList.appendChild(li);
        noteInput.value = '';
    }
});

// Toggle Button
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

menuToggle.addEventListener('mouseleave', () => {
    if (!sideNav.classList.contains('active')) {
        sideNav.classList.remove('active');
    }
});