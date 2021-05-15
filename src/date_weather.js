
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
    fetch('https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=d142dda5f5872d98aba1320657efd1e1&units=imperial')
        .then((response) => response.json())
        .then(data => showWeather(data.weather[0].description, data.main.temp));    
}

function showWeather(desc, temp) {
    let elements = document.getElementsByClassName("weather-display")
    let temperature = temp.toFixed(0);
    let description = 
        desc.split(' ')
            .map( word => {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            })
            .join(' ');

    Array.from(elements).forEach( (ele) => {
        ele.innerHTML = '' + description + ', ' + temperature + '°F';
    })
}