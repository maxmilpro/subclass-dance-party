var makeThumbsUpDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-up-dancer').removeClass('dancer').append('<img src="images/thumbsUp.png" />');
  this.linedUp = false;
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
makeThumbsUpDancer.prototype.lineUp = function() {
  if (this.linedUp) {
    var originalStyleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(originalStyleSettings);
    this.linedUp = false;
  } else {
    var styleSettings = {
      right: '200px',
      left: ''
    };
    this.$node.css(styleSettings);
    this.linedUp = true;
  }
};