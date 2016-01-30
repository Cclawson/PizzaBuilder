var toppings = 0;
for (var i = 0; i < 5; i++) {
    var a = $('input[name=topping0]:checked').val();

    $('input[name=topping' + i + ']').on('change', function () {
        var b = $(this).attr("id");
        var image = document.getElementById("top");
        image.src = 'toppingImages/' + b + '.png '
        console.log(b);
    });
}