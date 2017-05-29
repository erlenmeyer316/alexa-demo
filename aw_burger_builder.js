'use strict';
var _ = require('lodash');
var Burger = require('./burger');
var RandomHelper = require('./random_helper');

var AWBurger = new Burger(); 
var randomHelper = new RandomHelper();  

function AWBurgerBuilder(){
     
};

AWBurgerBuilder.prototype.formatBurger = function(){
 var burger = AWBurger.toJson();

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
    //var additions = [];
    
    /*for(var addition in additionObj){
        if(additionObj[addition]){
            additions.push(addition);
        }
    }*/

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
    AWBurger.reset();
    if(randomHelper.FiftyFifty()){
        AWBurger.addCheese();
    }

    if(randomHelper.FiftyFifty()){
        AWBurger.addBacon();
    }

    if(randomHelper.FiftyFifty()){
        AWBurger.makeItADouble();
    }

    var numberOfSauces = randomHelper.RandomNumber(0, AWBurger.availableSauces().length);
    if(numberOfSauces > 0){
        var randomSauces = randomHelper.NonRepeatingRandom(0, AWBurger.availableSauces().length - 1, numberOfSauces);
        for(var index in randomSauces){
            //console.log(AWBurger.availableSauces()[index]);
            AWBurger.addSauce(AWBurger.availableSauces()[index]);
        }
    }

    var numberOfToppings = randomHelper.RandomNumber(0, AWBurger.availableToppings().length);
    if(numberOfToppings > 0){
        var randomToppings = randomHelper.NonRepeatingRandom(0, AWBurger.availableToppings().length - 1, numberOfToppings);
        for(var index in randomToppings){
            //console.log(AWBurger.availableToppings()[index]);
            AWBurger.addTopping(AWBurger.availableToppings()[index]);
        }
    }

    return this.formatBurger();
};





module.exports = AWBurgerBuilder;