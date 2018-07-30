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

    $(document).keypress(function(e) {
        if (e.which == 13) {
            if (
                !$("textarea")
                    .val()
                    .trim().length < 1
            ) {
                $(".button").click();
                console.log("hey");
            }
        }
    });
    $("#l1").click(function(e) {
        window.scrollTo(0, 0);
    });
    $("#l2").click(function(e) {
        window.scrollTo(0, 600);
    });
    $("#l3").click(function() {
        window.scrollTo(0, 1100);
    });
    $("#l4").click(function() {
        window.scrollTo(0, 5100);
    });
});
