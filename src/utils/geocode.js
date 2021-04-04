const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmF2aTczMjAxMCIsImEiOiJja210MG0xNjcwZ29tMnhtd2hta3ppc3I5In0.JP2mSt5LjUDPJmhmxpEK2Q&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find loaction, try another search", undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      const location = response.body.features[0].place_name;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = geocode;
