import { Router } from "express";
import { successResponse } from "../utils/index.util.js";
import mongoose from "mongoose";
import authRoute from "./auth.route.js";
import travelDiaryRoute from "./travel-diary.route.js";
import userRoute from "./user.route.js";
import foodRoute from "./food.route.js";
import chatRoute from "./chat.route.js";

const router = Router();

router.route("/").get((req, res, next) => {
  try {
    successResponse(res, 200, "API is working fine", {
      name: "Travel Diaries Backend API",
      version: "1.0.0",
    });
  } catch (error) {
    next(error);
  }
});

router.route("/health").get((req, res, next) => {
  try {
    const dbState =
      mongoose.connection.readyState === 1 ? "connected" : "disconnected";
    successResponse(res, 200, "Server is healthy", {
      name: "Travel Diaries Backend API",
      version: "1.0.0",
      database: dbState,
      uptime: process.uptime(),
      timestamp: Date.now(),
    });
  } catch (error) {
    next(error);
  }
});

router.use("/api/v1/auth", authRoute);
router.use("/api/v1/travel-diaries", travelDiaryRoute);
router.use("/api/v1/users", userRoute);
router.use("/api/v1/foods", foodRoute);
router.use("/api/v1/chat", chatRoute);

router.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default router;
