var Rat = function(){

}

Rat.prototype = {

  touchFood: function(food){
    food.rfactor = food.rfactor * -1;
  }
}

module.exports = Rat;