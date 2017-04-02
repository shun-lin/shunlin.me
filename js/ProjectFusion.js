$(document).ready(function() {
    $('#submit_button').click(function() {
      var keyword = document.getElementById("Keyword").value;
      var location = document.getElementById("Location").value;
      Materialize.toast(location, 2000);
    });
});
