//1000 request limit from OpenWeather

const weather = { 
        "apiKey": "393889fc2f3fe20f9b4e934b6d731e6f",

        fetchWeather: function(city){
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            )
            .then((response)=> response.json()) //Promise:then(). Waits till url data is fetched
            .then((data)=> this.displayWeather(data)); //Check if Fetch pull worked & filter data using displayWeather()
        },

        displayWeather: function(data){ //Refer to openWeather docs to access proper names key:value pairs
            const{name} = data; //Object destructuring to take property of object & assign it to a js parameter to re-use.
            const {icon, description} = data.weather[0]; //Icon & description was in the 0th index of the weather array.
            const {temp, humidity} = data.main;
            const {speed} = data.wind;
            console.log(name, icon, description, temp, humidity,speed );
        }
}