
// add event listener to search button
document.getElementById('search-button').addEventListener('click', async function(){

    // Get the input from the input field
    const inputElement = document.getElementById('search-input')
    const cityName = inputElement.value.trim();

   // If city is having a value
    if(cityName){
        // Fetch the weather reponse
        fetchWeatherResponse(cityName);
        // Clear input field after fetching
        inputElement.value = '';
    }
})


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('unit-button');
    toggleButton.addEventListener('click', function() {
        toggleTemperatureUnits();
    });
});
/*
let isCelsius = true; // Flag to track current temperature unit

function toggleTemperatureUnits() {
    isCelsius = !isCelsius; // Toggle the temperature unit flag

    // Update temperature display
    const temperatureElement = document.getElementById('temperature');
    const temperature = parseFloat(temperatureElement.dataset.temperature); // Get the temperature value
    if (isCelsius) {
        // Convert temperature to Celsius
        temperatureElement.innerText = `Temperature: ${temperature} °C`;
    } else {
        // Convert temperature to Fahrenheit
        const fahrenheit = (temperature * 9/5) + 32;
        temperatureElement.innerText = `Temperature: ${fahrenheit.toFixed(2)} °F`;
    }
}
*/


// Create a function to fetch data from the API
async function fetchWeatherResponse (cityName){
    const apiKey = 'd03782e0fc12a19cf8fc2c8d9f5e40b7';

    try{
        // Construct URL for fetching
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // If city is incorrect, display error message
        if (data.cod === '404'){
           document.getElementById('city-name').innerText = `City is ${data.name}\n Enter a correct Cityname`;
        }
        // If city name is correct, display weather informations
        else{
        document.getElementById('city-name').innerText = `Weather in ${data.name},${data.sys.country}`;
        document.getElementById('city-weather').innerText = data.weather[0].main;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C \n(Feels Like: ${data.main.feels_like} °C)`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    }
    }catch (error){
        // Error handling
        console.log('Error', error);
    }
}

