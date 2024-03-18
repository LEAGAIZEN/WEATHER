const apikey = "f72b3ada2cf4d4abd497cd90e309f025";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city) {
  const response = await fetch(`${apiurl}&q=${city}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  // const weathericon=document.querySelector()
  if(data.weather[0].main=="Clouds"){
    weathericon.src="images/clouds.png";
    
  }else if(data.weather[0].main=="Clear"){
    weathericon.src="images/clear.png";
  }else if(data.weather[0].main=="Rain"){
    weathericon.src="images/rain.png";
  }else if(data.weather[0].main=="Drizzle"){
    weathericon.src="images/drizzle.png";
  }else if(data.weather[0].main=="Mist"){
    weathericon.src="images/mist.png";
  }
  document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
