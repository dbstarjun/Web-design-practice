$(function () {

    //header menu------------------------------------
    $('li.lv1').mouseenter(function () {
        $(this).find('ul.lv2').stop().slideDown()
    })
    $('li.lv1').mouseleave(function () {
        $('ul.lv2').stop().slideUp()
    })
    var slide = $(".slide>img");
    var sno = 0;
    var eno = slide.length - 1;
    var timer = setInterval("autosilde()", 3000);

    function autosilde() {
        $(slide[sno]).stop().animate({
            opacity: 0
        }, 1000, function () {
            // $(this).css({  opacity: "100%" });
        });
        sno++;
        if (sno > eno) {
            sno = 0;
        }
        $(slide[sno]).stop().animate({
            opacity: 1
        }, 1000)
    }



    //popUpBox------------------------------------
    $('.notice li:nth-child(1)').click(function () {
        $('.popUpBox').show()
    })
    $('.popUpBox button').click(function () {
        $('.popUpBox').hide()
    })

})