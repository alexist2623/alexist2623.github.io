// Get the current page URL
let currentLocation = location.href;
console.log(currentLocation.replace(/\/index\.html(#.*)?$/, ''));

// Select all navigation buttons (or links)
const menuItems = document.querySelectorAll('.button');

// Loop through the buttons and check if href matches the current URL
menuItems.forEach(item => {
    console.log(item.href.replace(/\/index\.html(#.*)?$/, ''));
    if (item.href.replace(/\/index\.html(#.*)?$/, '') === currentLocation.replace(/\/index\.html(#.*)?$/, '')) {
        item.classList.add('active');
    }
});