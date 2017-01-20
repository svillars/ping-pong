//User Interface Logic ===========================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var num = $("input").val();
    pingPong(num);
    $(".output").text(output);
  })
})

//Business Logic =================================
var output = [];
function pingPong(num) {
  for(i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
        output.push("ping");
    } else {
        output.push(i);
    }

        console.log(num);
        console.log(output);
        output.join(',');
  }
}
