$(document).ready(function() {
    $('#addy').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});