$('.carousel').carousel();
$(document).ready(function(){
    if ($(window).width() <= 798){
        console.log("bro")
        $("#carousel").removeClass("col-6");
        $("#carousel").addClass("col-12");
    } else {
        $("#carousel").removeClass("col-12");
        $("#carousel").addClass("col-6");
    }
    $(window).resize(function(){
        console.log("hi")
        if ($(window).width() <= 798){
            console.log("bro")
            $("#carousel").removeClass("col-6");
            $("#carousel").addClass("col-12");
        } else {
            $("#carousel").removeClass("col-12");
            $("#carousel").addClass("col-6");
        }
    });
});