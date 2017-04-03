$(document).ready(function() {
    // when user click submit button
    $('#submit_button').click(function() {
      var keyword = document.getElementById("Keyword").value;
      var location = document.getElementById("Location").value;
      Materialize.toast(location, 2000);

      $.get("https://api.yelp.com/v3/businesses/search?term=food&location=california");
    });
});
