const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".contact"
})
    .setClassToggle(".contact", "show")
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".contact_heading",
    triggerHook: 'onEnter', offset: 220
})
    .setClassToggle(".contact_heading", "show_heading")
    .addTo(controller);

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

