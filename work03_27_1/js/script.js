$(".menu>ul>li").hover(
    function () {
        $(this).children("ul").stop().slideDown("slow");
    }, function () {
        $(this).children("ul").stop().slideUp("slow");
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

// var currentIndex = 0;
    
// setInterval(function(){
//     if(currentIndex < 2) {
//         currentIndex ++;
//     } else {
//         currentIndex = 0;
//     } 
    
//     $(".slide>img").eq(currentIndex).siblings().fadeOut();
//     $(".slide>img").eq(currentIndex).fadeIn();
    
// },3000);



$(".tab-news").click(function () {
    $(this).css({
        "border-bottom": "0",
        "background-color": "#fff"
    });
    $(".tab-gallery").css({
        "border-bottom": "1px solid #000",
        "background-color": "#888"
    });
    $(".gallery").hide();
    $(".news").show();
});

$(".tab-gallery").click(function () {
    $(this).css({
        "border-bottom": "0",
        "background-color": "#fff"
    });
    $(".tab-news").css({
        "border-bottom": "1px solid #000",
        "background-color": "#888"
    });
    $(".news").hide();
    $(".gallery").show();
});

function openPop() {
    $("#pop").show("show");
}

function closePop() {
    $("#pop").hide("fist");
}