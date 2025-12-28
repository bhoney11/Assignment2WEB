import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.get("/weather", async (req, res) => {
  const CITY = "Astana";
  const UNITS = "metric";
  const KEY = process.env.WEATHER_API_KEY;
console.log("API KEY =", process.env.WEATHER_API_KEY);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${KEY}&units=${UNITS}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.json({ error: "Weather unavailable" });
    }

    res.json({
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
      rain_3h: data.rain?.["3h"] || 0,
      country: data.sys.country,
      coordinates: data.coord
    });
  } catch {
    res.json({ error: "Weather service down" });
  }
});

app.get("/random-fact", async (req, res) => {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = await response.json();
    res.json({ fact: data.text });
  } catch {
    res.json({ error: "Fact unavailable" });
  }
});

app.listen(PORT, () => {
  console.log(`🌼 Server running on http://localhost:${PORT}`);
});
