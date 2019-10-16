import './index.scss';

console.log('default.product.show');


require.ensure([],()=>{
    $('#hit-me').on('click',this,function(event){
        event.preventDefault();
        alert('You hitted me !!!!');
        require('../../js/tab');

    });
},'tab.bundle');

require.ensure([],()=>{
    $(document).ready(function(){
        require('swiper/css/swiper.min.css');
        var Swiper = require('swiper/js/swiper');
        var mySwiper = new Swiper('.swiper-container',{
            loop:true,
            pagination:{
                el:'.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
},'swiper.banner.bundle');



