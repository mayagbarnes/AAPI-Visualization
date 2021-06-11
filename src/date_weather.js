
export function getToday() {
    let today = new Date();

    let dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November ', 'December']

    let dayName = dayNames[today.getDay()];
    let monthName = monthNames[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();
    let elements = document.getElementsByClassName("date-display")

    Array.from(elements).forEach( (ele) => {
        ele.innerHTML = '' + dayName + ', ' + monthName + ' ' + day + ', ' + year;
    })
}

export function getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=d142dda5f5872d98aba1320657efd1e1&units=imperial')
        .then((response) => response.json())
        .then(data => showWeather(data.weather[0].main, data.weather[0].description, data.main.temp));    
}

function showWeather(status, desc, temp) {
    let icon = chooseIcon(status, desc);

    let elements = document.getElementsByClassName("weather-display")
    let temperature = temp.toFixed(0);
    let description = 
        desc.split(' ')
            .map( word => {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            })
            .join(' ');

    Array.from(elements).forEach( (ele) => {
        ele.append(icon, '' + description + ', ' + temperature + '°F');
    })
}


function chooseIcon(status, desc) {
    let icon = document.createElement('div');
    icon.classList.add("weather-icon");

    switch (status) {
        case "Clear":
            icon.textContent = '☀️'
            break;
        case "Thunderstorm":
            icon.textContent = '⚡️'
            break;
        case "Drizzle":
            icon.textContent = '🌦'
            break;
        case "Rain":
            icon.textContent = '🌧'
            break;
        case "Snow":
            icon.textContent = '❄️'
            break;
        case "Clouds":
            if(desc.includes('few')) {
                icon.textContent = '🌤';
            } else if(desc.includes('scattered')) {
                icon.textContent = '⛅️';
            } else if(desc.includes('broken')) {
                icon.textContent = '🌥';
            } else {
                icon.textContent = '☁️'
            }
            break;
        default:
            icon.textContent = '';
    }

    return icon;
}