'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var AWBurgerBuilder = require('../aw_burger_builder');
chai.config.includeStack = true;

describe('AWBurgerBuilder', function(){
    var subject = new AWBurgerBuilder();

    describe("#RandomBurger", function(){
        context("Random Burger Builder", function(){
            it('returns a random burger', function(){
                console.log(subject.randomBurger());
                expect(true).to.be.bool;
            });
        });
    });

    describe("#BuildABurger", function(){
        context("Guided Burger Building (Everything)", function(){
            it('Ask cheese, add cheese', function(){
                subject.reset();
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask bacon, add bacon', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                console.log(subject.formatBurger());
                expect(true).to.be.bool;
            });
            it('Ask ask double, add double', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask lettuce, add lettuce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask pickle, add pickle', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask tomato, add tomato', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask onion, add onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask jalapeño peppers, add jalapeño peppers', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask mushrooms, add mushrooms', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask grilled onion, add grilled onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask papa sauce, add papa sauce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy papa, add spicy papa', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy ketchup, add spicy ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask mayo, add mayo', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask ketchup, add ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask mustard, add mustard', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask layer, return burger', function(){
                if(subject.NextBurgerLayer() === false){
                    console.log("You ordered a " + subject.formatBurger());
                }
                
                expect(true).to.be.bool;
            });
        });
    });

    describe("#BuildABurger", function(){
        context("Guided Burger Builder (Papa Style)", function(){
            it('Ask cheese, add cheese', function(){
                subject.reset();
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask bacon, add bacon', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask ask double, no double', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask lettuce, add lettuce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask pickle, add pickle', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask tomato, add tomato', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask onion, add onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask jalapeño peppers, no jalapeño peppers', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mushrooms, no mushrooms', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask grilled onion, no grilled onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask papa sauce, add papa sauce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(true);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy papa, no spicy papa', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy ketchup, no spicy ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mayo, no mayo', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask ketchup, no ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mustard, no mustard', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask layer, return burger', function(){
                if(subject.NextBurgerLayer() === false){
                    console.log("You ordered a " + subject.formatBurger());
                }
                expect(true).to.be.bool;
            });
        });
    });

        describe("#BuildABurger", function(){
        context("Guided Burger Builder (Plain", function(){
            it('Ask cheese, add cheese', function(){
                subject.reset();
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask bacon, add bacon', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask ask double, no double', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask lettuce, add lettuce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask pickle, add pickle', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask tomato, add tomato', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask onion, add onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask jalapeño peppers, no jalapeño peppers', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mushrooms, no mushrooms', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask grilled onion, no grilled onion', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask papa sauce, add papa sauce', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy papa, no spicy papa', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask spicy ketchup, no spicy ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mayo, no mayo', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask ketchup, no ketchup', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask mustard, no mustard', function(){
                console.log(subject.NextBurgerLayer());
                subject.AddBurgerLayer(false);
                 
                expect(true).to.be.bool;
            });
            it('Ask layer, return burger', function(){
                if(subject.NextBurgerLayer() === false){
                    console.log("You ordered a " + subject.formatBurger());
                }
                expect(true).to.be.bool;
            });
        });
    });
});