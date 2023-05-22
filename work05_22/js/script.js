$(".menu").hover (
    function(){
        $(".sub-menu").stop().slideDown("slow");
    },function(){
        $(".sub-menu").stop().slideUp("slow");
    }
);

var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[sno]).animate({
        left : "100%"        
    }, 1000, function(){
        $(this).css({left: "-100%"});
    });
    sno ++;
    if(sno > eno) sno = 0;
    $(slide[sno]).animate({
        left : "0"        
    }, 1000)      
}

$(".tab1").click(
    function() {
    $(this).css({
        "boder-bottom": "0",
        "background-color":"white"
    });
    $(".tab2").css({
        "boder-bottom": "1px solid #000",
        "background-color":"blue"
    });
    $(".gallery").hide();
    $(".news").show();
});

$(".tab2").click(function() {
    $(this).css({
        "boder-bottom": "0",
        "background-color":"white"
    });
    $(".tab1").css({
        "boder-bottom": "1px solid #000",
        "background-color":"blue"
    });
    $(".news").hide();
    $(".gallery").show();
});


function popup() {
    $("#pop").show("");
}
