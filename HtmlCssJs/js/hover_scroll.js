visible_animation = async (name) => {
    $(name).css({opacity: 0, visibility: "visible", 'display': 'flex'}).animate({opacity: 1.0}, 200);
    await sleep(350);
}

animation_lines = async () => {
    var lines_dict = {};
    if ($('.line3').css('width') == '1.5px') {
        lines_dict = {
            '.line1': ['27.6%', '#box-2'],
            '.line2': ['60.8%', '#box-3'],
            '.line3': ['43vh', '#box-6'],
            '.line4': ['60.8%', '#box-5'],
            '.line5': ['27.6%', '#box-4'],
        };
    } else {
        lines_dict = {
            '.line1': ['45%', '#box-2'],
            '.line2': ['54vh', '#box-4'],
            '.line3': ['45%', '#box-3'],
            '.line4': ['81vh', '#box-5'],
            '.line5': ['45%', '#box-6'],
        };
    }

    await visible_animation('#box-1');

    for (var key in lines_dict) {
        
        $(key).css('background-color', '#6640B2')

        if ($(key).css('width') == '1.5px') {
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
var count_portf = 0;

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
    if (scrolled >= $('.portf-h1-div').offset().top - 100 & count_portf == 0) {
        count_portf++;

        animation_lines();
    }
});
