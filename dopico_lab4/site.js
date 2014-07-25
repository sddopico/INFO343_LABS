$(document).ready(function() {
    $('.frame').on('mouseover', over);
    $('.frame').on('mouseout', notOver);
});
var current_frame = 1, change_frame;
function over() {    
    change_frame = setInterval(run_interval, 25);
}
function run_interval() {
    var $frame = $('div.frame');
    $frame.removeClass('frame' + current_frame);
    current_frame++;
    if (current_frame == 37) {
            current_frame = 1;
    }
    $frame.addClass('frame' + current_frame);
}
function notOver() {
    clearInterval(change_frame);
}

