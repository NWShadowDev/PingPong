//<---START--->
//Document is ready
$(document).ready(function() {
//when you click the play button
  $("#play").submit(function(playPong) {
    event.preventDefault();
      var yourNumber = parseInt($("#myNumber").val());
        $("#pingpong").append("<li><strong>" + message + "</strong></li>");


//Backend-business logic
function playPong(yourNumber) {
  var message= ("");
    for (i=1; i<=yourNumber; i++) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  }
  return message;
  });
});
//<---END--->
