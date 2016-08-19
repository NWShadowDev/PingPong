//<---START--->
//Document is ready
$(document).ready(function() {
//when you click the play button
  $("#play").click(function() {
//establishing variable for user input and changing it from a string to a number
    var yourNumber = parseInt($("#myNumber").val());
//starting at index 1, incrementing by 1 if the index is greater than or equal to your input
    for (i=1; i<=yourNumber; i++) {
//if the input is the number 15, generate numbers starting at index 1 and up to 15, and replace 15 with "ping-pong"
      if (i%15===0) {
        message = "ping-pong";
//if the input is the number 5, generate numbers starting at index 1 and up to 5, and replace 5 with "pong"
      } else if (i%5===0) {
        message = "pong";
//if the input is the number 3, generate numbers starting at index 1 and up to 3, and replace 3 with "ping"
      } else if (i%3===0) {
        message = "ping";
//if the input does not equal 3,5,or 15, display alert asking to enter one of those three inputs <Alert is known bug. See README>
      } else {
        message = alert(" Please Refresh and Enter in a 3, 5, or a 15!");
      }
//Append the results in an empty <ul> and add a <li> for every appended value, and also set font-weight for each value to bold
      $("#pingpong").append("<li><strong>" + message + "</strong></li>");
    }

  });
});
//<---END--->
