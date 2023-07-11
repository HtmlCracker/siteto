function anim(name) {
    $('.about').css('animation-name', name);
}

$(async function() {

    anim('left_block');

    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        var about_pos = $('.about').offset().top

        if (scrolled < about_pos + 100) {
            anim('left_block');
        } else {
            anim('back_block');
        }
        console.log(scrolled);
    })

})