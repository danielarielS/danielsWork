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
    var fired = false;
    $(document).scroll(function() {
        if ($(document).scrollTop() == 0 || !fired) {
            console.log("hello");
            // $("#profilePicHolder").css("left", "60vw");
            $("#profilePicHolder").addClass("moveProfilePic");
            // $("#hello").css("left", "100vw");
            $("#hello").addClass("moveHello");
            $("#aboutText").css("opacity", "1");
            fired = true;
        } else if ($(document).scrollTop() > 300) {
            // $("#profilePicHolder").css("left", "13vw");
            $("#profilePicHolder").removeClass("moveProfilePic");
            $("#hello").removeClass("moveHello");
            $("#aboutText").css("opacity", "0");
            // $("#hello").css("left", "54vw");
            fired = true;
        }

        $("#l1").click(function(e) {
            // $("html, body").animate({ scrollTop: 11 }, 300);
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
        if ($(window).scrollTop() > 600) {
            $("#stackImgHolder").css("opacity", "1");
        }
        // if ($(document).scrollTop() > 700) {
        //     $(document).off("scroll");
        // }
        /////// pic 1 ////////
        var top = $(window).scrollTop(),
            divBottom = $("#m1").offset().top + $("#m1").outerHeight();
        if (divBottom < top + 250) {
            $("#closeClick").trigger("click");
        }
        //////// pic 2 ////////
        var top = $(window).scrollTop(),
            divBottom = $("#s1").offset().top + $("#s1").outerHeight();
        if (divBottom < top + 250) {
            $("#closeClick1").trigger("click");
        }
        ////////// pic 3 /////////////
        var top = $(window).scrollTop(),
            divBottom = $("#i1").offset().top + $("#i1").outerHeight();
        if (divBottom < top + 250) {
            $("#closeClick2").trigger("click");
        }
        ///////// pic 4 ////////////
        var top = $(window).scrollTop(),
            divBottom = $("#n1").offset().top + $("#n1").outerHeight();
        if (divBottom < top + 250) {
            $("#closeClick3").trigger("click");
        }
    });

    $("#stackImgHolder")
        .children("span")
        .mouseenter(function(e) {
            $(this).addClass("makeBigger");
            var that = $(this);
            setTimeout(function() {
                that.removeClass("makeBigger");
            }, 1500);
        });
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

    $("#l2").click(function(e) {
        $("html,body").animate(
            {
                scrollTop: $("#stackSection").offset().top
            },
            "slow"
        );
        // if ($(window).width() < 600) {
        //     window.scroll({
        //         top: "#stackSection",
        //         left: 0,
        //         behavior: "smooth"
        //     });
        // } else {
        //     window.scroll({
        //         top: "#stackSection",
        //         left: 0,
        //         behavior: "smooth"
        //     });
        // }
    });
    $("#l3").click(function() {
        $("html,body").animate(
            {
                scrollTop: $("#projects").offset().top
            },
            "slow"
        );
    });
    $("#l4").click(function() {
        // window.scrollTo(0, 5650);
        window.scroll({
            top: 5650,
            left: 0,
            behavior: "smooth"
        });
    });
});
