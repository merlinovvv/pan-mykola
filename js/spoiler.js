var btn = document.querySelector('.more-btn');
$(document).ready(function() {
    $('.scroll__more').click(function(event){
        if ($('.info__scroll').hasClass('more')){
            $('.scroll__more').not($(this)).removeClass('read');
            $('.scroll__list').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('read').next().slideToggle(300);
        if(btn.textContent === 'ДЕТАЛЬНІШЕ'){
            btn.textContent = 'МЕНШЕ';
        }
        else{
            btn.textContent = 'ДЕТАЛЬНІШЕ';
        }
    });
});