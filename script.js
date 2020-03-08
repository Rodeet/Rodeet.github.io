var total = 0;
function click() {
total += 1;
if(total == 1){
$(document).ready(function() {

    var $element = $('#bubble');
    var newText = 'С 8 марта, девачки <3';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
    });

});
}
}

heart.addEventListener('click',click);