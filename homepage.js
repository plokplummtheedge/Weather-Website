const weatherUpdatesDiv = document.getElementById('weatherUpdates');

// Replace with your actual API key and endpoint
const apiKey = '9a5bcce8143666a0b654237fd7a7df25';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manila,PH&appid=${apiKey}`;




async function fetchWeatherUpdates() {
    try {
        const response = await fetch(apiUrl);
        const text = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data;
        try {
            data = JSON.parse(text);
        } catch (jsonError) {
            throw new Error(`JSON parsing error: ${jsonError.message}`);
        }

        displayUpdates(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherUpdatesDiv.innerHTML = '<p>Failed to load updates. Please try again later.</p>';
    }
}



function displayUpdates(data) {
    weatherUpdatesDiv.innerHTML = ''; 

    data.updates.forEach(update => {
        const updateDiv = document.createElement('div');
        updateDiv.className = 'update';
        updateDiv.innerHTML = `
            <h3>${update.title}</h3>
            <p>${update.description}</p>
            <p><strong>Published:</strong> ${new Date(update.date).toLocaleString()}</p>
        `;
        weatherUpdatesDiv.appendChild(updateDiv);
    });
}

fetchWeatherUpdates();
