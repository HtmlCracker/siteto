$(async () => {
    var line = $('.under-line');
    var is_line_left = true;

    var links = {
        'about_link': '#about_us-header',
        'portf_link': '.portf-h1-div',
        'cont_link': 'footer'
    };

    $(".header-link").hover(
        function () {
            $(this).css('color', 'rgb(222, 222, 222)');
            line.animate({'left': $(this).offset().left, 'width': $(this).width()}, 350);
            is_line_left = false;
        }, function () {
            $(this).css('color', 'white');
        }
    );

    $('.img-about, body').hover(
        function () {
            if (!(is_line_left)) {
                line.animate({'left': '-200px'}, 350);
                is_line_left = true;
            }
        }
    );

    $('.header-link').on('click', function () {
        $('html, body').animate({ scrollTop: $(links[this.id]).offset().top }, 350);
    });

});