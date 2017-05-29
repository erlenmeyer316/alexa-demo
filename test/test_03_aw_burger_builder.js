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
});