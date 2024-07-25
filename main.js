document.addEventListener('DOMContentLoaded', (event) => {
    // Random Dog Generator
    const dogButton = document.getElementById('dogButton');
    const dogImage = document.getElementById('dogImage');
    dogButton.addEventListener('click', () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dogImage.src = data.message;
            })
            .catch(error => console.error('Error fetching dog image:', error));
    });


    // Weather App
    const weatherButton = document.getElementById('weatherButton');
    const cityInput = document.getElementById('cityInput');
    const temperatureElement = document.getElementById('temperature');
    const windElement = document.getElementById('wind');
    const descriptionElement = document.getElementById('description');
    weatherButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetch(`https://goweather.herokuapp.com/weather/${city}`)
                .then(response => response.json())
                .then(data => {
                    temperatureElement.textContent = `Temperature: ${data.temperature}`;
                    windElement.textContent = `Wind: ${data.wind}`;
                    descriptionElement.textContent = `Description: ${data.description}`;
                })
                .catch(error => console.error('Error fetching weather data:', error));
        } else {
            alert('Please enter a city');
        }
    });
});