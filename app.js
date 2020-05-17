const request = require('postman-request');



const url = "http://api.weatherstack.com/current?access_key=69b7de896864a71546caba156130aaa6&query=10.9760,76.2254";


request({ url: url, json: true }, (error, response) => {
    console.log("It is currently "+response.body.current.temperature+" degrees out. ");
    
    console.log("It feels like "+response.body.current.precip+"% chance to rain. ");

    console.log("It feels like "+response.body.current.feelslike+" degrees out ");
    // if (!error) {
    //     const data = JSON.parse(response.body);
    //     console.log(data.current);
    // }
    // else {
    //     console.log("Error in accessing the url");
    // }
})