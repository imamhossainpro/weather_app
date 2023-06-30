// Event Handler
const cityName = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind =  document.querySelector('.wind');
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box')
const weatherIcon = document.querySelector('.weather-icon')
const weatherBox = document.querySelector('.weather');
const errorMessage = document.querySelector('.error');

//API 
const apiKey = '0f8c88146a435b8db9d6af1cacbbc02a';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

//CheckWeather
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        errorMessage.style.display = 'block';
        weatherBox.style.display = 'none';

    } else {
        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + '°C';
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + 'km/h';

        //Weather Image Changed by weather Condition
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png'
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png'
        }
        //Show Weather Box 
        weatherBox.style.display = 'block';
        errorMessage.style.display = 'none';
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    searchBox.value = ''

})