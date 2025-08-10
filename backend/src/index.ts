import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./config/app.config";

const app = express();
const BASE_PATH = config.BASE_PATH || '/';

// Use built-in JSON parser
app.use(express.json());

// Use built-in URL-encoded parser
app.use(express.urlencoded({ extended: true }));

// Cookie session setup
app.use(
  session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  })
);

// Enable CORS for your frontend
app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

// Sample root route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Subscribe to the channel & share" });
  });
  

// Listen on specified port
app.listen(config.PORT, () => {
  console.log(
    `Server listening on port ${config.PORT} in ${config.NODE_ENV} mode`
  );
});
