//user logic ===========================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var num = $("input").val();

    $(".output").text(num);
  })
})
