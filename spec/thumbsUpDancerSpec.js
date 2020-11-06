describe('thumbsUpDancer', function() {

  var thumbsUpDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    thumbsUpDancer = new makeThumbsUpDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(thumbsUpDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(thumbsUpDancer.$node, 'toggle');
    thumbsUpDancer.step();
    expect(thumbsUpDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(thumbsUpDancer, 'step');
      expect(thumbsUpDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(thumbsUpDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(thumbsUpDancer.step.callCount).to.be.equal(2);
    });
  });
});
