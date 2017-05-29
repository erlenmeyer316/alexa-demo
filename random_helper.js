'use strict'

function RandomHelper(){};

RandomHelper.prototype.FiftyFifty = function(){
    var x = Math.random() >= 0.5;   
    console.log(x);
    return x;
};

RandomHelper.prototype.RandomNumber = function(min,max){
    var x = Math.floor(Math.random()*(max-min+1)+min);
    console.log(x);
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
    console.log(set);
    return set;
};


module.exports = RandomHelper;