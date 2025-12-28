Weather & Fun Facts Backend API

This project is a **Node.js + Express backend application** that demonstrates server side API integration
The server fetches real-time weather data and additional information from third-party APIs and serves a simple, user friendly frontend

Project Objectives

* Learn how to work with **external APIs** on the **server side**
* Fetch, process, and return structured JSON data
* Keep API keys secure using environment variables
* Build a clean and responsive UI
* Follow proper backend project organization

---

Project Structure

```
backend2ass/
│
├─ src/
│   └─ server.js          # Main backend server
│
├─ public/
│   ├─ index.html         # Frontend page
│   └─ style.css          # Yellow & cute design
│
├─ .env                   # Environment variables (API keys)
├─ .gitignore
├─ package.json
└─ README.md
```

Technologies Used

* Node.js
* Express.js
* node-fetch
* dotenv
* OpenWeather API
* Useless Facts API

Required Dependencies

Install all required packages using:

```
npm install express node-fetch dotenv
```

Environment Variables

Create a `.env` file in the **root folder** of the project:

```
WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

The API key is loaded securely using the `dotenv` package.

---

How to Run the Project

1. Install dependencies:

```
npm install
```

2. Start the server:

```
node src/server.js
```

3. Open your browser:

```
http://localhost:3000
```

---

Weather API (Server-Side)

**Endpoint:**

```
GET /weather
```

**Description:**

Fetches real-time weather data for **Astana** from the OpenWeather API and returns:

* Temperature
* Feels-like temperature
* Weather description
* Wind speed
* Rain volume for the last 3 hours
* Country code
* Coordinates

**Example Response:**

```json
{
  "temperature": -5.3,
  "feels_like": -9.1,
  "description": "light snow",
  "wind_speed": 3.5,
  "rain_3h": 0,
  "country": "KZ",
  "coordinates": {
    "lon": 71.43,
    "lat": 51.13
  }
}
```


Additional API: Fun Facts

**Endpoint:**

```
GET /random-fact
```

**Description:**

Fetches a random interesting fact from an external API.

**Example Response:**

```json
{
  "fact": "Honey never spoils. Archaeologists have found edible honey in ancient tombs."
}
```


Frontend

* Served from the `public` folder
* Simple and responsive yellow-themed UI
* Displays:

  * Weather in Astana
  * Random fun fact

---

Key Design Decisions

* All third-party API requests are handled **only on the server side**
* Environment variables are used to protect sensitive data
* Clean project structure separates backend and frontend
* Express static middleware serves frontend files
* Simple endpoints allow easy testing via browser or Postman

---

Testing

* Web interface: `http://localhost:3000`
* Weather API: `http://localhost:3000/weather`
* Fun fact API: `http://localhost:3000/random-fact`
* Postman can be used for API testing

Screenshots

Include screenshots of:

* The web interface
