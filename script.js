const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => toggleLinks());

links.forEach(link => link.addEventListener("click", () => toggleLinks()));

function toggleLinks() {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
}

$('.about_link').click(() => {
    $('html, body').animate({
        scrollTop: $('.about').offset().top - $('nav').height()
    }, 1000);
});

$('.contact_link').click(() => {
    $('html, body').animate({
        scrollTop: $('.contact').offset().top - $('nav').height()
    }, 1000);
});

$('.portfolio_link').click(() => {
    $('html, body').animate({
        scrollTop: $('.portfolio').offset().top - $('nav').height()
    }, 1000);
});
