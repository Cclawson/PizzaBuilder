var toppings = 0;
for (var i = 0; i < 5; i++) {
    var a = $('input[name=topping0]:checked').val();

    $('input[name=topping' + i + ']').on('change', function () {
        var a = $(this).val();
        console.log(a);
    });
}