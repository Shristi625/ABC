import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/index.route.js";
import { globalRateLimiter } from "./middlewares/rate-limiting.middleware.js";
import globalErrorHandler from "./middlewares/global-error-handler.middleware.js";
import passport from "./config/passport.config.js";
const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        /^http:\/\/localhost:\d+$/,
        /^http:\/\/127\.0\.0\.1:\d+$/,
        /^http:\/\/localhost$/,
        /^http:\/\/127\.0\.0\.1$/
      ];

      const isAllowed = allowedOrigins.some(regex => regex.test(origin));

      if (isAllowed || process.env.NODE_ENV !== "production") {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// Don't parse multipart/form-data with express.json() - let multer handle it
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(globalRateLimiter);
app.use(routes);
app.use(globalErrorHandler);

export default app;
