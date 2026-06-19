import express from "express";
import dbConnect from "./config/dbConfig.js";

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Auth_01 API is running" });
});

export default app;
