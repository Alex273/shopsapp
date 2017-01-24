
  
$("#container").sortable({
  update: function(e, ui) {
    $("#container div").each(function(i, elm) {
      $elm = $(elm); // cache the jquery object
      $elm.attr("id", $elm.index("#container div"));         
    });
  }
});

