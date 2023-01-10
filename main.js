// DATE
window.onload = displayClock();
window.onload = greeting();


function toggleTooltip(){
    document.getElementById("searchbar-tooltip").classList.toggle("searchbar-tooltip-open")
}




function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date();
	var mm = monthNames[date.getMonth()];
	var dd = date.getDate();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    //make it coo/
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;

	setTimeout(displayClock, 500);
    return
}


// GREETING 
function greeting(){
        const greetings = {
                // Greetings
                Morning: 'Good morning!',
                Afternoon: 'Good afternoon,',
                Evening: 'Good evening,',
                Night: 'Night Begins...',
        }

        const gree1 = `${greetings.Night}\xa0`;
        const gree2 = `${greetings.Morning}\xa0`;
        const gree3 = `${greetings.Afternoon}\xa0`;
        const gree4 = `${greetings.Evening}\xa0`;


        //TIME
        const time = new Date();
        const hours = time.getHours();
        const name = " Pussy";

        // select which greeting to display
        if (hours >= 23 || hours < 5) {
            document.getElementById('greetings').innerText = gree1 + name;
        } else if (hours >= 6 && hours < 12) {
            document.getElementById('greetings').innerText = gree2 + name;
        } else if (hours >= 12 && hours < 17) {
            document.getElementById('greetings').innerText = gree3 + name;
        } else {
            document.getElementById('greetings').innerText = gree4 + name;
        }

        setTimeout(greeting, 9999);
}


const locationElement = document.getElementById('location')
const tempElement = document.getElementById('temperature')
const iconElement = document.getElementById('weatherIcon')
const descriptionElement = document.getElementById('description')
const windSpeedElement = document.getElementById('windSpeed')
const windDirectionElement = document.getElementById('windDirection')

function getWeather() {

let url = 'https://api.weatherapi.com/v1/current.json?key=b9f3b87fd5e644a88dc150433222607&q=Hämeenlinna&aqi=no';
//https://www.weatherapi.com/
fetch(url).then(function(response) {
    let data = response.json();
    return data;
}).then(


function displayWeather(data) {
    locationElement.innerHTML = data.location.name;
    tempElement.innerHTML = `${data.current.temp_c}°C`;
    descriptionElement.innerHTML = data.current.condition.text;
    windSpeedElement.innerHTML = `${data.current.wind_kph} km/h `;
    windDirectionElement.innerHTML = data.current.wind_dir;
//   console.log(data.current) // Console log all the current data
})}

getWeather()

