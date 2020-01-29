$(()=>{
    let top =$('#top-re')
    top.hide();
    $(window).scroll(()=>{
            if($(this).scrollTop()>700){
                top.fadeIn(300);
            }else{
                top.fadeOut(300);
            }
        });
    top.click(()=>{
            $('body,html').animate({scrollTop:0},)
            return false;
        });
}
);

