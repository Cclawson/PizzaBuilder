var topping_template = function (id, name, url) {
    //    return '<input type="checkbox" id="' + id + '"><img src="' + url + '">' + name + '</input>'
    return '<fieldset id="' + name + '" <label><input type="radio" name=' + name + ' class="' + id + '" value="none"><img src="RadBut/radio-none.png"></label><label><input type="radio" name=' + name + ' class="' + id + '" value="full"><img src="RadBut/radio-fullPizza.png"></label><label><input type="radio" name=' + name + ' class="' + id + '" value="left"><img src="RadBut/radio-leftPizza.png"></label><label><input type="radio" name=' + name + ' class="' + id + '" value="right"><img src="RadBut/radio-rightPizza.png"></label></fieldset>'
};
var load_sauces = function (sauces) {
    for (sauce of sauces) {
        $('#sauces').append(topping_template(sauce.id, sauce.name, sauce.url));
    }
};
var load_vegetables = function (vegetables) {
    for (vegetable of vegetables) {
        $('#vegetables').append(topping_template(vegetable.id, vegetable.name, vegetable.url))
    }
};
var load_meats = function (meats) {
    for (meat of meats) {
        $('#meats').append(topping_template(meat.id, meat.name, meat.url))
    }
};
var load_cheeses = function (cheeses) {
    for (cheese of cheeses) {
        $('#cheeses').append(topping_template(cheese.id, cheese.name, cheese.url))
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