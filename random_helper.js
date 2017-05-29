'use strict'

function RandomHelper(){};

RandomHelper.prototype.FiftyFifty = function(){
    var x = Math.random() >= 0.5;   
    return x;
};

RandomHelper.prototype.RandomNumber = function(min,max){
    var x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
};

RandomHelper.prototype.NonRepeatingRandom = function(min, max, count) {
    var set = [];
    if(count <= max) {
        var rand = require('unique-random')(min, max);      
        for(var x = 0; x < count; x++){
            set.push(rand());
        }
    }
    return set;
};


module.exports = RandomHelper;