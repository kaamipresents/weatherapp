import axios from "axios";

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { city } = req.query; // query params work same as Express

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY, // stored in Vercel env vars
          q: city,
          aqi: "no",
        },
      }
    );

    // ✅ Return weather data
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
}




// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();
// console.log(dotenv.config());

// const app = express();
// const PORT = 5000;

// app.use(cors());

// // Route to fetch weather securely
// app.get("/weather", async (req, res) => {
//   const city = req.query.city;

//   try {
//     const response = await axios.get(
//       `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
//     );

//     res.json(response.data); // send only data to frontend
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch weather" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });


