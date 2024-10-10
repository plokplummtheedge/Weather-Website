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