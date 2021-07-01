$(document).ready(function () {
    $(".slider li:first").show();
    $(".navigation li").click(function () {
        var index = $(this).index();

        $(".slider li").hide();
        $(".slider li:eq("+ index +")").fadeIn(500);
        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    })
})