addEventListener('DOMContentLoaded', () => {
    var top = parseInt( $(".main").css("marginTop") );
    if (top!==30) {
        $('.main').css('margin-top', 30);
    }
});

function f() {
    var top = parseInt( $(".main").css("marginTop") );
    if (top===30) {
        $('.main').css('margin-top', 300);
    }
    else {
        $('.main').css('margin-top', 30);
    }
}