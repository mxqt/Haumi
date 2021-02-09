$(document).ready(function() {
    $('#addy', '#roro', '#pu', '#rua', '#con', '#te').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});