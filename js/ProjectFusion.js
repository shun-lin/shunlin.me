$(document).ready(function() {
    // when user click submit button
    $('#submit_button').click(function() {
      var keyword = document.getElementById("Keyword").value;
      var location = document.getElementById("Location").value;
      Materialize.toast(location, 2000);

      const yelp = require('yelp-fusion');

      // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
      // from https://www.yelp.com/developers/v3/manage_app
      const clientId = '2IgSnM3YqSy-IM_wEOGUDg';
      const clientSecret = '0NTkwPpJsDttcXBLoRRowXz1g9VA4iJtX1I8RiNs1dMfRA1GbrmVGBxQrffTq99Y';

      const searchRequest = {
        term:'Four Barrel Coffee',
        location: 'san francisco, ca'
      };

      yelp.accessToken(clientId, clientSecret).then(response => {
          const client = yelp.client(response.jsonBody.access_token);

          client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
        });
      }).catch(e => {
        console.log(e);
      });


    });
});
