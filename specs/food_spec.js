var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe('Food', function(){
  it("has a name and replenishment factor", function(){
    var food = new Food("Banana", 5);
    assert.equal("Banana", food.name);
    assert.equal(5, food.rfactor);
  });

});