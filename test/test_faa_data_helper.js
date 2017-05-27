'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var FAADataHelper = require('../faa_data_helper');
chai.config.includeStack = true;

describe('FAADataHelper', function(){
    var subject = new FAADataHelper();
    var airport_code;

    describe('#getAirportStatus', function(){
        context('with a valid airport code', function(){
            it('returns matching airport code', function(){
                airport_code = 'LEX';
                var value = subject.requestAirportStatus(airport_code).then(function(obj){
                    return obj.IATA;
                });
                return expect(value).to.eventually.eq(airport_code);
            });
        });

        context('with an invalid aiport code', function(){
            it('returns invalid airport code', function(){
                airport_code = 'FUNKYBREWSTER';
                return expect(subject.requestAirportStatus(airport_code)).to.be.rejectedWith(Error);
            });
        });
    });
});
