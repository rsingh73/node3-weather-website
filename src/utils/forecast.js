const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ec86455bf666fc6d26fd60d92840137e&query=" +
    lat +
    "," +
    long +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temp =
        body.current.weather_descriptions[0] +
        " .It is currently " +
        body.current.temperature +
        " degrees out. It feels like " +
        body.current.feelslike;

      callback(undefined, temp);
    }
  });
};

module.exports = forecast;
