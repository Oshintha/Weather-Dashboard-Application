document.getElementById('search-button').addEventListener('click', async function(){

    // Get the input from the input field
    const inputElement = document.getElementById('search-input')
    const cityName = inputElement.value.trim();
    //console.log(cityName);


   if(cityName){
        // Step:3 Fetch the GPT assistance reponse and show the reponse in the chatbx
        fetchWeatherResponse(cityName);
        inputElement.value = '';
    }

})

async function fetchWeatherResponse (cityName){
    const apiKey = 'd03782e0fc12a19cf8fc2c8d9f5e40b7';

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (cityName === undefined)
        console.log("Enter correct City");
    else{
        
        document.getElementById('city-name').innerText = `Weather in ${data.name} is`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
   

    }

    }catch (error){
        console.log('Error', error);
    }

}

