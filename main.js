let prevScrollPos = window.pageYOffset;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScroll() {
    let currentScrollPos = window.pageYOffset;
    let header = document.querySelector("header");
    var backToTopButton = document.getElementById('backToTopBtn');

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-80px"; 
    }

    if (currentScrollPos > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }

    prevScrollPos = currentScrollPos;
}

window.onscroll = handleScroll;


