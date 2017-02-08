var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe('Rat', function(){
  it('Should be able touch and make food poisonous when touched', function(){
    var rat = new Rat();
    var food = new Food("Banana", 5);
    rat.touchFood(food);
    assert.equal(-5, food.rfactor);
  });
});