
const apiKey = "697d12e83ccf7992ca7eb1ff1bd702c0";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");


async function checkWeather (city) {
    const response = await fetch(baseUrl+city+ `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Snow"){
            icon.src = "images/snow.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
   
searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
})