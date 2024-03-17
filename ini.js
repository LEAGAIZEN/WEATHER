const apikey = "f72b3ada2cf4d4abd497cd90e309f025";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=${apikey}`;

async function checkweather() {
  const response = await fetch(apiurl);
  const data = await response.json();
  console.log(data);
}

checkweather();
