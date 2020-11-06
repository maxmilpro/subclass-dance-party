var makeThumbsDownDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-down-dancer').removeClass('dancer');
};

// set prototype
makeThumbsDownDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeThumbsDownDancer.prototype.constructor = makeThumbsDownDancer;

// refactor methods down here:
makeThumbsDownDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};