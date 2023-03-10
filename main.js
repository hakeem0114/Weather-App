//1000 request limit from OpenWeather

const weather = {  //Weather Object literal
        "apiKey": "393889fc2f3fe20f9b4e934b6d731e6f",

        fetchWeather: function(city){
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            )
            .then((response)=> response.json()) //Promise:then(). Waits till url data is fetched
            .then((data)=> this.displayWeather(data)); //Check if Fetch pull worked & filter data using displayWeather()
        },

        //Filter out data    
        displayWeather: function(data){ //Refer to openWeather docs to access proper names key:value pairs
            const{name} = data; //Object destructuring to get property out of object. Same as "cont name = data.name"
            const {icon, description} = data.weather[0]; //Icon & description was in the 0th index of the weather array.
            const {temp, humidity} = data.main;
            const {speed} = data.wind;

            //Display to DOM
            document.querySelector(".city").innerHTML = `${name}'s Weather is`;
            document.querySelector(".temp").textContent = `${temp}°C`
            document.querySelector(".icon").src =  `https://openweathermap.org/img/wn/${icon}.png` 
            document.querySelector(".description").textContent = description;
            document.querySelector(".humidity").textContent = `${humidity} %`;
            document.querySelector(".wind").textContent = `${speed} km/hr`;

            //Change Image Based on City
            document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?"${name}')`;
        },

        //Gets user input & gets weather
        search: function(){
            let userVal = document.querySelector(".search-bar").value;
            this.fetchWeather(userVal);

        }
}

//Search Functionality
document.querySelector("button").addEventListener("click",()=>{ 
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",(e)=>{ //Keyup takes the keyboard's input in"key"
    (e.key == "Enter")? weather.search() : "";
});

//Initial Page Load
weather.fetchWeather("Toronto");