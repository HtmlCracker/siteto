const sleep_ms = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(async () => {
    var line = $('.under-line');
    var is_line_left = true;

    var links = {
        'about_link': '#about_us-header',
        'portf_link': '#portf',
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

var count_scroll_second = 0;

$(window).scroll(async () =>{
    var scrolled = $(window).scrollTop();
    const second_block_elem = [$('#first-block'), $('#second-block'), $('#third-block')];

    
    if (scrolled >= $('#about_us-header').offset().top - 100 & count_scroll_second == 0) {
        for (const el of second_block_elem) {
            el.fadeIn(200);
            await sleep_ms(200);
        }
        count_scroll_second = 1;
    };
});
