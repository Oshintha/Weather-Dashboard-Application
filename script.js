
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

// Create a function to fetch data from the API
async function fetchWeatherResponse (cityName){
    const apiKey = 'd03782e0fc12a19cf8fc2c8d9f5e40b7';

    try{
        // Construct URL for fetching
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // If city is incorrect, clear data and display error message
        if (data.cod === '404'){

        // To clear pervious details
        document.getElementById('city-name').innerText = '';
        document.getElementById('city-weather').innerText = '';
        document.getElementById('temperature').innerText = '';
        document.getElementById('temperature-feelslike').innerText = '';
        document.getElementById('humidity').innerText = '';
        document.getElementById('wind-speed').innerText = '';
        

        // Display error message
           document.getElementById('city-name').innerText = `City is ${data.name}\n Enter a correct Cityname`;
        }
        // If city name is correct, display weather informations
        else{
        document.getElementById('city-name').innerText = `Weather in ${data.name},${data.sys.country}`;
        document.getElementById('city-weather').innerText = data.weather[0].main;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp.toFixed(1)} °C (${((data.main.temp * 9/5) + 32).toFixed(1)} °F)`;
        document.getElementById('temperature-feelslike').innerText = `Feels Like: ${data.main.feels_like.toFixed(1)} °C (${((data.main.feels_like * 9/5) + 32).toFixed(1)} °F)`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    }
    }catch (error){
        // Error handling
        console.log('Error', error);
    }
}
console.log(Boolean(10>9));