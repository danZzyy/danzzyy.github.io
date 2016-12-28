var dates = [
  {city: "Baltimore", state: "MD", date: new Date("January 9, 2017"), zip: '21117'},
  {city: "New Brunswick", state: "NJ", date: new Date("Janaury 10, 2017"), zip: 08901},
  {city: "Uniondale", state: "NY", date: new Date("January 11, 2017"), zip: 11553},
  {city: "New York", state: "NY", date: new Date("January 12, 2017"), zip: 10001},
  {city: "Providence", state: "RI", date: new Date("January 13, 2017"), zip: 02901},
  {city: "Burlington", state: "VT", date: new Date("January 14, 2017"), zip: 05401},
  {city: "Easthampton", state: "MA", date: new Date("January 15, 2017"), zip: 01027},
  {city: "West Haven", state: "CT", date: new Date("January 16, 2017"), zip: 06516},
  {city: "Brooklyn", state: "NY", date: new Date("January 17, 2017"), zip: 11223},
  {city: "Philadelphia", state: "PA", date: new Date("January 18, 2017"), zip: 1901},
  {city: "Richmond", state: "VA", date: new Date("January 19, 2017"), zip: 23218},
  {city: "Blacksburg", state: "VA", date: new Date("January 20, 2017"), zip: 24060},
  {city: "College Park", state: "MD", date: new Date("January 21, 2017"), zip: 20740 },
];

var testDates = [
  {city: "Baltimore", state: "MD", date: new Date("December 28, 2016 "), zip: '21117', woeid: "2358820"},
  {city: "New Brunswick", state: "NJ", date: new Date("December 29, 2016"), zip: '08901', woeid: "2458101"},
  {city: "Uniondale", state: "NY", date: new Date("December 30, 2016"), zip: '11553', woeid:  "2509941"},
  {city: "New York", state: "NY", date: new Date("December 31, 2016"), zip: '10001', woeid: "2459115"},
  {city: "Providence", state: "RI", date: new Date("January 1, 2017"), zip: '02901', woeid: "2477058"}
]
var TEST = true;

var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var startForecast = 0;
if(TEST){
  dates = testDates;
}
else{
  if(year == 2017 && month == 0 && day >= 9 && day <= 17){
    //live update
    startForecast = day - 9; //offset of first day

  }
  else{
    startForecast = 8;

  }
}

function formatDate(inDate){
  return $.format.date(inDate, "ddd MMMM D yyyy");
}

$(document).ready(function() {
  $.simpleWeather({
    woeid: dates[startForecast].woeid,
    unit: 'f',
    success: function(weather) {
      html = '<p>'+formatDate(dates[startForecast].date)+'</p>';
      html += '<h2>'+weather.forecast[startForecast].high+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.forecast[startForecast].text+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

      $("#day1").html(html);
    },
    error: function(error) {
      $("#day1").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    woeid: dates[startForecast+1].woeid,
    unit: 'f',
    success: function(weather) {
      html = '<p>'+formatDate(dates[startForecast+1].date)+'</p>';
      html += '<h2>'+weather.forecast[startForecast+1].high+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.forecast[startForecast+1].text+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

      $("#day2").html(html);
    },
    error: function(error) {
      $("#day2").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    woeid: dates[startForecast+2].woeid,
    unit: 'f',
    success: function(weather) {
      html = '<p>'+formatDate(dates[startForecast+2].date)+'</p>';
      html += '<h2>'+weather.forecast[startForecast+2].high+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.forecast[startForecast+2].text+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      $("#day3").html(html);
    },
    error: function(error) {
      $("#day3").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    woeid: dates[startForecast+3].woeid,
    unit: 'f',
    success: function(weather) {
      html = '<p>'+formatDate(dates[startForecast+3].date)+'</p>';
      html += '<h2>'+weather.forecast[startForecast+3].high+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.forecast[startForecast+3].text+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

      $("#day4").html(html);
    },
    error: function(error) {
      $("#day4").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    woeid: dates[startForecast+4].woeid,
    unit: 'f',
    success: function(weather) {
      html = '<p>'+formatDate(dates[startForecast+4].date)+'</p>';
      html += '<h2>'+weather.forecast[startForecast+4].high+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.forecast[startForecast+4].text+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

      $("#day5").html(html);
    },
    error: function(error) {
      $("#day5").html('<p>'+error+'</p>');
    }
  });
});
