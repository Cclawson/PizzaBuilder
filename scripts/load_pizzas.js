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


$('#pizzas').selectmenu({
	select: function (event, ui) {
		var $item = ui.item;
		for (pizza of globle_pizzas) {
			if ($item.value === pizza.value) {
				//sauce group
				$('#tomatoe_sauce').prop("checked", pizza.toppings.sauces.tomatoe_sauce.enabled);
				$('#bechamel').prop("checked", pizza.toppings.sauces.bechamel.enabled);
				$('#pesto').prop("checked", pizza.toppings.sauces.pesto.enabled);
				$('#bbq_sauce').prop("checked", pizza.toppings.sauces.bbq_sauce.enabled);
				$('#hummus').prop("checked", pizza.toppings.sauces.hummus.enabled);
				$('#ranch_sauce').prop("checked", pizza.toppings.sauces.ranch_sauce.enabled);
				$('#soy_miso_sauce').prop("checked", pizza.toppings.sauces.soy_miso_sauce.enabled);
				//meat group
				$('#pepperoni').prop("checked", pizza.toppings.meats.pepperoni.enabled);
				$('#italian_sausage').prop("checked", pizza.toppings.meats.italian_sausage.enabled);
				$('#beef').prop("checked", pizza.toppings.meats.beef.enabled);
				$('#philly_steak').prop("checked", pizza.toppings.meats.philly_steak.enabled);
				$('#ham').prop("checked", pizza.toppings.meats.ham.enabled);
				$('#bacon').prop("checked", pizza.toppings.meats.bacon.enabled);
				$('#salami').prop("checked", pizza.toppings.meats.salami.enabled);
				$('#chicken').prop("checked", pizza.toppings.meats.chicken.enabled);
				//vegetable group
				$('#red_onions').prop("checked", pizza.toppings.vegetables.red_onions.enabled);
				$('#white_onions').prop("checked", pizza.toppings.vegetables.white_onions.enabled);
				$('#black_olives').prop("checked", pizza.toppings.vegetables.black_olives.enabled);
				$('#spiniach').prop("checked", pizza.toppings.vegetables.spiniach.enabled);
				$('#green_peppers').prop("checked", pizza.toppings.vegetables.green_peppers.enabled);
				$('#tomatoes').prop("checked", pizza.toppings.vegetables.tomatoes.enabled);
				$('#mushrooms').prop("checked", pizza.toppings.vegetables.mushrooms.enabled);
				$('#garlic').prop("checked", pizza.toppings.vegetables.garlic.enabled);
				$('#egg_plant').prop("checked", pizza.toppings.vegetables.egg_plant.enabled);
				$('#pineapple').prop("checked", pizza.toppings.vegetables.pineapple.enabled);
				//cheese group
				$('#cheddar').prop("checked", pizza.toppings.cheeses.cheddar.enabled);
				$('#feta').prop("checked", pizza.toppings.cheeses.feta.enabled);
				$('#parmesan').prop("checked", pizza.toppings.cheeses.parmesan.enabled);
				$('#provolone').prop("checked", pizza.toppings.cheeses.provolone.enabled);
				$('#blue_cheese').prop("checked", pizza.toppings.cheeses.blue_cheese.enabled);
			}
		}
	}
});