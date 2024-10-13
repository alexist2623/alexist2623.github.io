// Get the current page URL
let currentLocation = location.href;

// Select all navigation buttons (or links)
const menuItems = document.querySelectorAll('.button');

// Loop through the buttons and check if href matches the current URL
menuItems.forEach(item => {
    if (item.href.replace(/\/index\.html(#.*)?$/, '') === currentLocation.replace(/\/index\.html(#.*)?$/, '')) {
        item.classList.add('active');
    }
});