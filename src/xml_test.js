

export function getWeather() {
    // fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=d142dda5f5872d98aba1320657efd1e1&units=imperial&mode=xml')
    //     .then((response) => response.text())
    //     .then(body => {
    //         let xhr = new DOMParser();
    //         let document = xhr.parseFromString(body, 'text/xml')
    //         let elements = document.querySelectorAll('temperature, humidity, speed')
    //         for( let i = 0 ; i < elements.length; i++) {
    //             console.log(elements[i].getAttribute("value"))
    //         }

    //     })

    // let xhr = new XMLHttpRequest();
    
    // xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=d142dda5f5872d98aba1320657efd1e1&units=imperial&mode=xml', true)

    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4) {
    //         let res = xhr.response
    //         let par = new DOMParser();
    //         let document = par.parseFromString(res, 'text/xml')
    //         // console.log(document)
    //         let elements = document.querySelectorAll('temperature, humidity, speed')
    //         for( let i = 0 ; i < elements.length; i++) {
    //             console.log(elements[i].getAttribute("value"))
    //         }
    //     }
    // }

    // xhr.send();

}


// function showWeather(desc, temp) {
//     let elements = document.getElementsByClassName("weather-display")
//     let temperature = temp.toFixed(0);
//     let description = 
//         desc.split(' ')
//             .map( word => {
//                 return word[0].toUpperCase() + word.slice(1).toLowerCase()
//             })
//             .join(' ');

//     Array.from(elements).forEach( (ele) => {
//         ele.innerHTML = '' + description + ', ' + temperature + '°F';
//     })
// }




// export function getToday() {
//     let today = new Date();

//     let dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November ', 'December']

//     let dayName = dayNames[today.getDay()];
//     let monthName = monthNames[today.getMonth()];
//     let day = today.getDate();
//     let year = today.getFullYear();
//     let elements = document.getElementsByClassName("date-display")

//     Array.from(elements).forEach( (ele) => {
//         ele.innerHTML = '' + dayName + ', ' + monthName + ' ' + day + ', ' + year;
//     })
// }