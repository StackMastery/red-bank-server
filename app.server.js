import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import { Routes } from "./routes/Routes.js";
import { VerifyOrigin } from "./middlewares/verifyOrigin.js";

// Load environment variables
dotenv.config();

// App Configs
const app = express();
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(
  cors({
    origin: [`${process.env.ORIGIN}`],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(VerifyOrigin);

// Routes
app.use("/api", Routes);

// Connect to Database
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});
