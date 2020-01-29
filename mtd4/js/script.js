
const headerSlide  = function(){
    const burger = document.querySelector('.burger');
    const navi = document.querySelector('.navi-slide');
    
    burger.addEventListener('click',function(){
        // naviの開閉
        navi.classList.toggle('navi-active');
        //Burger の開閉
        burger.classList.toggle('toggle');
    }
    );
    $('nav a').on('click', function(){
        // naviの開閉
        navi.classList.toggle('navi-active');
        //Burger の開閉
        burger.classList.toggle('toggle');
    }
    );
}
headerSlide();