var toppings = [];
for (var i = 0; i < 15; i++) {
    var a = $('input[name=topping0]:checked').val();

    $('input[name=topping' + i + ']').on('change', function () {
        var b = $(this).attr("name");
        var c = $(this).attr("id");
        var image = document.getElementById(b + "img");
        image.src = 'toppingImages/' + c + '.png ';

        var tnum = $(this).val();
        var alreadychecked = false;
        var tindex = -1;
        for (var i = 0; i < toppings.length; i++) {
            if (toppings[i] == b) {
                alreadychecked = true;
                tindex = i;
            }
        }

        if (tnum > 0 && !alreadychecked) {
            toppings.push(b);

        };

        if (tnum == 0 && tindex != -1) {
            toppings.splice(tindex, 1);
        }

        $("#topBlock").empty();

        for (var i = 0; i < toppings.length; i++) {
            $("#topBlock").append("<p>" + $('input[name=' + toppings[i] +
                ']:checked').attr("id") + "</p>");
        }
        $("#topBlock").append(toppings.length);

    });
}