//user interface logic ===========================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var num = $("input").val();
    pingPong(num);
    $(".output").text(output);
  })
})

//Business logic =================================
var output = [];
function pingPong(num) {
  for(i = 1; i <= num; i++) {
    //if (num % 15 === 0) {
    output.push(i);
    }
    console.log(num);
    console.log(output);
    output.join(',');
  //}
}
