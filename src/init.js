$(document).ready(function () {
  window.dancers = [];
  window.schoolOfFish = [];
  window.sharks = [];

  $('.addDancerButton').on('click', function (event) {
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
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addFishButton').on('click', function (event) {
    console.log('add fish ran')
    var makeFishName = $(this).data('create-fish');
    var makeFishFunc = window[makeFishName];
    var fish = new makeFishFunc(
      $('body').height() * Math.random(),
      $('body').width() * Math.random()
    );
    window.schoolOfFish.push(fish);
    $('body').append(fish.$node);
  });
  $('.addSharkButton').on('click', function (event) {
    console.log('add Shark ran')
    var makeSharkName = $(this).data('create-shark');
    var makeSharkFunc = window[makeSharkName];
    var shark = new makeSharkFunc(
      $('body').height() * Math.random(),
      $('body').width() * Math.random()
    );
    window.sharks.push(shark);
    $('body').append(shark.$node);
  });

  $('.lineUp').on('click', function (event) {
    console.log('lineUp ran');
    let distanceBetweenEachCounter = 0;
    // iterate over schoolOfFish and sharks
    window.schoolOfFish.forEach(function (item) {
      item.setPosition(window.innerHeight / 10, distanceBetweenEachCounter);
      distanceBetweenEachCounter += 40;
    })
    window.sharks.forEach(function (item) {
      item.setPosition(window.innerHeight / 10, distanceBetweenEachCounter);
      distanceBetweenEachCounter += 40;
    });
  });

  $('.faceOff').on('click', function (event) {
    console.log('faceOff ran');
    let faceOffFish = 0;
    let faceOffShark = 0;
    window.schoolOfFish.forEach(function (item) {
      item.setPosition(faceOffFish + 100, window.innerHeight / 10);
      faceOffFish += 45;
    });
    window.sharks.forEach(function (item) {
      item.setPosition(faceOffShark + 100, window.innerHeight * 1.8);
      faceOffShark += 45;
    });
  });
  // $('.shark-icon').on('mouseover', function (event) {
  //   $('.shark-icon').css('height', '120px', 'width', '120px');
  // });
  $('.findPartner').on('click', function(event) {
    console.log('find parter ran')
    for(let i = 0; i < window.schoolOfFish.length; i++) {
      if (window.sharks[i]) {
        var fishTop = $(window.schoolOfFish[i].$node).css("top");
        var fishLeft = $(window.schoolOfFish[i].$node).css("left");
        console.log(fishTop, fishLeft);
        window.sharks[i].setPosition(fishTop, fishLeft);
        // window.sharks[i].hasPartner = true;
        // window.schoolOfFish[i].hasPartner = true;
      } else {
        break;
      }
    }
    
  });
  
});
