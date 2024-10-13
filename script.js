// Get the current page URL
const currentLocation = location.href;

// Select all navigation buttons (or links)
const menuItems = document.querySelectorAll('.button');

// Loop through the buttons and check if href matches the current URL
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});