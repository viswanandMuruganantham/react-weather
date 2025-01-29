import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // State variables to store weather data and input city name
  const [city, setCity] = useState('London'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '6f9ccf9b8ed98840fdf3a59228641531'; // Replace with your OpenWeatherMap API key

  // Fetch the weather data when the city changes or on component mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data); // Set the weather data state
        setError(null); // Clear any previous error
      } catch (error) {
        setError('City not found'); // Set error message if city is not found
      }
    };

    fetchWeather();
  }, [city]); // The effect will run when the 'city' state changes

  // Handle the input change for the city search
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      {error && <p>{error}</p>}
      {weatherData ? (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className="description">{weatherData.weather[0].description}</p>
          <p className="temp">Temperature : {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="loading">Loading weather data...</p>
      )}
    </div>
  );
};

export default App;
