$(".menu").hover(
    function() {
        $(".sub-menu").stop().animate({ width : "toggle"});
    },
    function() {
        $(".sub-menu").stop().animate({ width : "toggle"});
    }
);

var slide = $(".slide > img");
var sno = 0;
var eno = slide.length-1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[sno]).animate({
        opacity: 0
    }, 1000);
    sno ++;
    if( sno > eno ) sno = 0;
    $(slide[sno]).animate({
        opacity: 1
    }, 1000)
}


function openPop() {
    $("#pop").show("fast");
}
function closePop() {
    $("#pop").hide("slow");
}