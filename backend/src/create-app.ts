import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

export const createApp = async () => {
  const app = express();

  app.use(
    cors({
      origin:
        process.env.NODE_ENV === "production"
          ? process.env.FRONTEND_URL
          : "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.json({
      message:
        "If you are seeing this, the backend is connected to the frontend",
    });
  });
  console.log("App created");
  return app;
};
