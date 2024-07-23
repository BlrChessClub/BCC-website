---
---
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    slideBy: 'page',
    navText: [
        '<i class="icon icon-angle-left" aria-hidden="true"></i>',
        '<i class="icon icon-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// Get the navigation bar
var navBar = document.querySelector('.custom_nav-container');

// Get the offset position of the navigation bar once
var sticky = navBar.offsetTop;

// Throttle function to limit the frequency of the scroll event handler
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

function checkSticky() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
}

window.onscroll = throttle(checkSticky, 100);

// We include this using Liquid to avoid an extra network request
{% include js/lite-yt-embed.js %}