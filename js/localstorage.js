$(document).ready(function () {
    $("#nome-dog").val(localStorage.getItem("Name"));
    $("#color-font").val(localStorage.getItem("Color"));
        if (localStorage.getItem("Color") == 'black'){
            $('.name-dog').css('color', 'rgb(0, 0, 0)');
        }
        else if(localStorage.getItem("Color") == 'red'){
            $('.name-dog').css('color', 'rgb(197, 0, 0)');
        }
        else if(localStorage.getItem("Color") == 'blue'){
            $('.name-dog').css('color', 'rgb(0, 79, 197)');
        }
        else if(localStorage.getItem("Color") == 'green'){
            $('.name-dog').css('color', 'rgb(1, 175, 53)');
        }
        else if(localStorage.getItem("Color") == 'yellow'){
            $('.name-dog').css('color', 'rgb(252, 255, 56)');
        }
    $("#family-font").val(localStorage.getItem("Family"));
        if (localStorage.getItem("Family") == 'Raleway'){
            $('.name-dog').css('font-family', "'Raleway', sans-serif");
        }
        else if(localStorage.getItem("Family") == 'Liu'){
            $('.name-dog').css('font-family', "'Liu Jian Mao Cao', cursive");
        }
        else if(localStorage.getItem("Family") == 'Bellota'){
            $('.name-dog').css('font-family', "'Bellota', cursive");
        }
        else if(localStorage.getItem("Family") == 'Bitter'){
            $('.name-dog').css('font-family', "'Bitter', serif");
        }
        else if(localStorage.getItem("Family") == 'Lobster'){
            $('.name-dog').css('font-family', "'Lobster', cursive");
        }
    $("#dog-selector").val(localStorage.getItem("Breed"));
    $(".img-dog").attr('src',localStorage.getItem("Img"));
    $("#nome-dog").focus();
    $("#color-font").focus();
    $("#btnSalvar").click(function () {
        Salvar();
    })
        
});
function RetornaDataHoraAtual(){
    var dNow = new Date();
    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    return localdate;
}  
function Salvar(){
    localStorage.setItem("Name", $("#nome-dog").val());
    localStorage.setItem("Color", $("#color-font").val());
    localStorage.setItem("Family", $("#family-font").val());
    localStorage.setItem("Breed", $("#dog-selector").val());
    localStorage.setItem("Img", $("#img-dog").attr('src'));
    localStorage.setItem("Date", RetornaDataHoraAtual());
    alert("Cachorro Registrado");
}