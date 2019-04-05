// This will make the css framework work better and it will unlock some extrace features.

// You need to have jquery for this file to work.

$(".fm-input_nav").focus(function(e) {
    $(this).parent().css({backgroundColor: "white", transition: "all 200ms"});
    console.log("checl");
}).blur(function () {
    $(this).parent().removeAttr('style');
});

$(".fm-navbar_menu").click(function() {
    $(".fm-navbar_wrapper").toggleClass("responsive");
    console.log("check");
})