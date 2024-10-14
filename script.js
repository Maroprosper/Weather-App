const API_KEY = 'TUALBXLT3JK8LA4EVUGWXFB59';
async function getWeather(location) {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`);
        const weatherData = await response.json(); // Parsing response as JSON
        processData(weatherData)
}
const handleClick = async function () {
    const locationInput = document.querySelector('input').value;
    const data = await getWeather(locationInput);
    document.querySelector('input').value = ''; // Clear input field after submission

}
const processData =  function (data) {
    const object =  data;
    const weather = {
        icon: object.currentConditions.icon,
        humidity: object.currentConditions.humidity,
        cloudcover: object.currentConditions.cloudcover,
        conditions: object.currentConditions.conditions,
        precipitation: object.currentConditions.precip,
        pressure: object.currentConditions.pressure,
        temperature: object.currentConditions.temp,
        visibility: object.currentConditions.visibility,
        windDirection: object.currentConditions.winddir,
        windSpeed: object.currentConditions.windspeed,
        description: object.description,
        latitude: object.latitude,
        longitude: object.longitude,
        location: object.resolvedAddress
    }
    displayData(weather);
}

const displayData = (weather) => {
    document.querySelector('.weather-info h2').textContent = weather.conditions;
    document.querySelector('.temperature').textContent = `${weather.temperature}°C`;
    document.querySelector('.weather-icon img').src = determineIcon(weather.icon);
    document.querySelector('.details').innerHTML = `Location: ${weather.location}, Latitude: ${weather.latitude}, Longitude: ${weather.longitude}  </br>\n
    ${weather.description} </br> \n 
    Cloud Cover: ${weather.cloudcover}%, Humidity: ${weather.humidity}%, Precipitation: ${weather.precipitation}MM, </br> \n
    Pressure: ${weather.pressure} hPa, Visibility: ${weather.visibility} km </br> \n
    Wind direction: ${weather.windDirection}, Wind Speed: ${weather.windSpeed} km/h`;
}

const determineIcon = (icon) => {
    switch(icon) {
        case 'snow':
            return './icons/snow.png';
        break;
        case 'rain':
            return './icons/rain.png';
        break;
        case 'fog':
            return './icons/fog.png';
        break;
        case 'wind':
            return './icons/wind.png';
        break;
        case 'cloudy':
            return './icons/cloudy.png';
        break;
        case 'partly-cloudy-day':
            return './icons/partly-cloudy-day.png';
        break;
        case 'partly-cloudy-night':
            return './icons/partly-cloudy-night.png';
        break;
        case 'clear-day':
            return './icons/clear-day.png';
        break;
        case 'clear-night':
            return './icons/clear-night.png';
        break;
        default:
            return './icons/clear-sky.png';
    }
}
document.querySelector('button').addEventListener('click', handleClick);





