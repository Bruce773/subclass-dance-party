var makeShark = function(top, left) {
  makeDancer.call(this, top, left);
  this.$node = $(
    '<div class="ui-widget-content" id="drag"><img class="shark-icon" src="src/biteShark.gif"></div>'
  );
  let randomPosition = {
    position: 'absolute',
    top: top,
    left: left
  };
  this.$node.css(randomPosition);
  this.swim();
};
makeShark.prototype = Object.create(makeDancer.prototype);
makeShark.prototype.constructor = makeShark;
makeShark.prototype.summonFish = function(top, left) {
  this.setPosition(top, left);
};

makeShark.prototype.swim = function() {
  var counter = this.left;
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
<<<<<<< HEAD
};
=======
}
>>>>>>> subclass/master
