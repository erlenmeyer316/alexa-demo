'use strict';
var _ = require('lodash');
var Burger = require('./burger');
var RandomHelper = require('./random_helper');

var AWBurger = new Burger();
var randomHelper = new RandomHelper();

function AWBurgerBuilder() {};

//#PROPERTIES
AWBurgerBuilder.prototype.burgerLayers = 0;
AWBurgerBuilder.prototype.toppingLayers = 0;
AWBurgerBuilder.prototype.sauceLayers = 0;

//#METHODS
AWBurgerBuilder.prototype.randomBurger = function () {
    AWBurger.reset();
    if (randomHelper.FiftyFifty()) {
        this.addCheese();
    }

    if (randomHelper.FiftyFifty()) {
        this.addBacon();
    }

    if (randomHelper.FiftyFifty()) {
        this.makeItADouble();
    }

    var numberOfSauces = randomHelper.RandomNumber(0, AWBurger.availableSauces().length);
    if (numberOfSauces > 0) {
        var randomSauces = randomHelper.NonRepeatingRandom(0, AWBurger.availableSauces().length - 1, numberOfSauces);
        for (var index in randomSauces) {
            this.addSauce(AWBurger.availableSauces()[index]);
        }
    }

    var numberOfToppings = randomHelper.RandomNumber(0, AWBurger.availableToppings().length);
    if (numberOfToppings > 0) {
        var randomToppings = randomHelper.NonRepeatingRandom(0, AWBurger.availableToppings().length - 1, numberOfToppings);
        for (var index in randomToppings) {
            this.addTopping(AWBurger.availableToppings()[index]);
        }
    }

    return this.formatBurger();
};

AWBurgerBuilder.prototype.buildABurger = function(){
    this.reset();
    return this.NextBurgerLayer();
};

AWBurgerBuilder.prototype.NextBurgerLayer = function () {
    
     if (this.burgerLayers != 0) {
        switch (this.burgerLayers) {
            case 1:
                return "Should I make it a double?";
            case 2:
                return "How about bacon?";
            case 3:
                return "Let's build a burger! First things first. Would you like cheese?";
            default:
                return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot her."
        }
    } else {
        if (this.toppingLayers != 0) {
            switch (this.toppingLayers) {
                case 1:
                    return "Finally, would you like grilled onions on your burger?"
                case 2:
                    return "Grilled mushrooms?"
                case 3:
                    return "Would you like to spice it up a bit with Jalapeño Peppers?";
                case 4:
                    return "Do you like onion on your burger?";
                case 5:
                    return "How about a slice of juicy tomato?";
                case 6:
                    return "Some pickles?";
                case 7:
                    return "Now onto the toppings! Would you like lettuce?";
                default:
                    return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot him."
            }
        } else {
            if (this.sauceLayers != 0) {
                switch (this.sauceLayers) {
                    case 1:
                        return "We're just about done! How about some Mustard?";
                    case 2:
                        return "Would you like Ketchup?";
                    case 3:
                        return "Do you like Mayo on your burger?";
                    case 4:
                        return "Spicy Ketchup?";
                    case 5:
                        return "What about some of our spicy Papa Sauce?";
                    case 6:
                        return "No burger would be complete without some sauce. How about some of our famous Papa Sauce?";
                    default:
                        return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot her."
                }
            } else {
                //we're all done
                return false;
            } 
        }
    }
};

AWBurgerBuilder.prototype.AddBurgerLayer = function (add) {
    if (this.burgerLayers != 0) {
        if (add) {
            switch (this.burgerLayers) {
                case 1:
                    this.makeItADouble();
                    break;
                case 2:
                    AWBurger.addBacon();
                    break;
                case 3:
                    AWBurger.addCheese();
                    break;
                default:
                    return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot him."
            } 
        }
        this.burgerLayers--;

    } else {
        if (this.toppingLayers != 0) {
            if(add){
                switch (this.toppingLayers) {
                    case 1:
                        this.addTopping('Grilled Onions');
                        break;
                    case 2:
                        this.addTopping('Grilled Mushrooms');
                        break;
                    case 3:
                        this.addTopping('Jalapeño Peppers');
                        break;
                    case 4:
                        this.addTopping('Onion');
                        break;
                    case 5:
                        this.addTopping('Tomato');
                        break;
                    case 6:
                        this.addTopping('Pickles');
                        break;
                    case 7:
                        this.addTopping('Lettuce');
                        break;
                    default:
                        return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot her."
                }
            }
            this.toppingLayers--;
        } else {
            if (this.sauceLayers != 0) {
                if(add){
                    switch (this.sauceLayers) {
                        case 1:
                            this.addSauce('Mustard');
                            break;
                        case 2:
                            this.addSauce('Ketchup');
                            break;
                        case 3:
                            this.addSauce('Mayo');
                            break;
                        case 4:
                            this.addSauce('Spicy Ketchup');
                            break;
                        case 5:
                            this.addSauce('Spicy Papa');
                            break;
                        case 6:
                            this.addSauce('Papa Sauce');
                            break;
                        default:
                            return "Something went terribly wrong! Our gravitational reversal of meat technician is on the fritz. Please check back later while we reboot him."
                    }

                }
            } 
            this.sauceLayers--;
        }
    }
    //check if all layers have been filled if so restart loop return burger
};

AWBurgerBuilder.prototype.formatBurger = function () {
    var burger = AWBurger.toJson();

    var toppings = '';
    if (this.formatAdditions(burger['toppings']) != '') {
        toppings = _.template(' topped with ${toppings}')({
            toppings: this.formatAdditions(burger['toppings'])
        });
    };

    var sauces = '';
    if (this.formatAdditions(burger['sauces']) != '') {
        sauces = _.template(' with ${sauces}')({
            sauces: this.formatAdditions(burger['sauces'])
        });
    }


    var tmpl = _.template('A ${double}${bacon}${cheese}burger${toppings}${sauces}.')({
        double: burger['double'] ? 'double ' : null,
        bacon: burger['bacon'] ? 'bacon ' : null,
        cheese: burger['cheese'] ? 'cheese' : null,
        toppings: toppings,
        sauces: sauces
    });

    if(tmpl.indexOf('topped with Lettuce, Pickles, Tomato, and Onion with Papa Sauce') !== -1){
        return _.template('A ${double}${bacon}${cheese}burger Papa Style.')({
            double: burger['double'] ? 'double ' : null,
            bacon: burger['bacon'] ? 'bacon ' : null,
            cheese: burger['cheese'] ? 'cheese' : null
        });
    } else {
        return tmpl;
    }
}

AWBurgerBuilder.prototype.formatAdditions = function (additions) {
    var additionsString = '';

    switch (additions.length) {
        case 0:
            break;
        case 1:
            additionsString += additions[0];
            break;
        case 2:
            additionsString += additions[0] + ' and ' + additions[1];
            break;
        default:
            for (var i = 0; i < additions.length - 1; i++) {
                additionsString += additions[i] + ', ';
            }
            additionsString += 'and ' + additions[additions.length - 1];
    }
    return additionsString;
};

//#WRAPPER FUNCTIONS FOR BURGER
AWBurgerBuilder.prototype.addCheese = function () {
    AWBurger.addCheese();
};

AWBurgerBuilder.prototype.addBacon = function () {
    AWBurger.addBacon();
};

AWBurgerBuilder.prototype.makeItADouble = function () {
    AWBurger.makeItADouble();
};

AWBurgerBuilder.prototype.addSauce = function (sauce) {
    AWBurger.addSauce(sauce);
};

AWBurgerBuilder.prototype.addTopping = function (topping) {
    AWBurger.addTopping(topping);
};

AWBurgerBuilder.prototype.reset = function(){
    AWBurger.reset();
    this.burgerLayers = 3; //cheese, bacon, make it a double
    this.toppingLayers = AWBurger.availableToppings().length;
    this.sauceLayers = AWBurger.availableSauces().length
}




module.exports = AWBurgerBuilder;