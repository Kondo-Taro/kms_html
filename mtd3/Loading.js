$(()=> {
    var h = $(window).height();
    $('header,section,footer').css('display','none');
    $('#loader-bg ,#loading').height(h).css('display','block');
    });
$(window).load( ()=> {
    $('#loader-bg').delay(600).fadeOut(350);
    $('#loading').delay(600).fadeOut(300);
    $('header,section,footer').css('display', 'block');
    });