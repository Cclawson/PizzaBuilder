    var toppings = [];

    for (var i = 0; i < 11; i++) {
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
            checkprice();
        });
    }



    function checkprice() {

        $("#priceBlock").empty();

        var psize = $("#sizes").val();

        console.log(psize);

        var totaltop = toppings.length;

        if (totaltop >= 5) {
            totaltop -= 2;
            $("#priceBlock").append("<p>Special Deal: Get 5 Toppings for $3.00</p>");
        }


        switch (psize) {
        case "0":
            totaltop += 6;
            break;
        case "1":
            totaltop += 8;
            break;
        case "2":
            totaltop += 10;
            break;
        case "3":
            totaltop += 12;
            break;
        };


        $("#priceBlock").append("<p>Total Price: $" + totaltop + ".00</p>");
    }

    $('#sizes').selectmenu({
        select: function (event, ui) {
            checkprice();
        }
    });