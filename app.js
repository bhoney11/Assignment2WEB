fetch("/weather")
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById("weather").textContent = "No weather ☁️";
    } else {
      document.getElementById("weather").innerHTML = `
        🌡 ${Math.round(data.temperature)}°C <br>
        🤍 Feels like ${Math.round(data.feels_like)}°C <br>
        ☁ ${data.description} <br>
        💨 Wind ${data.wind_speed} m/s <br>
        🌧 Rain (3h): ${data.rain_3h} mm
      `;
    }
  });

fetch("/random-fact")
  .then(res => res.json())
  .then(data => {
    document.getElementById("fact").textContent =
      data.fact || "No fact today 🌻";
  });
