import { Router } from "express";
import authenticate from "../middlewares/authenticate.middleware.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { uploadSingle } from "../middlewares/multer.middleware.js";
import validateRequest from "../middlewares/validate-request.middleware.js";
import {
  createFoodValidator,
  updateFoodValidator,
} from "../validators/food.validator.js";
import {
  getAllFoodsController,
  getFoodByIdController,
  createFoodController,
  updateFoodController,
  deleteFoodController,
  getFoodTypesController,
} from "../controllers/food.controller.js";

const router = Router();

// Public routes - anyone can view foods
router.get("/", asyncHandler(getAllFoodsController));
router.get("/types", asyncHandler(getFoodTypesController));
router.get("/:id", asyncHandler(getFoodByIdController));

// Admin only routes - create, update, delete
router.post(
  "/",
  authenticate(["admin"]),
  uploadSingle("image"),
  createFoodValidator,
  validateRequest,
  asyncHandler(createFoodController),
);

router.put(
  "/:id",
  authenticate(["admin"]),
  uploadSingle("image"),
  updateFoodValidator,
  validateRequest,
  asyncHandler(updateFoodController),
);

router.delete(
  "/:id",
  authenticate(["admin"]),
  asyncHandler(deleteFoodController),
);

export default router;
