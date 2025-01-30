# React + Vite

Weather App
This is a simple Weather App built using React and Vite that allows users to check the current weather for any city by fetching data from a weather API.
#Live link: https://viswanandmuruganantham.github.io/react-weather/
Features
Search for the weather by city name.
Display current temperature, humidity, and weather conditions.
Fetch real-time weather data using an API.

Tech Stack
Frontend: React.js, Vite
API: OpenWeatherMap or any other weather API
Styling: CSS (can be extended with CSS frameworks like Tailwind CSS if needed)

Installation
Follow these steps to run the app locally:

1. Clone the repository:


git clone https://github.com/viswanandMuruganantham/weather-app.git

2. Navigate to the project folder:
cd weather-app

4. Install dependencies:
npm install

4. Set up the API key:
To use the weather API, you will need an API key. You can get your API key from OpenWeatherMap.

Create a .env file in the root of the project.
Add your API key in the .env file:
makefile

REACT_APP_WEATHER_API_KEY=your_api_key_here

5. Run the app:
npm run dev
The app should now be running on http://localhost:3000.

How it works
User input: The user can type a city name into the search bar.
API request: The app sends a request to the weather API, using the city name to get weather data.
Weather display: The app displays the weather details such as temperature, humidity, and weather conditions.
Deploying to GitHub Pages
To deploy the app to GitHub Pages:

Build the app:


npm run build
Deploy the app:


npm run deploy
Your app will be live at: https://yourusername.github.io/weather-app/

screenshot:
![Screenshot 2025-01-29 182420](https://github.com/user-attachments/assets/89f630a5-fabc-4311-8625-b063cb8ec6e5)


Contributing
Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.


