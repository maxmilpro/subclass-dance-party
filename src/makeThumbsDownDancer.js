var makeThumbsDownDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('thumbs-down-dancer').removeClass('dancer').append('<img src="images/thumbsDown.png" />');
  this.linedUp = false;
};

// set prototype
makeThumbsDownDancer.prototype = Object.create(makeDancer.prototype);

// set constructor
makeThumbsDownDancer.prototype.constructor = makeThumbsDownDancer;

// refactor methods down here:
makeThumbsDownDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.setPosition(this.top + 20, this.left);
  // setTimeout(function() { this.setPosition(this.top, this.left); }, 200);
  // this.$node.toggle(function() {
  //   this.$node.animate({
  //     top: '+= 20'
  //   }, 500);
  // }, function() {
  //   this.$node.animate({
  //     top: '-= 20'
  //   }, 500);
  // });
  this.$node.animate({top: '+=50px'});
  this.$node.animate({top: '-=50px'});
};
makeThumbsDownDancer.prototype.lineUp = function() {
  if (this.linedUp) {
    var originalStyleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(originalStyleSettings);
    this.linedUp = false;
  } else {
    var styleSettings = {
      left: '200px'
    };
    this.$node.css(styleSettings);
    this.linedUp = true;
  }
};