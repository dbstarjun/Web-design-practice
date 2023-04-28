$(function(){
    $('li.lv1').mouseenter(function(){
        $('ul.lv2, .headerBg').stop().slideDown()
    })
    $('li.lv1').mouseleave(function(){
        $('ul.lv2, .headerBg').stop().slideUp()
    })
    

    setInterval(function(){
        $('.slideWrap').animate({'marginLeft':'-100%'}, function(){
            $('.slide:first').appendTo('.slideWrap')
            $('.slideWrap').css({'marginLeft':'0'})
        })
    },3000)
    

    $('.tabMenu li').click(function(){
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on')
    
        var idx=$(this).index()
        $('.tabItem >*').hide().removeClass('on')
        $('.tabItem >*').eq(idx).show().addClass('on')
    })
    

    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show();
    })
    
    $('.popUpBox button').click(function(){
        $('.popUpBox').hide();
    })
    
    
    })