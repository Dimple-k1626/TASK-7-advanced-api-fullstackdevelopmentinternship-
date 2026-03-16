const axios = require("axios");

exports.getWeather = async (req, res) => {

  try {

    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].description
    });

  } catch (error) {

    res.status(500).json({
      error: "Unable to fetch weather data"
    });

  }

};