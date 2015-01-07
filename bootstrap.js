var Race = require('./Race');
var di = require('di');
var injector = new di.Injector([]);
var race = injector.get(Race);
race.start();