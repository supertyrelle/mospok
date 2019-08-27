import Glide from '@glidejs/glide';
import robotOne from './img/robo1.jpg';
import robotTwo from './img/robo2.jpg';
import robotThree from './img/robo3.jpg';



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// const footer = document.querySelector('footer');

function headerComp() {
    // create header alement, assign flexbox class
    const header = document.querySelector('header');
    header.setAttribute(`class`, 'row-sb-c');

    // create logo text
    const logo = document.createElement('div');
    logo.setAttribute(`class`, 'logo');
    logo.textContent = "moSpo";
    // append the logo to its element
    header.appendChild(logo);

    // create the main menu element
    function mainNavComp() {
        const mainNav = document.createElement('nav');
        header.appendChild(mainNav);
        // assign main link elements and add to the main nav
        const homeLink = document.createElement('a'),
            galleryLink = document.createElement('a'),
            museumLink = document.createElement('a'),
            ticketsLink = document.createElement('a');
        homeLink.textContent = "Home";
        mainNav.appendChild(homeLink);
        galleryLink.textContent = "Gallery";
        mainNav.appendChild(galleryLink);
        museumLink.textContent = "Museum";
        mainNav.appendChild(museumLink);
        ticketsLink.textContent = "Buy Tickets";
        mainNav.appendChild(ticketsLink);
    }
    mainNavComp();

    // create the social media nav element
    function socNavComp() {
        const socNav = document.createElement('nav');
        socNav.setAttribute('class', 'row-fe');
        header.appendChild(socNav);
        // assign main link elements and add to the main nav
        const dribLink = document.createElement('a'),
            twitLink = document.createElement('a'),
            instLink = document.createElement('a');
        dribLink.setAttribute('class', 'fab fa-dribbble')
        socNav.appendChild(dribLink);
        twitLink.setAttribute('class', 'fab fa-twitter')
        socNav.appendChild(twitLink);
        instLink.setAttribute('class', 'fab fa-instagram')
        socNav.appendChild(instLink);
    }
    socNavComp();

};
headerComp();

function mainComp() {
    const app = document.querySelector('main');
    app.setAttribute(`id`, 'swup');
    // app.setAttribute(`data-aos`, 'fade-up');

    // create slider container
    const sliderCont = document.createElement('div');
    sliderCont.setAttribute('class', 'glide');
    app.appendChild(sliderCont);
    // create the secondary wrapper for the slider
    const slideTrack = document.createElement('div');
    slideTrack.setAttribute('class', 'glide__track');
    slideTrack.setAttribute('data-glide-el', 'track');
    sliderCont.appendChild(slideTrack);
    // create the slider slides wrapper
    const slidesCont = document.createElement('ul');
    slidesCont.setAttribute('class', 'glide__slides');
    slideTrack.appendChild(slidesCont);

    function slideOneComp() {
        const slideOne = document.createElement('li');
        slideOne.setAttribute('class', 'glide__slide row-sb-c');
        slidesCont.appendChild(slideOne);

        const content = document.createElement('div'),
            illustration = document.createElement('div');
        content.setAttribute('class', 'content');
        illustration.setAttribute('class', 'illustration');
        slideOne.appendChild(content);
        slideOne.appendChild(illustration);

        function contentComp() {
            const preTitle = document.createElement('h6'),
                title = document.createElement('h1'),
                desc = document.createElement('p'),
                button = document.createElement('button');
            preTitle.textContent = `February 6 - March 12`;
            title.textContent = `Ive's Robo Exhibit`;
            desc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis tempore at amet
                                doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quibusdam illo perferendis. Molestias, saepe?`;
            button.textContent = "Learn More";
            button.setAttribute('class', 'feat-butt');
            content.appendChild(preTitle);
            content.appendChild(title);
            content.appendChild(desc);
            content.appendChild(button);
        }
        contentComp();

        const roboPic = document.createElement('img');
        roboPic.setAttribute('src', robotOne);
        illustration.appendChild(roboPic);

    }
    slideOneComp();

    function slideTwoComp() {
        const slideTwo = document.createElement('li');
        slideTwo.setAttribute('class', 'glide__slide row-sb-c');
        slidesCont.appendChild(slideTwo);

        const content = document.createElement('div'),
            illustration = document.createElement('div');
        content.setAttribute('class', 'content');
        illustration.setAttribute('class', 'illustration');
        slideTwo.appendChild(content);
        slideTwo.appendChild(illustration);

        function contentComp() {
            const preTitle = document.createElement('h6'),
                title = document.createElement('h1'),
                desc = document.createElement('p'),
                desc2 = document.createElement('p');
            preTitle.textContent = `Our Featured Artist`;
            title.textContent = `About Bonny Ive`;
            desc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis tempore at amet
                                doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quibusdam illo perferendis. Molestias, saepe?`;
            desc2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim voluptatibus totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam!`;
            content.appendChild(preTitle);
            content.appendChild(title);
            content.appendChild(desc);
            content.appendChild(desc2);
        }
        contentComp();

        const roboPic = document.createElement('img');
        roboPic.setAttribute('src', robotTwo);
        illustration.appendChild(roboPic);

    }
    slideTwoComp();

    function slideThreeComp() {
        const slideThree = document.createElement('li');
        slideThree.setAttribute('class', 'glide__slide row-sb-c');
        slidesCont.appendChild(slideThree);

        const content = document.createElement('div'),
            illustration = document.createElement('div');
        content.setAttribute('class', 'content');
        illustration.setAttribute('class', 'illustration');
        slideThree.appendChild(content);
        slideThree.appendChild(illustration);

        function contentComp() {
            const preTitle = document.createElement('h6'),
                title = document.createElement('h1'),
                desc = document.createElement('p'),
                button = document.createElement('button');

            preTitle.textContent = `Plan Your Visit`;
            title.textContent = `Buy Tickets Now`;
            desc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis tempore at amet
                                doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quibusdam
                                illo perferendis. Molestias, saepe?`;
            button.textContent = "Buy Tickets";
            button.setAttribute('class', 'feat-butt');
            content.appendChild(preTitle);
            content.appendChild(title);
            content.appendChild(desc), content.appendChild(button);

        }
        contentComp();

        const roboPic = document.createElement('img');
        roboPic.setAttribute('src', robotThree);
        illustration.appendChild(roboPic);

    }
    slideThreeComp();

    function sliderControlsComp() {
        const slideNavCont = document.createElement('div'),
            prev = document.createElement('button'),
            next = document.createElement('button');
        slideNavCont.setAttribute('class', 'glide__arrows');
        slideNavCont.setAttribute('data-glide-el', 'controls');

        prev.setAttribute('class', 'glide__arrow glide__arrow--left prev');
        prev.setAttribute('data-glide-dir', '<');
        prev.textContent = "prev";
        next.setAttribute('class', 'glide__arrow glide__arrow--right next');
        next.setAttribute('data-glide-dir', '>');
        next.textContent = "next";
        slideNavCont.appendChild(prev);
        slideNavCont.appendChild(next);
        sliderCont.appendChild(slideNavCont);
    }
    sliderControlsComp();
    // create logo text
    //     const logo = document.createElement('div');
    //     logo.setAttribute(`class`, 'logo');
    //     logo.textContent = "moSpo";
    //     // append the logo to its element
    //     header.appendChild(logo);
}
mainComp();

function footerComp() {
    const footer = document.querySelector('footer');
    // app.setAttribute(`id`, 'swup');

    // create slider container
    const footerCont = document.createElement('div');
    footerCont.setAttribute('class', '');
    const credit = document.createElement('p'),
        me = document.createElement('a');
    credit.textContent = 'moSpo is a fictional entity created within concept.';
    me.textContent = 'Built by Tyrelle Phillips.'
    me.setAttribute('href', 'https://tyrelle.dev');
    me.setAttribute('target', '_blank');
    footerCont.appendChild(credit);
    footerCont.appendChild(me);
    footer.appendChild(footerCont);
}
footerComp();
var glide = new Glide('.glide', {
    autoplay: 7000,
    hoverpause: true,
    perView: 1
})
glide.mount();