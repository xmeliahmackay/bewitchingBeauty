var name = $("#name").val();


$(document).ready(function() {
  $("form#apt").submit(function(event) { 
    var what = $("#lash option:selected").text();
    var cost = $("#lash").val();
    var name = $("#name").val();
    var apt = $("#day").val();
    alert((name) + " you have booked your " + (what) + " on " + apt);
    alert("Your " + what + " will be $" + cost);
  });
<<<<<<< HEAD
}); 
=======

});
>>>>>>> master
