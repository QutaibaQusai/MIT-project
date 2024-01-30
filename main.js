let prevScrollPos = window.pageYOffset;

// Function to scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to toggle the visibility of the back-to-top button and header
function handleScroll() {
    let currentScrollPos = window.pageYOffset;
    let header = document.querySelector("header");
    var backToTopButton = document.getElementById('backToTopBtn');

    // Toggle header visibility
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-80px"; // Adjust this value based on the height of your header
    }

    // Toggle back-to-top button visibility
    if (currentScrollPos > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }

    prevScrollPos = currentScrollPos;
}

// Attach the handleScroll function to the scroll event
window.onscroll = handleScroll;
