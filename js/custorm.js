$(function(){

    //header menu--------------------------------------------------------
    $('li.lv1').mouseenter(function(){
        $(this).find('ul.lv2').stop().slideDown()
    })
    $('li.lv1').mouseleave(function(){
        $(this).find('ul.lv2').stop().slideUp()
    })
    
    //slide---------------------------------------------------------------
    setInterval(function(){
        $('.slideWrap').animate({'marginTop':'-485px'}, function(){
            $('.slide:first').appendTo('.slideWrap')
            $('.slideWrap').css({'marginTop':'0px'})
        })
    },4000)
    
    //popUpBox---------------------------------------------------------
    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
    
	setData();
})