//business logic
var pingPong = function(number) {
var userNumberArray = [];
 for (var index = 1; index <= number; index += 1) {
   if ((index % 3 === 0) && (index % 15 === 0)) {
     userNumberArray.push("pingpong");
   } else if (index % 3 === 0) {
     userNumberArray.push("ping");
   } else if (index % 5 === 0) {
     userNumberArray.push("pong");
   } else {
     userNumberArray.push(index);
   };
 };
 console.log(userNumberArray);
	return userNumberArray;
};

// user interface logic
$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
	  var result = pingPong(number);
    $("#result").text(result);
  });
});
