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