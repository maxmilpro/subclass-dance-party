var makeThumbsDownDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-down-dancer').removeClass('dancer').append('<img src="images/thumbsDown.png" />');
};

// set prototype
makeThumbsDownDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeThumbsDownDancer.prototype.constructor = makeThumbsDownDancer;

// refactor methods down here:
makeThumbsDownDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeIn();
  this.$node.fadeOut();
};