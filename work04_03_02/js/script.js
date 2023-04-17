$(".menu>ul>li").hover(
    function(){
        $(this).children("ul").stop().slideDown("slow");
    },function(){
        $(this).children("ul").stop().slideUp("slow");
    }
);

var slide = $(".slide>a>img");
var sno = 0;
var eno = slide.length - 1;

setInterval("autoslide()",3000);

function autoslide(){
    $(slide[sno]).animate({
        opacity:"1"
    }, 1000);
    sno++;
    if(sno > eno){
        sno = 0;
    }
    $(slide[sno]).animate({
        opacity:"0"
    }, 1000)
}
function openPop(){
    $(".pop").show();
}
function closePop(){
    $(".pop").hide();
}1