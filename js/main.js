(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    $('#contactForm').on('submit', async function (event) {
        event.preventDefault();

        var name = $(this).find('input[name="name"]').val();
        var email = $(this).find('input[name="email"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var message = $(this).find('textarea[name="message"]').val();

        var service_id = "service_eqboyd8";
        var template_id = "template_4dbyg8h";
        var template_params = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message,
        };
        emailjs.init("RgZDBeexu9_5Mq4eQ");
        await emailjs.send(service_id, template_id, template_params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        location.reload();
    });

    $('#appointmentForm').on('submit', async function (event) {
        event.preventDefault();

        var service = $(this).find('select[name="service"]').val();
        var doctor = $(this).find('select[name="doctor"]').val();
        var name = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var appointmentDate = $(this).find('input[name="appointmentDate"]').val();
        var appointmentTime = $(this).find('input[name="appointmentTime"]').val();

        var service_id = "service_eqboyd8";
        var template_id = "template_sxwli06";
        var template_params = {
            "service": service,
            "doctor": doctor,
            "name": name,
            "phone": phone,
            "appointmentDate": appointmentDate,
            "appointmentTime": appointmentTime
        };
        emailjs.init("RgZDBeexu9_5Mq4eQ");
        await emailjs.send(service_id, template_id, template_params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        location.reload()
    });

})(jQuery);

