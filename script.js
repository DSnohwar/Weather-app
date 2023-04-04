const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8a1a86e39bmsh6cd8b6719cc6c61p131877jsn05c20cee2ab8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    mycity.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            Cloud_pct.innerHTML = response.cloud_pct
            Temp.innerHTML = response.temp
            temperature.innerHTML = response.temp
            Feels_like.innerHTML = response.feels_like
            Humidity.innerHTML = response.humidity
            humid.innerHTML = response.humidity
            Min_temp.innerHTML = response.min_temp
            Max_temp.innerHTML = response.max_temp
            Wind_speed.innerHTML = parseInt(response.wind_speed) * 3.6
            Windspeed.innerHTML = parseInt(response.wind_speed) * 3.6
            Wind_degrees.innerHTML = response.wind_degrees
            Sunrise.innerHTML = response.sunrise
            Sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    getWeather(city.value);
})
Mumbai.addEventListener("click", (e) => {
    getWeather("Mumbai");
})
Seoul.addEventListener("click", (e) => {
    getWeather("Seoul");
})
Tokyo.addEventListener("click", (e) => {
    getWeather("Tokyo");
})
NY.addEventListener("click", (e) => {
    getWeather("New York");
})
getWeather("Delhi");

const othercities = (city) => {
    let mycity = document.getElementById(city)
    // let fm=document.getElementsByClassName(ff)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            let dataelement = document.createElement("td");
            dataelement.innerHTML =response.temp;
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)
            dataelement = document.createElement("td");
            dataelement.innerHTML = response.feels_like;
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)
            dataelement = document.createElement("td");
            dataelement.innerHTML = response.humidity;
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)
            dataelement = document.createElement("td");
            dataelement.innerHTML = response.min_temp;
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)
            dataelement = document.createElement("td");
            dataelement.innerHTML = response.max_temp;
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)
            dataelement = document.createElement("td");
            dataelement.innerHTML = parseInt(response.wind_speed) * 3.6
            // mycity.appendChild(fm)
            mycity.appendChild(dataelement)


        })
        .catch(err => console.error(err));
}
othercities("Shanghai")
othercities("London")
othercities("Sydney")
othercities("kolkata")
othercities("California")

