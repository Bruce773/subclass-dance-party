var makeFish = function(top, left, timeBetweenSteps){
  // makeBlinky
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fish"></span>');
  this.step();
  this.setPosition(left, right);
}

makeFish.prototype = Object.create(makeBlinkyDancer.prototype);
makeFish.prototype.constructor = makeFish;

makeFish.prototype.swim = function(){
  makeDancer.prototype.step();
}

/*
make fish drops a fish from the top of the aquarium and it 'falls' down to
the center

switch class on edge //make fish face different direction when making
contact with the wall

make fish move from left to right and right to left

utilize inner height/inner width
*/