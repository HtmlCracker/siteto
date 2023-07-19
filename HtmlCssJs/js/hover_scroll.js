visible_animation = async (name) => {
    $(name).css({opacity: 0, visibility: "visible", 'display': 'flex'}).animate({opacity: 1.0}, 200);
    await sleep(200);
}

animation_lines = async () => {
    const lines_dict = {
        '.line1': ['27.6%', '#box-2'],
        '.line2': ['60.8%', '#box-3'],
        '.vert-line3': ['38vh', '#box-6'],
        '.line4': ['60.8%', '#box-5'],
        '.line5': ['27.6%', '#box-4'],
    };

    await visible_animation('#box-1');

    for (var key in lines_dict) {
        
        $(key).css('background-color', '#6640B2')

        if (key[1] == 'v') {
            $(key).animate({'top': lines_dict[key][0]}, 500)
        } else {
            $(key).animate({'left': lines_dict[key][0]}, 500)
        }
        
        await sleep(500);

        await visible_animation(lines_dict[key][1]);
        
    }
}

$(async () => {
    var line = $('.under-line');
    var is_line_left = true;

    var links = {
        'about_link': '#about_us-header',
        'portf_link': '.portf-h1-div',
        'cont_link': 'footer'
    };

    animation_lines();

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
            await sleep(200);
        }
        count_scroll_second = 1;
    };
});
