var topping_template = function (id, name, url, type) {
	var top = '<div id="' + id + '" class="topping"><img class="topping_image" src="' + url + '"><h4 class="topping_name">' + name + '</h4>';
	for (var i = 0; i < 4; i += 1) {
		top += '<label class="radio_group"><input type="radio" id="' + id + i + '" class="radio" name="' + id + '" value="' + i + '"/><img src="/RadBut/radio' + i + '.png"></label>';
	}
	return top + '</div></br>';
};
var load_sauces = function (sauces) {
	for (sauce of sauces) {
		$('#sauces').append(topping_template(sauce.id, sauce.name, sauce.url, sauce.type));
	}
};
var load_vegetables = function (vegetables) {
	for (vegetable of vegetables) {
		$('#vegetables').append(topping_template(vegetable.id, vegetable.name, vegetable.url, vegetable.type))
	}
};
var load_meats = function (meats) {
	for (meat of meats) {
		$('#meats').append(topping_template(meat.id, meat.name, meat.url, meat.type))
	}
};
var load_cheeses = function (cheeses) {
	for (cheese of cheeses) {
		$('#cheeses').append(topping_template(cheese.id, cheese.name, cheese.url, cheese.type))
	}
};

var load_json = function (resp) {
	load_sauces(resp.sauces);
	load_vegetables(resp.vegetables);
	load_meats(resp.meats);
	load_cheeses(resp.cheeses)
};

var print_error = function (req, status, err) {
	console.log('JSON File could not be loaded', status, err);
};

var ajax_options = {
	url: "/objects/toppings.json",
	dataType: 'json',
	success: load_json,
	error: print_error
};

$.ajax(ajax_options);

$('.tabs').tabs();

$(document).ready(function () {
	var obj = $(".checkbox");
	var found = obj.length;
	if (found == 1) {
		checkbox_click(obj);
	}
});