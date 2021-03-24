$(".carousel").carousel({
    interval:2500
})


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