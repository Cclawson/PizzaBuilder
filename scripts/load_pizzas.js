var globle_pizzas = [];
var pizza_template = function (name, value) {
	if (value === "custom_pizza") {
		return '<option value="' + value + '" selected="selected">' + name + '</option>';
	}
	return '<option value="' + value + '">' + name + '</option>';
};
var load_pizzas = function (pizzas) {
	for (pizza of pizzas) {
		$('#pizzas').append(pizza_template(pizza.name, pizza.value));
	}
};

var load_json = function (resp) {
	globle_pizzas = resp.pizzas;
	load_pizzas(resp.pizzas);
};

var print_error = function (req, status, err) {
	console.log('JSON File could not be loaded', status, err);
};

var ajax_options = {
	url: "/objects/pizzas.json",
	dataType: 'json',
	success: load_json,
	error: print_error
};

$.ajax(ajax_options);

var selectRadio = function (id, side, numOfOptions) {
	var i;
	for (i = 0; i < numOfOptions; i += 1) {
		if (i == side) {
			$(id + i).prop("checked", true);
			$(id + i).change();
		}
	}
};

$('#pizzas').selectmenu({
	select: function (event, ui) {
		var $item = ui.item;
		for (pizza of globle_pizzas) {

			if ($item.value === pizza.value) {
				//                $('#sizes option[value="' + pizza.size + '"]').attr('selected', 'selected');
				//sauce group
				selectRadio('#sauces', pizza.sauce, 7);
				//meat group
				selectRadio("#pepperoni", pizza.toppings.meats.pepperoni.side, 4);
				selectRadio("#beef", pizza.toppings.meats.beef.side, 4);
				selectRadio("#ham", pizza.toppings.meats.ham.side, 4);
				selectRadio("#bacon", pizza.toppings.meats.bacon.side, 4);
				selectRadio("#chicken", pizza.toppings.meats.chicken.side, 4);
				//vegetable group
				selectRadio('#red_onions', pizza.toppings.vegetables.red_onions.side, 4);
				selectRadio('#black_olives', pizza.toppings.vegetables.black_olives.side, 4);
				selectRadio('#green_peppers', pizza.toppings.vegetables.green_peppers.side, 4);
				selectRadio('#tomatoes', pizza.toppings.vegetables.tomatoes.side, 4);
				selectRadio('#mushrooms', pizza.toppings.vegetables.mushrooms.side, 4);
				selectRadio('#pineapple', pizza.toppings.vegetables.pineapple.side, 4);
			}
		}
	}
});

$('#sizes').selectmenu();