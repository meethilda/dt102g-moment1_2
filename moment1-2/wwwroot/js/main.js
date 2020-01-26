$(".menu-toggle").click(function () {
    $("nav ul").toggle();
    if ($("nav ul").is(":visible")) {
        $("i").removeClass("fas fa-arrow-circle-down");
        $("i").addClass("fas fa-arrow-circle-up");
    } else {
        $("i").removeClass("fas fa-arrow-circle-up");
        $("i").addClass("fas fa-arrow-circle-down");
    }
});

$(window).resize(function() {
    if($(window).width() > 700) {
        $("nav ul").show();
    } else {
        $("nav ul").hide();
    }
});