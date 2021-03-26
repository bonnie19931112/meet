// ;


$("#works").slick({
    slidesToShow:3,
    slidesToScroll:2,

    responsive: [
         // tablet
        // under 1025 size what will do is...?
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

        // phone
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]


});


// scroll to element
$("a").each(function (index, element) {

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    var offsetTop = $(this).attr("data-st-offset");



    var offset = $("#" + target).offset();
    var top = offset.top;


    if (offsetTop) top -= offsetTop;


    
    $(this).click(function (e) { 
        e.preventDefault();

        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));
        
    });
});

$("html").on("mousewheel", function () {
    $("html").stop()
});

var arrow = $("#arrow");
arrow.fadeOut();

$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    console.log("視窗前上方" + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime);   //將文字轉為數字

    console.log("箭頭出現位置:" + arrowTop);
    console.log("箭頭特效時間" + arrowTime);

    // 如果 視窗位置 大於等於箭頭上方 就 淡入
    if (windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    // 否則 就 淡出
    else arrow.fadeOut(arrowTimeInt);
});