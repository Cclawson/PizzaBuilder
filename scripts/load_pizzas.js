var globle_pizzas = [];
var pizza_template = function (name, value) {
	if (value === "custom_pizza") {
		return '<option value="' + value + '" selected>' + name + '</option>';
	}
	return '<option value="' + value + '">' + name + '</option>';
};
var load_pizzas = function (pizzas) {
	for (pizza of pizzas) {
		$('#pizzas').append(pizza_template(pizza.name, pizza.value))
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

var selectRadio = function (id, side) {
	for (var i = 0; i < 4; i += 1) {
		if (i == side) {
			$(id + i).prop("checked", true);
		}
	}
};

$('#pizzas').selectmenu({
	select: function (event, ui) {
		var $item = ui.item;
		for (pizza of globle_pizzas) {
			if ($item.value === pizza.value) {
				//sauce group
				selectRadio('#sauces', pizza.sauce);
				//meat group
				selectRadio("#pepperoni", pizza.toppings.meats.pepperoni.side)
				selectRadio("#italian_sausage", pizza.toppings.meats.italian_sausage.side)
				selectRadio("#beef", pizza.toppings.meats.beef.side)
				selectRadio("#ham", pizza.toppings.meats.ham.side)
				selectRadio("#bacon", pizza.toppings.meats.bacon.side)
				selectRadio("#chicken", pizza.toppings.meats.chicken.side)
					//vegetable group
				selectRadio('#red_onions', pizza.toppings.vegetables.red_onions.side);
				selectRadio('#black_olives', pizza.toppings.vegetables.black_olives.side);
				selectRadio('#green_peppers', pizza.toppings.vegetables.green_peppers.side);
				selectRadio('#tomatoes', pizza.toppings.vegetables.tomatoes.side);
				selectRadio('#mushrooms', pizza.toppings.vegetables.mushrooms.side);
				selectRadio('#pineapple', pizza.toppings.vegetables.pineapple.side);
				//cheese group
				selectRadio('#cheddar', pizza.toppings.cheeses.cheddar.side);
				selectRadio('#feta', pizza.toppings.cheeses.feta.side);
				selectRadio('#provolone', pizza.toppings.cheeses.provolone.side);
				selectRadio('#blue_cheese', pizza.toppings.cheeses.blue_cheese.side);
			}
		}
	}
});