/**
 * Starts the initPage function when page is fully loaded
 */
window.addEventListener('load', initPage);

/**
 * Set ups the functions that will run when the page is fully loaded
 */
function initPage() {
    initScrollMagicScene();
    initNavbarEvents();
    initScrollOnLinks();
    initProjectPictureChange();
}

/**
 * Function for making elements appear when scrolling down the page
 * with the ScrollMagic library
 */
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

/**
 * Adds click function to burger and toggles class on links in nav to show/hide them
 */
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

/**
 * Scrolls down to the correct area of the page when clicking links
 */
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

/**
 * Changes the class on the pictures when they are clicked
 */
function initProjectPictureChange() {

    const projectContent = document.querySelectorAll(".project_content");

    projectContent.forEach(project => project.addEventListener("click", toggleContent));

    /**
     * Event from mouse click
     * @param {MouseEvent} event 
     */
    function toggleContent(event) {
        /** @type {HTMLDivElement} from event target */
        const divElement = event.target

        if (divElement.classList.contains('show_project_content')) {
            divElement.classList.remove("show_project_content");
        } else {
            divElement.classList.add("show_project_content");
        }

    }
}
