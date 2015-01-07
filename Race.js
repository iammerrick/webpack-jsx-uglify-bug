var Car = require('./Car');
var di = require('di');

var Race = function(car) {
  return {
    start() {
      car.honk();
    }
  }
}

di.annotate(Race, new di.Inject(Car));

module.exports = Race;