import { Router } from "express";
import authenticate from "../middlewares/authenticate.middleware.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { uploadSingle } from "../middlewares/multer.middleware.js";
import {
  getUserProfileController,
  updateUserProfileController,
  getUserByIdController,
  deleteUserAccountController,
} from "../controllers/user.controller.js";

const router = Router();

// Get current user profile
router.get(
  "/profile",
  authenticate(["user", "admin"]),
  asyncHandler(getUserProfileController),
);

// Update current user profile with avatar upload
router.put(
  "/profile",
  authenticate(["user", "admin"]),
  uploadSingle("avatar"),
  asyncHandler(updateUserProfileController),
);

// Get user by ID (public)
router.get("/:id", asyncHandler(getUserByIdController));

// Delete user account
router.delete(
  "/account",
  authenticate(["user", "admin"]),
  asyncHandler(deleteUserAccountController),
);

export default router;
