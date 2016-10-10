function Calculator (skinName) {
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(number){
    message = [];
  for (var i = 1; i <= number; i ++) {
    if ((i % 5 === 0)&&(i % 3 === 0)){
      message.push("ping pong");
    } else if (i % 3 === 0){
      message.push("ping");
    } else if (i % 5 === 0){
      message.push("pong");
    }else {
      message.push(i);
    }
  }
  return message;
};

exports.calculatorModule = Calculator;
