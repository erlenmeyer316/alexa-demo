'use strict';
var _ = require('lodash');
var Burger = require('./burger');
var RandomHelper = require('./random_helper');

function AWBurgerBuilder(){};

//#PROPERTIES
AWBurgerBuilder.prototype.AWBurger = new Burger();
AWBurgerBuilder.prototype.randomHelper = new RandomHelper();

//#METHODS
AWBurgerBuilder.prototype.formatBurger = function(){
 var burger = this.AWBurger.toJson();

 var toppings = '';
 if(this.formatAdditions(burger['toppings']) != ''){
    toppings = _.template(' topped with ${toppings}')({toppings: this.formatAdditions(burger['toppings'])});
 };

 var sauces = '';
 if(this.formatAdditions(burger['sauces']) != ''){
     sauces = _.template(' with ${sauces}')({sauces: this.formatAdditions(burger['sauces'])});
 }

 return _.template('A ${double}${bacon}${cheese}burger${toppings}${sauces}')({double: burger['double'] ? 'double ': null, bacon: burger['bacon'] ? 'bacon ' : null, cheese: burger['cheese'] ? 'cheese' : null, toppings: toppings, sauces: sauces});
}

AWBurgerBuilder.prototype.formatAdditions = function(additions){
    var additionsString = '';

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

AWBurgerBuilder.prototype.randomBurger = function(){
    this.AWBurger.reset();
    if(this.randomHelper.FiftyFifty()){
        this.addCheese();
    }

    if(this.randomHelper.FiftyFifty()){
        this.addBacon();
    }

    if(this.randomHelper.FiftyFifty()){
        this.makeItADouble();
    }

    var numberOfSauces = this.randomHelper.RandomNumber(0, this.AWBurger.availableSauces().length);
    if(numberOfSauces > 0){
        var randomSauces = this.randomHelper.NonRepeatingRandom(0, this.AWBurger.availableSauces().length - 1, numberOfSauces);
        for(var index in randomSauces){
            this.addSauce(this.AWBurger.availableSauces()[index]);
        }
    }

    var numberOfToppings = this.randomHelper.RandomNumber(0, this.AWBurger.availableToppings().length);
    if(numberOfToppings > 0){
        var randomToppings = this.randomHelper.NonRepeatingRandom(0, this.AWBurger.availableToppings().length - 1, numberOfToppings);
        for(var index in randomToppings){
            this.addTopping(this.AWBurger.availableToppings()[index]);
        }
    }

    return this.formatBurger();
};

//#WRAPPER FUNCTIONS FOR BURGER
AWBurgerBuilder.prototype.addCheese = function(){
    this.AWBurger.addCheese();
};

AWBurgerBuilder.prototype.addBacon = function(){
    this.AWBurger.addBacon();
};

AWBurgerBuilder.prototype.makeItADouble = function(){
    this.AWBurger.makeItADouble();
};

AWBurgerBuilder.prototype.addSauce = function(sauce){
    this.AWBurger.addSauce(sauce);
};

AWBurgerBuilder.prototype.addTopping = function(topping){
    this.AWBurger.addTopping(topping);
};





module.exports = AWBurgerBuilder;