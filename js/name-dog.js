$("#nome-dog").focusout(function () {
    var dog = $("#nome-dog").val();
    $(".name-dog").html(dog);
})