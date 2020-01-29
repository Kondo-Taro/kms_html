
const burgerFix = ()=>{
    const win = $(window);
    const burger = $('.burger');
    const fix = 'burger-Fix';

    win.on('scroll',()=>{
        let topScroll = $(this).scrollTop();
        if (topScroll > 10){
            burger.addClass(fix);
        }else{
            burger.removeClass(fix);
        }
    });
}
burgerFix();


