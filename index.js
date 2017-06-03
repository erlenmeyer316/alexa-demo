'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('BurgerBuilder');
var AWBurgerBuilder = require('./aw_burger_builder');
var burgerBuilder = new AWBurgerBuilder();

app.launch(function (req, res) {
    //var burgerBuilder = new AWBurgerBuilder();
    //res.session('burgerBuilder', burgerBuilder);
    var prompt = 'Would you like a random burger or would you like to build your own burger?';
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('randomBurger', {
    'utterances': ['random', 'random please', 'I\'d like random', 'A random burger', 'A random burger please', 'I\'d like a random burger please', 'I\'d like a random burger']
    },
    function(req, res){
        //var bugerBuilder = req.session('burgerBuilder');
        res.say('You\'re burger is ' + burgerBuilder.randomBurger() + " Visit your local A&W Burger Chicken Floats restaurant to order one of your own!").send();
        return false;
    }
);

app.intent('buildABurger', {
        'slots': {

        },
        'utterances': ['build', 'build my own', 'build a burger', 'own', 'my own', 'build my own burger', 'I\'d like to build my own', 'I\'d like to build my own burger']
    },
    function(req, res){
        //var burgerBuilder = req.session('burgerBuilder');
        var prompt = burgerBuilder.buildABurger();
        //res.session('burgerBuilder', burgerBuilder);
        res.say(prompt).reprompt(prompt).shouldEndSession(false);
    }
);

app.intent('AMAZON.YesIntent', {
    },
    function(req, res){
        //var burgerBuilder = req.session('burgerBuilder');
        burgerBuilder.AddBurgerLayer(true);
        var prompt = burgerBuilder.NextBurgerLayer();
        if(prompt === false){
            prompt = burgerBuilder.formatBurger();
            res.say("You ordered "+ prompt + " Visit your local A&W Burger Chicken Floats restaurant to order one of your own!").send();
        } else {
            //res.session('burgerBuilder', burgerBuilder);
            res.say(prompt).reprompt(prompt).shouldEndSession(false);
            return true;
        }

    }
);

app.intent('AMAZON.NoIntent', {
    },
    function(req, res){
        //var burgerBuilder = req.session('burgerBuilder');
        burgerBuilder.AddBurgerLayer(false);
        var prompt = burgerBuilder.NextBurgerLayer();
        if(prompt === false){
            prompt = burgerBuilder.formatBurger();
            res.say("You ordered "+ prompt + " Visit your local A&W Burger Chicken Floats restaurant to order one of your own!").send();
        } else {
            //res.session('burgerBuilder', burgerBuilder);
            res.say(prompt).reprompt(prompt).shouldEndSession(false);
            return true;
        }
    }
);
module.exports = app;