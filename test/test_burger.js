'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Burger = require('../burger');
chai.config.includeStack = true;

describe('Burger', function(){
    var subject = new Burger();
   
   
    describe('#InitialBurgerValues', function(){
        context('initial burger values', function(){
            it('Double is set to false', function(){
                expect(subject.isADouble()).to.eq(false);
            });
            it('Bacon is set to false', function(){
                expect(subject.hasBacon()).to.eq(false);
            });
            it('Cheese is set to false', function(){
                expect(subject.hasCheese()).to.eq(false);
            });
        });
        context('initial sauce values', function(){
            it('Papa Sauce is false', function(){
                expect(subject.hasSauce('Papa Sauce')).to.eq(false);
            });
            it('Spicy Papa is false', function(){
                expect(subject.hasSauce('Spicy Papa')).to.eq(false);
            });
            it('Spicy Ketchup is false', function(){
                expect(subject.hasSauce('Spicy Ketchup')).to.eq(false);
            });
            it('Mayo is false', function(){
                expect(subject.hasSauce('Mayo')).to.eq(false);
            });
            it('Ketchup is false', function(){
                expect(subject.hasSauce('Ketchup')).to.eq(false);
            });
            it('Mustard is false', function(){
                expect(subject.hasSauce('Mustard')).to.eq(false);
            });
        });
            context('initial topping values', function(){
            it('Lettuce is false', function(){
                expect(subject.hasTopping('Lettuce')).to.eq(false);
            });
            it('Pickles is false', function(){
                expect(subject.hasTopping('Pickles')).to.eq(false);
            });
            it('Tomato is false', function(){
                expect(subject.hasTopping('Tomato')).to.eq(false);
            });
            it('Onion is false', function(){
                expect(subject.hasTopping('Onion')).to.eq(false);
            });
            it('Jalapeño Peppers is false', function(){
                expect(subject.hasTopping('Jalapeño Peppers')).to.eq(false);
            });
            it('Grilled Muschrooms is false', function(){
                expect(subject.hasTopping('Grilled Mushrooms')).to.eq(false);
            });
            it('Grilled Onions is false', function(){
                expect(subject.hasTopping('Grilled Onions')).to.eq(false);
            });
        });
    });

    describe('#GetAvailableSauces', function(){
        context('list available sauces', function(){
            it('returns all available sauces', function(){
                expect(subject.availableSauces()).to.deep.equal(['Papa Sauce','Spicy Papa','Spicy Ketchup','Mayo','Ketchup','Mustard']);
            });
        });
    });

    describe('#GetAvailableToppings', function(){
        context('list available toppings', function(){
            it('returns all available toppings', function(){
                expect(subject.availableToppings()).to.deep.equal(['Lettuce','Pickles','Tomato','Onion','Jalapeño Peppers','Grilled Mushrooms','Grilled Onions']);
            });
        });
    });
    
    describe('#SetBurgerValues', function(){
        context('add burger modifiers', function(){
            it('Cheese is set to true', function(){
                subject.addCheese();
                expect(subject.hasCheese()).to.eq(true);
            });
            it('Bacon is set to true', function(){
                subject.addBacon();
                expect(subject.hasBacon()).to.eq(true);
            });
            it('Double is set to true', function(){
                subject.makeItADouble();
                expect(subject.isADouble()).to.eq(true);
            });
        });
        context('add sauces', function(){
            it('Papa Sauce is true', function(){
                subject.addSauce('Papa Sauce');
                expect(subject.hasSauce('Papa Sauce')).to.eq(true);
            });
            it('Spicy Papa is true', function(){
                subject.addSauce('Spicy Papa');
                expect(subject.hasSauce('Spicy Papa')).to.eq(true);
            });
            it('Spicy Ketchup is true', function(){
                subject.addSauce('Spicy Ketchup');
                expect(subject.hasSauce('Spicy Ketchup')).to.eq(true);
            });
            it('Mayo is true', function(){
                subject.addSauce('Mayo');
                expect(subject.hasSauce('Mayo')).to.eq(true);
            });
            it('Ketchup is true', function(){
                subject.addSauce('Ketchup');
                expect(subject.hasSauce('Ketchup')).to.eq(true);
            });
            it('Mustard is true', function(){
                subject.addSauce('Mustard');
                expect(subject.hasSauce('Mustard')).to.eq(true);
            });
        });
        context('add toppings', function(){
            it('Lettuce is true', function(){
                subject.addTopping('Lettuce');
                expect(subject.hasTopping('Lettuce')).to.eq(true);
            });
            it('Pickles is true', function(){
                subject.addTopping('Pickles');
                expect(subject.hasTopping('Pickles')).to.eq(true);
            });
            it('Tomato is true', function(){
                subject.addTopping('Tomato');
                expect(subject.hasTopping('Tomato')).to.eq(true);
            });
            it('Onion is true', function(){
                subject.addTopping('Onion');
                expect(subject.hasTopping('Onion')).to.eq(true);
            });
            it('Jalapeño Peppers is true', function(){
                subject.addTopping('Jalapeño Peppers');
                expect(subject.hasTopping('Jalapeño Peppers')).to.eq(true);
            });
            it('Grilled Mushrooms is true', function(){
                subject.addTopping('Grilled Mushrooms');
                expect(subject.hasTopping('Grilled Mushrooms')).to.eq(true);
            });
            it('Grilled Onions is true', function(){
                subject.addTopping('Grilled Onions');
                expect(subject.hasTopping('Grilled Onions')).to.eq(true);
            });
        });
        context('Can\'t add unavailable sauces or toppings', function(){
            it('Hot Diarrhea isn\'t an available sauce', function(){
                expect(subject.addSauce('Hot Diarrhea')).to.eq(false);
            });
            it('Grilled toe-nails isn\'t an available topping', function(){
                expect(subject.addTopping('Grilled toe-nails')).to.eq(false);
            });
        });
    });

    describe("#ResetBurger", function(){
        context('Set burger back to initial values', function(){
            it('Double is set to false', function(){
                subject.reset();
                expect(subject.isADouble()).to.eq(false);
            });
            it('Bacon is set to false', function(){
                subject.reset();
                expect(subject.hasBacon()).to.eq(false);
            });
            it('Cheese is set to false', function(){
                subject.reset();
                expect(subject.hasCheese()).to.eq(false);
            });
        
            it('Papa Sauce is false', function(){
                subject.reset();
                expect(subject.hasSauce('Papa Sauce')).to.eq(false);
            });
            it('Spicy Papa is false', function(){
                subject.reset();
                expect(subject.hasSauce('Spicy Papa')).to.eq(false);
            });
            it('Spicy Ketchup is false', function(){
                subject.reset();
                expect(subject.hasSauce('Spicy Ketchup')).to.eq(false);
            });
            it('Mayo is false', function(){
                subject.reset();
                expect(subject.hasSauce('Mayo')).to.eq(false);
            });
            it('Ketchup is false', function(){
                subject.reset();
                expect(subject.hasSauce('Ketchup')).to.eq(false);
            });
            it('Mustard is false', function(){
                subject.reset();
                expect(subject.hasSauce('Mustard')).to.eq(false);
            });
        
            it('Lettuce is false', function(){
                expect(subject.hasTopping('Lettuce')).to.eq(false);
            });
            it('Pickles is false', function(){
                expect(subject.hasTopping('Pickles')).to.eq(false);
            });
            it('Tomato is false', function(){
                expect(subject.hasTopping('Tomato')).to.eq(false);
            });
            it('Onion is false', function(){
                expect(subject.hasTopping('Onion')).to.eq(false);
            });
            it('Jalapeño Peppers is false', function(){
                expect(subject.hasTopping('Jalapeño Peppers')).to.eq(false);
            });
            it('Grilled Muschrooms is false', function(){
                expect(subject.hasTopping('Grilled Mushrooms')).to.eq(false);
            });
            it('Grilled Onions is false', function(){
                expect(subject.hasTopping('Grilled Onions')).to.eq(false);
            });
        });
    });

    describe('#DescribeBurger', function(){
        context('Plain Burger', function(){
            it('Describes a plain burger', function(){
                subject.reset();
                expect(subject.toJson()).to.deep.equal({'double': false, 'bacon': false, 'cheese': false, 'toppings': [], 'sauces':[]});
            });
        });
        context('Cheeseburger', function(){
            it('Describes a cheeseburger', function(){
                subject.reset();
                subject.addCheese();
                expect(subject.toJson()).to.deep.equal({'double': false, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':[]});
            });
        });
        context('Bacon Cheeseburger', function(){
            it('Describes a bacon cheeseburger', function(){
                subject.reset();
                subject.addCheese();
                subject.addBacon();
                expect(subject.toJson()).to.deep.equal({'double': false, 'bacon': true, 'cheese': true, 'toppings': [], 'sauces':[]});
            });
        });
        context('Double Bacon Cheeseburger', function(){
            it('Describes a double bacon cheeseburger', function(){
                subject.reset();
                subject.addCheese();
                subject.addBacon();
                subject.makeItADouble();
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': true, 'cheese': true, 'toppings': [], 'sauces':[]});
            });
        });
        context('Double Cheeseburger', function(){
            it('Describes a double cheeseburger', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':[]});
            });
        });
        context('Double Cheeseburger with 1 Topping', function(){
            it('Describes a double cheeseburger topped with onion', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addTopping('Onion');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': ['Onion'], 'sauces':[]});
            });
        });
        context('Double Cheeseburger with 2 Toppings', function(){
            it('Describes a double cheeseburger topped with onion & jalapeno peppers', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addTopping('Onion');
                subject.addTopping('Jalapeño Peppers')
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': ['Onion', 'Jalapeño Peppers'], 'sauces':[]});
            });
        });
        context('Double Cheeseburger with 3 Toppings', function(){
            it('Describes A double cheeseburger topped with Tomato, Onion, and Jalapeño Peppers', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addTopping('Onion');
                subject.addTopping('Jalapeño Peppers')
                subject.addTopping('Tomato');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': ['Tomato','Onion', 'Jalapeño Peppers'], 'sauces':[]});
            });
        });
        context('Double Cheeseburger with 4 Toppings', function(){
            it('Describes A double cheeseburger topped with Tomato, Onion, Jalapeño Peppers, and Grilled Mushrooms', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addTopping('Onion');
                subject.addTopping('Jalapeño Peppers')
                subject.addTopping('Tomato');
                subject.addTopping('Grilled Mushrooms');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': ['Tomato','Onion', 'Jalapeño Peppers', 'Grilled Mushrooms'], 'sauces':[]});
            });
        });
        context('Double Cheeseburger with 1 sauce', function(){
            it('A double cheeseburger with Papa Sauce', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addSauce('Papa Sauce');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':['Papa Sauce']});
            });
        });
       context('Double Cheeseburger with 2 sauces', function(){
            it('A double cheeseburger with Papa Sauce and Mayo', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addSauce('Papa Sauce');
                subject.addSauce('Mayo');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':['Papa Sauce', 'Mayo']});
            });
        });
        context('Double Cheeseburger with 3 sauces', function(){
            it('A double cheeseburger with Papa Sauce, Mayo, and Ketchup', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addSauce('Papa Sauce');
                subject.addSauce('Mayo');
                subject.addSauce('Ketchup');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':['Papa Sauce', 'Mayo', 'Ketchup']});
            });
        });
        context('Double Cheeseburger with 4 sauces', function(){
            it('A double cheeseburger with Papa Sauce, Mayo, and Ketchup', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addSauce('Papa Sauce');
                subject.addSauce('Mayo');
                subject.addSauce('Ketchup');
                subject.addSauce('Mustard');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': [], 'sauces':['Papa Sauce', 'Mayo', 'Ketchup', 'Mustard']});
            });
        });
        context('Double Cheeseburger with 3 Toppings and 2 Sauces', function(){
            it('A double cheeseburger topped with Tomato, Onion, and Jalapeño Peppers with Papa Sauce and Mayo', function(){
                subject.reset();
                subject.addCheese();
                subject.makeItADouble();
                subject.addTopping('Onion');
                subject.addTopping('Jalapeño Peppers')
                subject.addTopping('Tomato');
                subject.addSauce('Papa Sauce');
                subject.addSauce('Mayo');
                expect(subject.toJson()).to.deep.equal({'double': true, 'bacon': false, 'cheese': true, 'toppings': ['Tomato', 'Onion', 'Jalapeño Peppers'], 'sauces':['Papa Sauce', 'Mayo']});
            });
        });
    });
});