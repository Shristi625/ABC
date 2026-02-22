import rateLimit, { ipKeyGenerator } from "express-rate-limit";

const isProduction = process.env.NODE_ENV === "production";
const noRateLimit = (_req, _res, next) => next();

export const globalRateLimiter = isProduction
  ? rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: {
        status: 429,
        error: "Too many requests, please try again later.",
      },
      standardHeaders: true,
      legacyHeaders: false,
      handler(_req, res) {
        return res.status(429).json({
          success: false,
          statusCode: 429,
          message: "Too many requests, please try again later.",
          error: "Too Many Requests",
        });
      },
    })
  : noRateLimit;

export const authRateLimiter = isProduction
  ? rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 20,
      message: {
        status: 429,
        error: "Too many requests, please try again later.",
      },
      standardHeaders: true,
      legacyHeaders: false,
      handler(_req, res) {
        return res.status(429).json({
          success: false,
          statusCode: 429,
          message: "Too many requests, please try again later.",
          error: "Too Many Requests",
        });
      },
    })
  : noRateLimit;

export const apiRateLimiter = isProduction
  ? rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 5,
      message: {
        status: 429,
        error: "Too many requests, please try again later.",
      },
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: (req) => req.user?.userId || ipKeyGenerator(req),
      handler(_req, res) {
        return res.status(429).json({
          success: false,
          statusCode: 429,
          message: "Too many requests, please try again later.",
          error: "Too Many Requests",
        });
      },
    })
  : noRateLimit;
