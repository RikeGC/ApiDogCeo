$(document).ready(function () {
    $("#txtDog").focusout(function () {
        var dog = $("#txtDog").val();
        dog = dog.replace(" ", "");

        var urlDog = 'https://dog.ceo/api/breed/' + dog + '/images/random'

        $.ajax({
            url: urlDog,
            type: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#imgDog").attr('src', data.message);
            },
            error: function (erro) {
                console.log(erro);
            }
        })
    })
});