var makeThumbsUpDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-up-dancer').removeClass('dancer');
};

// set prototype
makeThumbsUpDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeThumbsUpDancer.prototype.constructor = makeThumbsUpDancer;

// refactor methods down here:
makeThumbsUpDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};