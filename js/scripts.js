$(document).ready(function() {
  var flavors = ["vanilla","mint","chocolate","strawberry"];
  var li_ids = ["#flavor1", "#flavor2", "#flavor3", "#flavor4"];
  var i = 0;
    flavors.forEach(function(flavor){
      $(li_ids[i]).text(flavor);
      i++;
    });
});
