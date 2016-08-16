$(document).ready(function() {
  var flavors = ["vanilla","mint","chocolate","strawberry"];
  for (var i=0; i< 4; i+=1) {
    $("ol").append("<li>" + flavors[i] + "</li>");
  };
});


  // var li_ids = ["#flavor1", "#flavor2", "#flavor3", "#flavor4"];
// flavors.forEach(function(flavor){
//   $(li_ids[i]).text(flavor);
//   i++;
