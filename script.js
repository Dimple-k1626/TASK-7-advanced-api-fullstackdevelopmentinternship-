async function getWeather(){

const city = document.getElementById("city").value;

const resultDiv = document.getElementById("result");

resultDiv.innerHTML = "Loading...";

try{

const response = await fetch(`http://localhost:5000/api/weather/${city}`);

const data = await response.json();

if(data.error){
resultDiv.innerHTML = data.error;
return;
}

resultDiv.innerHTML = `
<h3>${data.city}</h3>
<p>Temperature: ${data.temperature}°C</p>
<p>Humidity: ${data.humidity}%</p>
<p>Condition: ${data.weather}</p>
`;

}catch(error){

resultDiv.innerHTML = "Error fetching weather";

}

}