const apiKey = 'YOUR_API_KEY_HERE'; // <-- Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        document.getElementById('weatherResult').innerHTML = '<div class="error">Please enter a city name.</div>';
        return;
    }
    getWeather(city);
});

// Allow Enter key to search
document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('getWeatherBtn').click();
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const resultDiv = document.getElementById('weatherResult');
    
    resultDiv.innerHTML = '<div class="loading"></div> Loading weather data...';
    
    console.log('Fetching weather for:', city);
    console.log('API URL:', url);
    
    fetch(url)
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            
            if (!response.ok) {
                return response.json().then(errorData => {
                    console.log('Error data:', errorData);
                    throw new Error(`API Error: ${errorData.message || 'Unknown error'}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data);
            displayWeather(data);
        })
        .catch(err => {
            console.error('Error:', err);
            resultDiv.innerHTML = `<div class="error">❌ Error: ${err.message}</div>`;
        });
}

function displayWeather(data) {
    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;
    
    // Get weather icon emoji
    const weatherIcon = getWeatherIcon(weather.id);
    
    const weatherHTML = `
        <div class="weather-info success">
            <div class="weather-icon">${weatherIcon}</div>
            <strong>${data.name}, ${data.sys.country}</strong>
            <div class="temp-highlight">${Math.round(main.temp)}°C</div>
            <div style="font-size: 1.2em; margin: 10px 0; color: #4a5568;">${weather.description}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                <div>
                    <strong style="color: #667eea;">Feels like:</strong><br>
                    ${Math.round(main.feels_like)}°C
                </div>
                <div>
                    <strong style="color: #667eea;">Humidity:</strong><br>
                    ${main.humidity}%
                </div>
                <div>
                    <strong style="color: #667eea;">Wind:</strong><br>
                    ${Math.round(wind.speed)} m/s
                </div>
                <div>
                    <strong style="color: #667eea;">Pressure:</strong><br>
                    ${main.pressure} hPa
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('weatherResult').innerHTML = weatherHTML;
}

function getWeatherIcon(weatherId) {
    // Map weather codes to emoji icons
    if (weatherId >= 200 && weatherId < 300) return '⛈️'; // Thunderstorm
    if (weatherId >= 300 && weatherId < 400) return '🌧️'; // Drizzle
    if (weatherId >= 500 && weatherId < 600) return '🌧️'; // Rain
    if (weatherId >= 600 && weatherId < 700) return '❄️'; // Snow
    if (weatherId >= 700 && weatherId < 800) return '��️'; // Atmosphere (fog, mist)
    if (weatherId === 800) return '☀️'; // Clear
    if (weatherId === 801) return '🌤️'; // Few clouds
    if (weatherId === 802) return '⛅'; // Scattered clouds
    if (weatherId >= 803 && weatherId < 900) return '☁️'; // Cloudy
    return '🌤️'; // Default
} 