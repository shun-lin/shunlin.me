$(document).ready(function() {
    // when user click submit button
    $('#submit_button').click(function() {
      var keyword = document.getElementById("Keyword").value;
      var location = document.getElementById("Location").value;
      Materialize.toast(location, 2000);

      $.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
      });

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.yelp.com/v3/businesses/search?term=delis&location=california",
        "method": "GET",
        "headers": {
          "authorization": "Bearer _V_7p2G5Uo_dfJLHJ50dXc7-xlIxSf8_fjn-jyegCmVHfSSu2MMdyVBGmd235kSkpvV0gu753vPVA0K7sftwbnKy6Kl95DRaCWF2EXOcRcpnri1c-H0vNOsVUdzdWHYx",
          "cache-control": "no-cache",
          "postman-token": "31c1e590-1259-94e0-5c58-631a29a2d6e5"
        }
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    });
});
