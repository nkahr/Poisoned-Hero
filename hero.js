var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {

  sayName: function() {
    return "My name is " + this.name;
  }, 

  eatFood: function(food) {
    if(food.name === this.favouriteFood){
      this.health += food.rfactor * 1.5;
    } else {
      this.health += food.rfactor;
    }
  }
}

module.exports = Hero;