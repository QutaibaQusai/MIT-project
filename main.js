


let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-80px"; // Adjust this value based on the height of your header
    }

    prevScrollPos = currentScrollPos;
};

// Function to scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to toggle the visibility of the back-to-top button
function toggleBackToTopButton() {
    var backToTopButton = document.getElementById('backToTopBtn');

    // If the user has scrolled down, show the button; otherwise, hide it
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Attach the toggleBackToTopButton function to the scroll event
window.onscroll = function() {
    toggleBackToTopButton();
};