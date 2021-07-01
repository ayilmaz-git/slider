$(document).ready(function () {
    $(".slider li:first").show();
    index = 0;
    slide_sayi = $(".slider li").length - 1;
    slider_navigation_say = $(".slider li").length;
    for (i=1; i<=slider_navigation_say; i++){
        $(".navigation").append("<li><a href=''>"+ i +"</a></li>");
    }
    $(".navigation li:first").find("a").addClass("active");

    $(".navigation li").hover(function () {
        index = $(this).index();
        $(".slider li").hide();
        $(".slider li").stop();
        $(".slider li:eq("+ index +")").fadeIn(100);
        $(".navigation li a").removeClass("active");
        $(this).find("a").addClass("active");
    })
    $("#prev").click(function () {
        if (index == 0){
            index = slide_sayi;
        }else {
            index--;
        }
        $(".slider li").hide();
        $(".slider li").stop();
        $(".slider li:eq("+ index +")").fadeIn(100);
        $(".navigation li a").removeClass("active");
        $(".navigation li:eq("+ index +")").find("a").addClass("active");
    })
    $("#next").click(function () {
        if (index == slide_sayi){
            index = 0;
        }else {
            index++;
        }
        $(".slider li").hide();
        $(".slider li").stop();
        $(".slider li:eq("+ index +")").fadeIn(100);
        $(".navigation li a").removeClass("active");
        $(".navigation li:eq("+ index +")").find("a").addClass("active");
    })
})