$(".menu").hover (
    function(){
        $(".sub-menu").stop().slideDown("slow");
    },function(){
        $(".sub-menu").stop().slideUp("slow");
    }
);

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

