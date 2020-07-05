var cityOutput = function (cityName) {
    //format the weather app api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily"+ cityName +"&appid=00f364721c3c88adc95bd446bfd8b6cf";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayWeather(cityId, cityName)
            console.log(data);
        })
    })
   
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=00f364721c3c88adc95bd446bfd8b6cf").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
            console.log("inside",response);
    })
    console.log("outside");
};

var cityFormEL = document.querySelector("#cityName");
var nameInputEL = document.querySelector("#city")

//
var formSubmitHandler = function(event) {
    event.preventDefauly();
    //get value from input element
    var city = nameInputEL.value.trim();

    if(city) {
        cityOutput(city);
        nameInputEL.value == "";
    }
    else {
        alert("Incorrect city")
    }
    console.log(event);
};

cityFormEL.addEventListener("submit", formSubmitHandler)

var response = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=00f364721c3c88adc95bd446bfd8b6cf");
console.log(response);


var displayWeather = function(city, cityName) {
    console.log(city);
    console.log(cityName)
};

// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&amp;appid={your api key}

// var apiURL = 'api.openweathermap.org/data/2.5/weather?id={city id}&appid=00f364721c3c88adc95bd446bfd8b6cf' + searchTerm;

// fetch ('http//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid=00f364721c3c88adc95bd446bfd8b6cf' ) .then(function(response) {
//     return response.json();
//     }).then(function(results) {
//         console.log('results', results)
//     });