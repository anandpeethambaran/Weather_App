const request = require('postman-request');



const url = "http://api.weatherstack.com/current?access_key=69b7de896864a71546caba156130aaa6&query=11.0510,76.0711";


request(url,(error,response)=>{
    if(!error){
        const data = JSON.parse(response.body);
        console.log(data.current);
    }
    else{
        console.log("Error in accessing the url");
    }
})