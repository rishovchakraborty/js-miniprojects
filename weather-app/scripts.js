const apikey= "e19403464f4a9839eca1c373079cac30";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data = await response.json();
    
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";  
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+"kmh";

    if(data.weather[0].main == "clouds"){
        weathericon.src="assets/images/clouds.png"
    }
    else    if(data.weather[0].main == "rain"){
        weathericon.src="assets/images/rain.png"
    }
    else    if(data.weather[0].main == "drizzle"){
        weathericon.src="assets/images/drizzle.png"
    }
    else    if(data.weather[0].main == "mist"){
        weathericon.src="assets/images/mist.png"
    }
    else    if(data.weather[0].main == "clear"){
        weathericon.src="assets/images/clear.png"
    }

    document.querySelector(".weather").style.display='block';

    // console.log(data)
}

searchbtn.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})

