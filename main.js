//1000 request limit from OpenWeather

const weather = { 
        "apiKey": "393889fc2f3fe20f9b4e934b6d731e6f",

        fetchWeather: function(city){
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            )
            .then((response)=> response.json()) //Promise: then() for once url is fetched
            .then((data)=> console.log(data)); //Check if Fetch pull worked
        },

        displayWeather: function(data){

        }
}