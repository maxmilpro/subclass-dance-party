describe('thumbsDownDancer', function() {

  var thumbsDownDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    thumbsDownDancer = new makeThumbsDownDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(thumbsDownDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide up and down', function() {
    sinon.spy(thumbsDownDancer.$node, 'animate');
    thumbsDownDancer.step();
    expect(thumbsDownDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(thumbsDownDancer, 'step');
      expect(thumbsDownDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(thumbsDownDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(thumbsDownDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('linedUp', function() {
    it('should have a linedUp property initially set to false and after running should be true', function() {
      expect(thumbsDownDancer.linedUp).to.be.false;
      thumbsDownDancer.lineUp();
      expect(thumbsDownDancer.linedUp).to.be.true;
    });

    it('should change left CSS property to 200px', function() {
      thumbsDownDancer.lineUp();
      expect(thumbsDownDancer.$node.css('left')).to.be.equal('200px');
    });
  });
});
