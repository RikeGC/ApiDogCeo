$(document).ready(function () {
$('#color-font').on('change', function() {
    var color = $('#color-font').val();
    if (color == 'black'){
        $('.name-dog').css('color', 'rgb(0, 0, 0)');
    }
    else if(color == 'red'){
        $('.name-dog').css('color', 'rgb(197, 0, 0)');
    }
    else if(color == 'blue'){
        $('.name-dog').css('color', 'rgb(0, 79, 197)');
    }
    else if(color == 'green'){
        $('.name-dog').css('color', 'rgb(1, 175, 53)');
    }
    else if(color == 'yellow'){
        $('.name-dog').css('color', 'rgb(252, 255, 56)');
    }
})

$('#family-font').on('change', function() {
    var family = $('#family-font').val();
    if (family == 'Raleway'){
        $('.name-dog').css('font-family', "'Raleway', sans-serif");
    }
    else if(family == 'Liu'){
        $('.name-dog').css('font-family', "'Liu Jian Mao Cao', cursive");
    }
    else if(family == 'Bellota'){
        $('.name-dog').css('font-family', "'Bellota', cursive");
    }
    else if(family == 'Bitter'){
        $('.name-dog').css('font-family', "'Bitter', serif");
    }
    else if(family == 'Lobster'){
        $('.name-dog').css('font-family', "'Lobster', cursive");
    }
})
})