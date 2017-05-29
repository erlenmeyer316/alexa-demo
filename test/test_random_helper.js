'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var RandomHelper = require('../random_helper');
chai.config.includeStack = true;

describe('RandomHelper', function(){
    var subject = new RandomHelper();

    describe("#RandomFiftyFifty", function(){
        context("Coin Toss", function(){
            it('Is a boolean', function(){
                expect(subject.FiftyFifty()).to.be.bool;
            });
        });
    });

    describe("#RandomNumberInRange", function(){
        context("Random number between 1 and 7", function(){
            it('Is between 1 and 7', function(){
                expect(subject.RandomNumber(1,7)).to.be.within(1,7);
            });
        });
    });

    describe("#NonRepeatingRandom", function(){
        context("Set of 4 non-repeating numbers between 1 and 7", function(){
            it('Has 4 numbers', function(){
                expect(subject.NonRepeatingRandom(1,7,4).length).to.eq(4);
            });
        });
    });
});