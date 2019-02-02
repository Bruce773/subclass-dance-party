var makeFish = function(top, left) {
  // makeBlinky
  makeDancer.call(this, top, left);
  this.$node = $(
    '<div class="ui-widget-content" id="drag"><img class="fish-icon" src="src/nemo.gif"></div>'
  );
  // this.summonFish(top, left);
  // this.swim(top);
  let randomPosition = {
    position: 'absolute',
    top: top,
    left: left
  };
  this.$node.css(randomPosition);
  this.swim();
};
// makeFish.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
// }
makeFish.prototype = Object.create(makeDancer.prototype);
makeFish.prototype.constructor = makeFish;

makeFish.prototype.summonFish = function(top, left) {
  // where it belongs on the page. See http://api.jquery.com/css/
  this.setPosition(top, left);
};

makeFish.prototype.swim = function() {
  var counter = this.left;
  // var $$node = this.$node;
  let swimRight = (indicator) => {
    if (indicator < window.innerWidth) {
      indicator++;
      // makeDancer.prototype.setPosition.call(this,top, indicator);
      makeDancer.prototype.setPosition.bind(top, indicator);
      setTimeout(swimRight(), 1000);
    } else {
      // setTimeout(swimLeft(),1000);
    }
  };
  let swimLeft = (indicator) => {
    if (indicator > 0) {
      indicator--;
      // makeDancer.prototype.setPosition.call(this,top, indicator);
      makeDancer.prototype.setPosition(top, indicator);
      setTimeout(swimLeft(), 1000);
    } else {
      setTimeout(swimRight(), 1000);
    }
  };
  swimRight(counter);
};

/*
make fish drops a fish from the top of the aquarium and it 'falls' down to
the center

switch class on edge //make fish face different direction when making
contact with the wall

make fish move from left to right and right to left

utilize inner height/inner width
*/
