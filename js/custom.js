$(document).ready(function() {
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + -120
        }, 500);
    });
});
$(document).ready(function() {
    $("header .dropdown").on("click", function(event) {
        event.stopPropagation();
    });

    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
    });

});

$(document).ready(function() {
    var typing = new Typed(".it-write-effect-text", {
        strings: ["", "Custom Software Development", "", "Mobile App Development"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
    });
});

$(document).ready(function() {
    var clientSplide = new Splide('.client-splide', {
        type: 'loop',
        arrows: false,
        pagination: false,
        drag: false,
        gap: 30,
        perPage: 6,
        autoScroll: {
            speed: 2,
            pauseOnHover: false,
        },
        breakpoints: {
            1199: {
                perPage: 4,
            },
            991: {
                perPage: 3,
            },

        }
    });
    clientSplide.mount(window.splide.Extensions);

});


$(document).ready(function() {

    var serviceBtn = new Splide('#serviceBtnSplide', {
        rewind: true,
        fixedWidth: "auto",
        isNavigation: true,
        gap: 5,
        pagination: false,
        arrows: false,
    });

    var serviceContent = new Splide('#serviceContentSplide', {
        type: 'fade',
        pagination: false,
        arrows: false,
    });

    serviceContent.sync(serviceBtn);
    serviceContent.mount();

    serviceBtn.mount();
});

$(document).ready(function() {
    var ourClientSplide = new Splide('#ourClientSplide', {
        type: 'slide',
        pagination: false,
        pauseOnHover: false,
        drag: false,
        perPage: 3,
        perMove: 1,
        gap: 15,
        breakpoints: {
            1199: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    });
    ourClientSplide.mount();
});

$(document).ready(function() {
    var blogSplide = new Splide('#blogSplide', {
        type: 'slide',
        pagination: false,
        pauseOnHover: false,
        drag: false,
        perPage: 3,
        perMove: 1,
        gap: 15,
        breakpoints: {
            1199: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    });
    blogSplide.mount();
});