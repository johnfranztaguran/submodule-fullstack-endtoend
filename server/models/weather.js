const request = require('request-promise');

const API_KEY = 'dfe3f3fc41747d3fe68076f3585a0340';

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then(res => {
      callback(res);
    }).catch(err => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Weather;