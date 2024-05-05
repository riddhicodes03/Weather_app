const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "5d5cb5b3cb560dcad68e72c61ada10df";
const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon")

async function weatherapi(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = (data.wind.speed) + "km/h";

    if(data.weather[0].main=="Clouds")
    {
        weatherImg.src="images/cloud.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherImg.src="images/clear-sky.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherImg.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherImg.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Haze")
    {
        weatherImg.src="images/haze.png";
    }
}
btn.addEventListener("click",()=>{
        weatherapi(searchbox.value);
        console.log(searchbox.value);
    });


// let city = document.getElementById("bar").;
