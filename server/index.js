import express from "express";
import dotenv from "dotenv";
import connectToDB from "./DB/connectToDB.js";
import authRoutes from "./routes/auth.route.js";
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json());

connectToDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
