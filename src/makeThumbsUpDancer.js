var makeThumbsUpDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-up-dancer').removeClass('dancer').append('<img src="images/thumbsUp.png" />');
};

// set prototype
makeThumbsUpDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeThumbsUpDancer.prototype.constructor = makeThumbsUpDancer;

// refactor methods down here:
makeThumbsUpDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.fadeOut();
};