const request = require('request');
const url = 'https://api.darksky.net/forecast/8b8eab78027ea4da71f5cdd3acad3fe3/37.8267,-122.4233?units=si&lang=nl';

request({url:url, json:true},(error,response) =>
{
 //  console.log(response.body.currently)
 //   const data = JSON.parse(response.body)
 //   console.log(data.currently)
    if (error)
    {
        console.log("Unable to access the url")
    }
    else
    {
        console.log( response.body.daily.data[0].summary+ ", It is  currently "+ response.body.currently.temperature + " degrees and "+ 
    
    response.body.currently.precipProbability + "% chance of rain in location : " + response.body.timezone )
    }
    
});

const searchurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2VudGhhIiwiYSI6ImNqdGg2d2I5cDA4Y3c0M256cmRob3BpNHMifQ.SvzdtXV16D_5cigdZjRvOA'
request({url:searchurl,json: true},(err,resp) => {
   if (err)
   {
    console.log('unable to connect')
   }else{
    console.log(resp.body.features[4].center[0])
    console.log(resp.body.features[4].center[1])
   }
       
}) 