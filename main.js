var one = 'Haumi —'; 
var two = 'Haumi ē! Hui ē! Tāiki ē!'; 
var speed = '1000'; 

var first = true; function setTitle() { if(first) document.title = one; else document.title = two; first = !first; }; setInterval(setTitle, speed); 



$(document).ready(function() {
    $('#addy').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});


$(document).ready(function() {
    $('#te').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});

$(document).ready(function() {
    $('#roro').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});

$(document).ready(function() {
    $('#pu').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});

$(document).ready(function() {
    $('#con').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});

$(document).ready(function() {
    $('#rua').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hallo')
    });
});