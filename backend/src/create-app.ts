import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const createApp = async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  console.log("App created");
  return app;
};
