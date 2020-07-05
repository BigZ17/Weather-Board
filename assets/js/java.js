function cityOutput () {
    var searchTerm = document.querySelector("#searchTerm").value;
    //format the weather app api url
    var cityId = document.querySelector("#cityId");

    fetch (
        "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily" +
        searchTerm +
        "#cityId" +
        cityId +
        "&appid=00f364721c3c88adc95bd446bfd8b6cf"
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var responseContainerEl = document.querySelector("#response-container");
        responseContainerEl.innerHTML = '';
    })
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
        nameInputEL.value === "";
    }
    else {
        alert("Incorrect city")
    }
    console.log(event);
};

cityFormEL.addEventListener("submit", formSubmitHandler)

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=00f364721c3c88adc95bd446bfd8b6cf")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    var responseContainerEl = document.querySelector("#response-container");
    responseContainerEl.innerHTML = '';
})

// Displays weather
var displayWeather = function(data, city) {
    console.log(data);
    console.log(city);
    response.json().then(function(data) {
        displayWeather(data, city)
    })
};
