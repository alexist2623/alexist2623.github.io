// Get the current page URL
let currentLocation = location.href.replace(/\/index\.html(#.*)?$/, '');
if (currentLocation.endsWith("/")) {
    currentLocation = currentLocation.slice(0, -1); // 마지막 슬래시 제거
}
console.log(currentLocation);

// Select all navigation buttons (or links)
const menuItems = document.querySelectorAll('.button');

// Loop through the buttons and check if href matches the current URL
menuItems.forEach(item => {
    let newitem = item.href.replace(/\/index\.html(#.*)?$/, '')
    if (newitem.endsWith("/")) {
        newitem = newitem.slice(0, -1); // 마지막 슬래시 제거
    }
    console.log(newitem);
    if (newitem === currentLocation) {
        item.classList.add('active');
    }
});