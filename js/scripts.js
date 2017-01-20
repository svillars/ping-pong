//User Interface Logic ===========================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var num = $("input").val();
    pingPong(num);
    $(".output").text(final);
  })
})

//Business Logic =================================
function pingPong(num) {
  var output = [];
  for(i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
    final = output.join(', ');
  }
}
