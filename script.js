window.addEventListener('load', initPage)

function initPage() {
    initScrollMagicScene()
    initNavbarEvents()
    initScrollOnLinks()
}

function initScrollMagicScene() {
    const controller = new ScrollMagic.Controller();


    const scene1 = new ScrollMagic.Scene({
        triggerElement: ".icon",
        triggerHook: 'onEnter', offset: 150
    })
        .setClassToggle(".icon", "show_icon")
        .addTo(controller);

    const scene4 = new ScrollMagic.Scene({
        triggerElement: ".about_heading",
        triggerHook: 'onEnter', offset: 150
    })
        .setClassToggle(".about_heading", "show_heading_and_text")
        .addTo(controller);

    const scene3 = new ScrollMagic.Scene({
        triggerElement: ".about_text",
        triggerHook: 'onEnter', offset: 48
    })
        .setClassToggle(".about_text", "show_heading_and_text")
        .addTo(controller);

    const scene5 = new ScrollMagic.Scene({
        triggerElement: ".contact_heading",
        triggerHook: 'onEnter', offset: 150
    })
        .setClassToggle(".contact_heading", "show_heading_and_text")
        .addTo(controller);

    const scene6 = new ScrollMagic.Scene({
        triggerElement: ".contact_text",
        triggerHook: 'onEnter', offset: 95
    })
        .setClassToggle(".contact_text", "show_heading_and_text")
        .addTo(controller);

    const scene7 = new ScrollMagic.Scene({
        triggerElement: ".portfolio_heading",
        triggerHook: 'onEnter', offset: 150
    })
        .setClassToggle(".portfolio_heading", "show_heading_and_text")
        .addTo(controller);

    const scene8 = new ScrollMagic.Scene({
        triggerElement: ".portfolio_text",
        triggerHook: 'onEnter', offset: 150
    })
        .setClassToggle(".portfolio_text", "show_heading_and_text")
        .addTo(controller);
}

function initNavbarEvents() {
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
}

function initScrollOnLinks() {
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
}

const projectContent = document.querySelectorAll(".project_content");


projectContent.forEach(project => project.addEventListener("click", toggleContent));

function toggleContent(event) {

    event.target.classList.toggle("show_project_content");

}

