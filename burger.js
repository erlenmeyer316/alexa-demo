'use strict';
var _ = require('lodash');

var _double = false;
var _bacon = false;
var _cheese = false;
var _toppings = {
    'Lettuce': false,
    'Pickles': false,
    'Tomato': false,
    'Onion': false,
    'Jalapeño Peppers': false,
    'Grilled Mushrooms': false,
    'Grilled Onions': false
};
var _sauces = {
    'Papa Sauce': false,
    'Spicy Papa': false,
    'Spicy Ketchup': false,
    'Mayo': false,
    'Ketchup': false,
    'Mustard': false,
};



function Burger(){};

/*Setters*/
Burger.prototype.makeItADouble = function(){
   _double = true;
};

Burger.prototype.addCheese = function(){
   _cheese = true;
};

Burger.prototype.addBacon = function(){
   _bacon = true;
};

Burger.prototype.addTopping = function(topping){
    if(_toppings.hasOwnProperty(topping)){
        return _toppings[topping] = true;
    }
    return false;
};

Burger.prototype.addSauce = function(sauce){
    if(_sauces.hasOwnProperty(sauce)){
        return _sauces[sauce] = true;
    }
    return false;
};

/*Getters*/
Burger.prototype.isADouble = function(){
    return _double;
};

Burger.prototype.hasCheese = function(){
    return _cheese;
};

Burger.prototype.hasBacon = function(){
    return _bacon;
};

Burger.prototype.availableSauces = function(){
    var keys = [];
    for(var i = 0; i < Object.keys(_sauces).length; i++){
        keys.push(Object.keys(_sauces)[i]);
    }
    return keys;
};

Burger.prototype.availableToppings = function(){
    return Object.keys(_toppings);
};

Burger.prototype.hasTopping = function(topping){
    if(_toppings.hasOwnProperty(topping)){
        return _toppings[topping];
    }
    return false;
};

Burger.prototype.hasSauce = function(sauce){
    if(_sauces.hasOwnProperty(sauce)){
        return _sauces[sauce];
    }
    return false;
};

Burger.prototype.burger = function(){
 var toppings = '';
 if(this.formatAdditions(_toppings) != ''){
    toppings = _.template(' topped with ${toppings}')({toppings: this.formatAdditions(_toppings)});
 };

 var sauces = '';
 if(this.formatAdditions(_sauces) != ''){
     sauces = _.template(' with ${sauces}')({sauces: this.formatAdditions(_sauces)});
 }

 var burger = _.template('A ${double}${bacon}${cheese}burger${toppings}${sauces}')({double: this.isADouble() ? 'double ': null, bacon: this.hasBacon() ? 'bacon ' : null, cheese: this.hasCheese() ? 'cheese' : null, toppings: toppings, sauces: sauces});

 return burger;
};

Burger.prototype.reset = function(){
    _double = false;
    _bacon = false;
    _cheese = false;

    for(var i in this.availableSauces()){
        _sauces[this.availableSauces()[i]] = false;
    }

    for(var i in this.availableToppings()){
        _toppings[this.availableToppings()[i]] = false;
    }
};

Burger.prototype.formatAdditions = function(additionObj){
    var additionsString = '';
    var additions = [];
    
    for(var addition in additionObj){
        if(additionObj[addition]){
            additions.push(addition);
        }
    }

    switch(additions.length){
        case 0:
            break;
        case 1:
            additionsString += additions[0];
            break;
        case 2:
            additionsString += additions[0] + ' and ' + additions[1];
            break;
        default:
            for(var i = 0; i < additions.length - 1; i++){
                additionsString += additions[i] + ', ';
            }
            additionsString += 'and ' + additions[additions.length - 1];
    }
    return additionsString;
};



module.exports = Burger;