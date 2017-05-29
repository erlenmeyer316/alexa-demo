'use strict';
var _ = require('lodash');
var burger = require('burger');


function AWBurgerBuilder(){};

AWBurgerBuilder.prototype.randomBurger = function(){

};


/*var toppings = '';
 if(this.formatAdditions(_toppings) != ''){
    toppings = _.template(' topped with ${toppings}')({toppings: this.formatAdditions(_toppings)});
 };

 var sauces = '';
 if(this.formatAdditions(_sauces) != ''){
     sauces = _.template(' with ${sauces}')({sauces: this.formatAdditions(_sauces)});
 }

 var burger = _.template('A ${double}${bacon}${cheese}burger${toppings}${sauces}')({double: this.isADouble() ? 'double ': null, bacon: this.hasBacon() ? 'bacon ' : null, cheese: this.hasCheese() ? 'cheese' : null, toppings: toppings, sauces: sauces});

 return burger;*/

 /*
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
};*/

module.exports = AWBurgerBuilder;