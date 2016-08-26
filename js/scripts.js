//Business logic
function pingPong(number) {
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
  };
  return message;
};
//UI logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    $("#playPong").hide();
    var arrNumber = $("#digits")
    var number = pingPong($(arrNumber).val());
    for (var i = 0; i < message.length; i++){
      $("#playPong").append("<li>" + message[i] + "</li>");
      };
    $("#playPong").slideDown();

    event.preventDefault();
  });
});
