import express from "express";
const router = express.Router();
import {
  createStory,
  getStories,
  getStoryById,
  updateStory,
  deleteStory,
  likeStory,
  viewStory,
} from "../controllers/community-story.controller.js";
import { uploadSingle } from "../middlewares/multer.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import {
  createStoryValidator,
  updateStoryValidator,
} from "../validators/community-story.validator.js";
import validateRequest from "../middlewares/validate-request.middleware.js";

// Like a story
router.post("/:id/like", authenticate, likeStory);

// View a story (increment view count)
router.post("/:id/view", viewStory);

// Create a story (auth required)
router.post(
  "/",
  uploadSingle("image"),
  createStoryValidator,
  validateRequest,
  createStory,
);

// Get all stories
router.get("/", getStories);

// Get a single story by ID
router.get("/:id", getStoryById);

// Update a story (auth required)
router.put(
  "/:id",
  authenticate,
  updateStoryValidator,
  validateRequest,
  updateStory,
);

// Delete a story (auth required)
router.delete("/:id", authenticate, deleteStory);

export default router;
