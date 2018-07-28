$(document).ready(function() {
    $("#openClick").click(function(e) {
        $("#m1").addClass("movePicLeft");
        $("#m2").addClass("moveTextLeft");
    });
    $("#closeClick").click(function(e) {
        $("#m1").removeClass("movePicLeft");
        $("#m2").removeClass("moveTextLeft");
    });
    $("#openClick1").click(function(e) {
        $("#s1").addClass("movePicRight");
        $("#s2").addClass("moveTextRight");
    });
    $("#closeClick1").click(function(e) {
        $("#s1").removeClass("movePicRight");
        $("#s2").removeClass("moveTextRight");
    });
    $("#openClick2").click(function(e) {
        $("#i1").addClass("movePicLeft");
        $("#i2").addClass("moveTextLeft");
    });
    $("#closeClick2").click(function(e) {
        $("#i1").removeClass("movePicLeft");
        $("#i2").removeClass("moveTextLeft");
    });
    $("#openClick3").click(function(e) {
        $("#n1").addClass("movePicRight");
        $("#n2").addClass("moveTextRight");
    });
    $("#closeClick3").click(function(e) {
        $("#n1").removeClass("movePicRight");
        $("#n2").removeClass("moveTextRight");
    });
});
