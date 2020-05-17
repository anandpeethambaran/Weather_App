const request = require('postman-request');



const url = "http://api.weatherstack.com/current?access_key=69b7de896864a71546caba156130aaa6&query=10.9760,76.2254";

const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Perintalmanna.json?access_token=pk.eyJ1IjoiYW5hbmR0cCIsImEiOiJja2FhdDNqa3YwZm9iMnFwOWNrcmlqaHJiIn0.i84YbKCiqF8Az_wG7rCxEg&limit=1";


request({ url: url, json: true }, (error, response) => {

    console.log("Current Weather description : " + response.body.current.weather_descriptions[0]);

    console.log("It is currently " + response.body.current.temperature + " degrees out. ");

    console.log("It feels like " + response.body.current.precip + "% chance to rain. ");

    console.log("It feels like " + response.body.current.feelslike + " degrees out ");
    // if (!error) {
    //     const data = JSON.parse(response.body);
    //     console.log(data.current);
    // }
    // else {
    //     console.log("Error in accessing the url");
    // }
});

request({ url: url1, json: true }, (error, response) => {
    console.log("Latitude = "+response.body.features[0].geometry.coordinates[0]);
    console.log("Longitude = "+response.body.features[0].geometry.coordinates[1]);
})