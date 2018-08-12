$(document).ready(function() {
    // disintegrate.init();
    //
    // if (document.querySelector('[data-dis-type="simultaneous"]')) {
    //     window.addEventListener("disesLoaded", function() {
    //         disintegrate.dises.forEach(function(disObj) {
    //             if (disObj.elem.dataset.disType === "simultaneous") {
    //                 disObj.elem.addEventListener("click", function(e) {
    //                     disintegrate.createSimultaneousParticles(disObj);
    //                 });
    //             }
    //         });
    //     });
    // }
    if ($(document).scrollTop() > 0) {
        console.log("hello");
        $("#profilePicHolder").css("left", "54vw");
        $("#hello").css("left", "100vw");
    }
    $("#stackImgHolder")
        .children("span")
        .hover(
            function(e) {
                $(this).addClass("CSS-animation");
            },
            function() {
                $(this).removeClass("CSS-animation");
            }
        );
    $("#openClick").click(function(e) {
        $("#m1").addClass("movePicLeft");
        $("#m2").addClass("moveTextLeft");
        $(this).addClass("notVisible");
        $("#closeClick").removeClass("notVisible");
    });
    $("#closeClick").click(function(e) {
        $("#m1").removeClass("movePicLeft");
        $("#m2").removeClass("moveTextLeft");
        $(this).addClass("notVisible");
        $("#openClick").removeClass("notVisible");
    });
    $("#openClick1").click(function(e) {
        $("#s1").addClass("movePicRight");
        $("#s2").addClass("moveTextRight");
        $(this).addClass("notVisible");
        $("#closeClick1").removeClass("notVisible");
    });
    $("#closeClick1").click(function(e) {
        $("#s1").removeClass("movePicRight");
        $("#s2").removeClass("moveTextRight");
        $(this).addClass("notVisible");
        $("#openClick1").removeClass("notVisible");
    });
    $("#openClick2").click(function(e) {
        $("#i1").addClass("movePicLeft");
        $("#i2").addClass("moveTextLeft");
        $(this).addClass("notVisible");
        $("#closeClick2").removeClass("notVisible");
    });
    $("#closeClick2").click(function(e) {
        $("#i1").removeClass("movePicLeft");
        $("#i2").removeClass("moveTextLeft");
        $(this).addClass("notVisible");
        $("#openClick2").removeClass("notVisible");
    });
    $("#openClick3").click(function(e) {
        $("#n1").addClass("movePicRight");
        $("#n2").addClass("moveTextRight");
        $(this).addClass("notVisible");
        $("#closeClick3").removeClass("notVisible");
    });
    $("#closeClick3").click(function(e) {
        $("#n1").removeClass("movePicRight");
        $("#n2").removeClass("moveTextRight");
        $(this).addClass("notVisible");
        $("#openClick3").removeClass("notVisible");
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
        window.scrollTo(0, 900);
    });
    $("#l3").click(function() {
        window.scrollTo(0, 1950);
    });
    $("#l4").click(function() {
        window.scrollTo(0, 5650);
    });
    // $(window).scroll(function(event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 170) {
    //         $("#header1").addClass("typewriter");
    //     }
    //     if (scroll > 520) {
    //         $("#header2").addClass("typewriter");
    //     }
    //     if (scroll > 3680) {
    //         $("#header3").addClass("typewriter");
    //     }
    // });
});
