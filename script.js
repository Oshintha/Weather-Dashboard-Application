document.getElementById('search-button').addEventListener('click', function(){

    // Get the input from the input field
    const inputElement = document.getElementById('search-input')
    const cityName = inputElement.value.trim();


   if(cityName){
        //displayMessage(cityName, 'Location');
        // Step:3 Fetch the GPT assistance reponse and show the reponse in the chatbx
        fetchChatResponse(cityName);
        inputElement.value = '';
    }

})


function displayMessage (cityName, sender){
    const chatBox = document.getElementById('search-input')
    
    const msgDiv = document.createElement('div')
    msgDiv.className = `${sender}`
    msgDiv.innerText =  `${sender.toUpperCase()} : ${cityName}`;

    chatBox.appendChild(msgDiv);

}

async function fetchChatResponse (cityName){
    const apiKey = 'd03782e0fc12a19cf8fc2c8d9f5e40b7';

    try{
        const url = 'https://api.openweathermap.org/data/2.5/weather?%20q=${cityName}&appid=${apiKey}&units=metric';
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('city-name').innerText = data.name;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
   


    }catch (error){
        console.log('Error', error);
    }

}

