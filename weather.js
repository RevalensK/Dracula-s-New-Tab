// Recuperation de la météo
    const apiKey = "USER_API8KEY"; //Replace USER_API8KEY with your OpenWeatherMap API key
    // You can get your API key from https://openweathermap.org/api 
    const city = "Paris"; 

    async function getWeather() {
      try {
        // Appel API météo
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=en`
        );
        const data = await response.json();

        // Traduction du temps
        const weather = data.weather[0].main.toLowerCase();
        let weatherText = "";

        switch (weather) {
          case "clear":
            weatherText = "sunny, go explore.";
            break;
          case "clouds":
            weatherText = "cloudy, maybe stay in.";
            break;
          case "rain":
          case "drizzle":
            weatherText = "rainy, don't forget your umbrella.";
            break;
          case "thunderstorm":
            weatherText = "stormy, stay safe.";
            break;
          case "snow":
            weatherText = "snowy, build a snowman.";
            break;
          case "mist":
          case "fog":
            weatherText = "foggy, can't see other people.";
            break;
          default:
            weatherText = weather;
        }

        document.getElementById("weatherText").textContent = `It's ${weatherText}`;

      } catch (error) {
        document.getElementById("weatherText").textContent = "Unable to load weather.";
        console.error(error);
      }
    }

    getWeather();