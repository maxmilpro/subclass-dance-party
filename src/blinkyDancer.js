var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// set prototype
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// refactor methods down here:
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};