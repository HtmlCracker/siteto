function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(async function() {
    var name_div = $('.about');
    name_div.animate({'margin-left': '30%'}, 500);
    await sleep(500);

    var links = {
        'about_link': '#about',
        'portf_link': '#portf',
        'cont_link': '#cont'
    }

    $(".header-link").hover(
        function () {
            $(this).css('color', 'rgb(222, 222, 222)');
        }, function () {
            $(this).css('color', 'white');
        }
    );

    $('.header-link').on('click', function() {
        $('html, body').animate({ scrollTop: $(links[this.id]).offset().top }, 350);
    });

});

var pos = 'down';

$(window).scroll(async function(){
    var name_div = $('.about');
    var scrolled = $(window).scrollTop();
    var height = $(window).height();

    var count = 0
    
    if (scrolled < height/4) {
        if (pos == 'down') {
            name_div.animate({'margin-left': '30%'}, 500);
            pos = 'top';
            console.log(pos);
        }

    } else if (scrolled >= height/4) {
        if (pos == 'top') {
            name_div.animate({'margin-left': '10%'}, 500);
            pos = 'down';
            console.log(pos);
        }
    }
})