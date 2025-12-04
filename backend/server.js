const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "https://inayat-interior-decorators-website.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));


app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
