// scripts.js

// Smooth Scrolling
$('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

// Fade-in Animation for Tips Section
$(window).on('scroll', function() {
    var scrollPos = $(
