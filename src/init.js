$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() + 32,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.maybe').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i += 2) {
      var top = window.dancers[i].top;
      var left = window.dancers[i].left + 100;
      window.dancers[i + 1].setPosition(top, left);
    }
  });

  $('body').on('mouseover', '.thumbs-up-dancer, .thumbs-down-dancer', function() {
    var styleSettings = {transform: 'scale(2)'};
    $(this).css(styleSettings);
  });

  $('body').on('mouseout', '.thumbs-up-dancer, .thumbs-down-dancer', function() {
    var styleSettings = {transform: 'scale(1)'};
    $(this).css(styleSettings);
  });
});

// adding a comment for final commit

