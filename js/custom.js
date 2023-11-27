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
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
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



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

window.onscroll = function() {
    // Get the navigation bar
    var navBar = document.getElementById("navbar");

    // Get the offset position of the navigation bar
    var sticky = navBar.offsetTop;

    // Add the "sticky" class to the navigation bar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
    if (window.pageYOffset > sticky) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
};