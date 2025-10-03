import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
console.log(dotenv.config());

const app = express();
const PORT = 5000;

app.use(cors());

// Route to fetch weather securely
app.get("/weather", async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
    );

    res.json(response.data); // send only data to frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
