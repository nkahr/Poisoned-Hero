var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe('Hero', function(){
  it("has a name and fav food", function(){
    var hero = new Hero("Nina", "Burrito");
    assert.equal("Nina", hero.name);
    assert.equal("Burrito", hero.favouriteFood);
  });

  it("can say its own name", function(){
    var hero = new Hero("Nina", "Burrito");
    assert.equal("My name is Nina", hero.sayName());
  });

  it("should be able to eat food which should increase health", function() {
    var hero = new Hero("Nina", "Burrito");
    hero.health = 50;
    var food = new Food("Banana", 5);
    hero.eatFood(food);
    assert.equal(55, hero.health);
  });

  it("fav food restores 1.5 x normal health", function() {
    var hero = new Hero("Nina", "Burrito");
    hero.health = 50;
    var favFood = new Food("Burrito", 20);
    hero.eatFood(favFood);
    assert.equal(80, hero.health);
  })
});