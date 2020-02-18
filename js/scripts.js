var name = $("#name").val();


$(document).ready(function() {
  $("form#apt").submit(function(event) { 
    var name = $("#name").val();
    alert((name) + " you have booked your first appointment!");
  });
}); 