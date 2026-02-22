import { Router } from "express";
import authenticate from "../middlewares/authenticate.middleware.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import { uploadSingle } from "../middlewares/multer.middleware.js";
import validateRequest from "../middlewares/validate-request.middleware.js";
import {
    createGuideValidator,
    updateGuideValidator,
    addReviewValidator,
} from "../validators/guide.validator.js";
import {
    getAllGuidesController,
    getGuideByIdController,
    createGuideController,
    updateGuideController,
    deleteGuideController,
    addReviewController,
    getGuideSpecialtiesController,
    getGuideLocationsController,
    getGuideLanguagesController,
} from "../controllers/guide.controller.js";

const router = Router();

// Public routes - anyone can view guides
router.get("/", asyncHandler(getAllGuidesController));
router.get("/specialties", asyncHandler(getGuideSpecialtiesController));
router.get("/locations", asyncHandler(getGuideLocationsController));
router.get("/languages", asyncHandler(getGuideLanguagesController));
router.get("/:id", asyncHandler(getGuideByIdController));

// Authenticated routes - add reviews
router.post(
    "/:id/reviews",
    authenticate(["user", "admin"]),
    addReviewValidator,
    validateRequest,
    asyncHandler(addReviewController)
);

// Admin only routes - create, update, delete
router.post(
    "/",
    authenticate(["admin"]),
    uploadSingle("photo"),
    createGuideValidator,
    validateRequest,
    asyncHandler(createGuideController)
);

router.put(
    "/:id",
    authenticate(["admin"]),
    uploadSingle("photo"),
    updateGuideValidator,
    validateRequest,
    asyncHandler(updateGuideController)
);

router.delete(
    "/:id",
    authenticate(["admin"]),
    asyncHandler(deleteGuideController)
);

export default router;
