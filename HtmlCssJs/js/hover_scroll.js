function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(async function() {
    var line = $('.under-line');

    var links = {
        'about_link': '#about_us-header',
        'portf_link': '#portf',
        'cont_link': '#cont'
    }

    $(".header-link").hover(
        function () {
            $(this).css('color', 'rgb(222, 222, 222)');
            line.animate({'left': $(this).offset().left, 'width': $(this).width()}, 350);
        }, function () {
            $(this).css('color', 'white');
        }
    );

    $('.header-link').on('click', function() {
        $('html, body').animate({ scrollTop: $(links[this.id]).offset().top }, 350);
    });

});
