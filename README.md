# 🌦 Advanced Weather API Integration Project

## 📌 Project Overview

This project demonstrates **Advanced API Usage and External API Integration** using Node.js and Express.
The application fetches real-time weather data from the **OpenWeatherMap API** and displays it to users through a simple frontend interface.

The project also implements important backend concepts such as:

* External API integration
* Environment variables for security
* Rate limiting
* Error handling
* REST API architecture

This project was developed as part of the **Level 4 (Expert) tasks** for the internship program at Cognifyz Technologies.

---

# 🚀 Features

✔ Fetch real-time weather data from OpenWeatherMap API
✔ Secure API key using `.env` environment variables
✔ Rate limiting to prevent API abuse
✔ Error handling for invalid city requests
✔ REST API structure using Express
✔ Clean MVC-based folder architecture
✔ Simple frontend interface to test the API

---

# 🛠 Technologies Used

* Node.js
* Express.js
* Axios
* dotenv
* express-rate-limit
* HTML
* CSS
* JavaScript

External API:

* OpenWeatherMap API

---

# 📂 Project Structure

```
TASK-7-advanced-api
│
├── server
│   ├── server.js
│
│   ├── routes
│   │   └── weather.js
│
│   ├── controllers
│   │   └── weatherController.js
│
│   └── middleware
│       └── rateLimiter.js
│
├── client
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── package.json
└── README.md
```

---

# ⚙ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone <repository-url>
```

or download the ZIP file.

---

## 2️⃣ Navigate to Project Folder

```
cd TASK-7-advanced-api
```

---

## 3️⃣ Install Dependencies

```
npm install
```

Required packages:

* express
* axios
* cors
* dotenv
* express-rate-limit

---

# 🔑 Setup Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000
WEATHER_API_KEY=your_openweather_api_key
```

You can get a free API key from:

OpenWeatherMap API

---

# ▶ Running the Server

Start the backend server using:

```
node server/server.js
```

If successful, you will see:

```
Server running on port 5000
```

---

# 🌍 API Endpoint

Fetch weather by city:

```
GET /api/weather/:city
```

Example:

```
http://localhost:5000/api/weather/Bangalore
```

---

# 📊 Example Response

```
{
 "city": "Bengaluru",
 "temperature": 27,
 "humidity": 70,
 "weather": "scattered clouds"
}
```

---

# ⚠ Error Handling

The application handles the following cases:

Invalid city name

```
{
 "error": "City not found"
}
```

Too many API requests

```
{
 "error": "Too many requests. Please try again later."
}
```

---

# 🔒 Security Features

Environment variables used for API key protection

Rate limiting implemented using express-rate-limit

Prevents excessive API calls

---

# 🎯 Learning Outcomes

Through this project, the following concepts were learned:

* Working with external APIs
* Secure API key management
* RESTful API design
* Middleware implementation
* Error handling strategies
* Backend project structuring

---

# 👩‍💻 Author

**Dimple K**

Task Submission for
Cognifyz Technologies Internship Program

---

# 📜 License

This project is created for educational and internship purposes.
