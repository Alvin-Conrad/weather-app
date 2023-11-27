document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "&appid=ec54b8fcc309bc2590cdaaa2a7c071c7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

  
    async function weatherCheck(city) {
      try {
        const response = await fetch(apiUrl + city + apiKey);
  
        if (!response.ok) {
          throw new Error(`Weather data not available for ${city}`);
        }
  
        const data = await response.json();
  
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
        // You may want to provide user-friendly feedback, e.g., display an error message on the page
      }
    }
  
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        weatherCheck(searchBox.value);
      });
    } else {
      console.error("searchBtn is null. Element not found.");
    }


  }
);
  