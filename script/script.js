$(document).ready(function(){
    var width = $(window).width();
    $('#wrapper').css({'right': '-'+width+'px'});
    function showWraper(mode){
        if (mode == 1) {
            //$('#wrapper').css({'right': 0});
            $('#wrapper').css({'display': 'block'});
            $('#wrapper').animate({'right':0},300)
            $('.index_title').slideUp(300);
        }
        if (mode == 0) {
            $('#wrapper').css({'right': '-'+width+'px'});
            $('#wrapper').animate({'dispay':'none'},300);
            $('.index_title').slideDown(300);
        }
    }  

    $('.star_but').click(function() { showWraper(1); });
    
    $('.back_hide').click(function(){ showWraper(0); });
    
    $(window).scroll(function (){
        
        alert("Scroll 1");
        var scrollWindow = $(this).scrollTop();
        console.log(scrollWindow);
        if (scrollWindow>50) {
            showWraper(1);
        }
    });  

    $('.name_product').click(function(){
        $(this).parent('li').find('.discription_product').slideToggle();
    });

    $('.context_wraper').height(($('#wrapper').height())-80);
});
