'use strict';

function Burger(){};

Burger.prototype.double = false;
Burger.prototype.bacon = false;
Burger.prototype.cheese = false;
Burger.prototype.toppings = { 'Lettuce': false,
                              'Pickles': false,
                              'Tomato': false,
                              'Onion': false,
                              'Jalapeño Peppers': false,
                              'Grilled Mushrooms': false,
                              'Grilled Onions': false
                            };
Burger.prototype.sauces = { 'Papa Sauce': false,
                            'Spicy Papa': false,
                            'Spicy Ketchup': false,
                            'Mayo': false,
                            'Ketchup': false,
                            'Mustard': false,
                        };

/*Setters*/
Burger.prototype.makeItADouble = function(){
   this.double = true;
};

Burger.prototype.addCheese = function(){
   this.cheese = true;
};

Burger.prototype.addBacon = function(){
   this.bacon = true;
};

Burger.prototype.addTopping = function(topping){
    if(this.toppings.hasOwnProperty(topping)){
        return this.toppings[topping] = true;
    }
    return false;
};

Burger.prototype.addSauce = function(sauce){
    if(this.sauces.hasOwnProperty(sauce)){
        return this.sauces[sauce] = true;
    }
    return false;
};

Burger.prototype.reset = function(){
    this.double = false;
    this.bacon = false;
    this.cheese = false;

    for(var i in this.availableSauces()){
        this.sauces[this.availableSauces()[i]] = false;
    }

    for(var i in this.availableToppings()){
        this.toppings[this.availableToppings()[i]] = false;
    }
};

/*Getters*/
Burger.prototype.isADouble = function(){
    return this.double;
};

Burger.prototype.hasCheese = function(){
    return this.cheese;
};

Burger.prototype.hasBacon = function(){
    return this.bacon;
};

Burger.prototype.availableSauces = function(){
    var keys = [];
    for(var i = 0; i < Object.keys(this.sauces).length; i++){
        keys.push(Object.keys(this.sauces)[i]);
    }
    return keys;
};

Burger.prototype.availableToppings = function(){
    return Object.keys(this.toppings);
};

Burger.prototype.hasTopping = function(topping){
    if(this.toppings.hasOwnProperty(topping)){
        return this.toppings[topping];
    }
    return false;
};

Burger.prototype.hasSauce = function(sauce){
    if(this.sauces.hasOwnProperty(sauce)){
        return this.sauces[sauce];
    }
    return false;
};

Burger.prototype.toJson = function(){
    var selectedToppings = [];
    for(var topping in this.toppings){
        if(this.toppings[topping]){
            selectedToppings.push(topping);
        }
    }
    
    var selectedSauces = [];
    for(var sauce in this.sauces){
        if(this.sauces[sauce]){
            selectedSauces.push(sauce);
        }
    }

    return {
        'double': this.double,
        'bacon': this.bacon,
        'cheese': this.cheese,
        'toppings': selectedToppings,
        'sauces': selectedSauces
    }
};



module.exports = Burger;