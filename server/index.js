import express from "express";
import dotenv from "dotenv";
import connectToDB from "./DB/connectToDB.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const PORT = parseInt(process.env.PORT) || 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
connectToDB();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app
  .listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  })
  .on("error", (error) => {
    console.error(`Error starting server: ${error.message}`);
  });
