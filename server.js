require("dotenv").config();

const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather");
const limiter = require("./middleware/rateLimiter");

const app = express();

app.use(cors());
app.use(express.json());

app.use(limiter);

app.use("/api", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Advanced API Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});