//Populating DOM with 16 duplicate box divs

let boxes = $('#boxes');

    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);
    $('<div class = boxElement></div>').appendTo(boxes);

//Adding majority of styles here to show it can be done through JQuery (inline styles are messy IMO though)

$('body') 
    .css({
        'background-color': '#eee'
    });

$('#boxes') 
    .css({
        'display': 'flex',
        'margin': '100px auto',
        'justify-content': 'space-between',
        'flex-wrap': 'wrap',
        'width': '442px'
    });


$('.boxElement') 
    .css({
        'padding': '50px',
        'margin': '7px 0'
    });

//The click event

$('#boxes').on('click', '.boxElement', function() {
    $(this).toggleClass('clicked');
});