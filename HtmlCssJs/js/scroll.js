visible_animation = async (name) => {
    $(name).css({opacity: 0, visibility: "visible", 'display': 'flex'}).animate({opacity: 1.0}, 200);
    await sleep(350);
};

const set_height_width = (dic, key) => {
    if (dic[dic.length - 1] == 'h') {
        $(key).css({'top': dic});
    } else {
        $(key).css({'left': dic});
    }
}

animation_lines = async () => {
    var lines_dict_big = {'.line1': ['27.6%', '30.3vh', '#box-2'],
                          '.line2': ['60.8%', '30.3vh', '#box-3'],
                          '.line3': ['43vh', '83%', '#box-6'],
                          '.line4': ['60.8%', '56vh', '#box-5'],
                          '.line5': ['27.6%', '56vh', '#box-4'],};

    var lines_dict_small = {'.line1': ['45%', '41vh', '#box-2'],
                            '.line2': ['54vh', '68.5%', '#box-4'],
                            '.line3': ['45%', '68vh', '#box-3'],
                            '.line4': ['81vh', '31.5%', '#box-5'],
                            '.line5': ['45%', '94vh', '#box-6'],};

    await visible_animation('#box-1');

    for (var key in lines_dict_big) {
        $(key).css('background-color', '#6640B2')

        if ($(window).width() > 955) {
            if (lines_dict_big[key][0][lines_dict_big[key][0].length - 1] == 'h') {
                $(key).animate({'top': lines_dict_big[key][0]}, 500);
            } else {
                $(key).animate({'left': lines_dict_big[key][0]}, 500);
            }
            
            await sleep(500);

            await visible_animation(lines_dict_big[key][2]);

        } else {
            if (lines_dict_small[key][0][lines_dict_small[key][0].length - 1] == 'h') {
                $(key).animate({'top': lines_dict_small[key][0]}, 500);
            } else {
                $(key).animate({'left': lines_dict_small[key][0]}, 500);
            }

            await sleep(500);

            await visible_animation(lines_dict_small[key][2]);
        }
        
    }

    $(window).resize(() => {
        if ($(window).width() <= 955) {

          for (var i in lines_dict_small) {
            set_height_width(lines_dict_small[i][0], i);
            set_height_width(lines_dict_small[i][1], i);
            
          }
        } else {
            for (var i in lines_dict_big) {
                set_height_width(lines_dict_big[i][0], i);
                set_height_width(lines_dict_big[i][1], i);
                
              }
        }
      });

}



var count_scroll_second = 0;
var count_portf = 0;

$(window).scroll(async () =>{
    var scrolled = $(window).scrollTop();
    var is_animated = false;
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
