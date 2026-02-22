import e from "express";
import { body, param } from "express-validator";

export const validateTravelDiary = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title can be at most 100 characters long"),
  body("description")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Description can be at most 1000 characters long"),
  body("location")
    .notEmpty()
    .withMessage("Location is required")
    .isLength({ max: 200 })
    .withMessage("Location can be at most 200 characters long"),
  body("travelDate")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Date must be a valid ISO 8601 date"),
  body("isPublic").optional().isBoolean().withMessage('isPublic must be a boolean'),
];

export const validateDiaryIdParam = [
  param("id").isMongoId().withMessage("Invalid diary ID format"),
];

export const validateUpdateTravelDiary = [
  body("title")
    .optional()
    .isLength({ max: 100 })
    .withMessage("Title can be at most 100 characters long"),
  body("description")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Description can be at most 1000 characters long"),
  body("location")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Location can be at most 200 characters long"),
  body("travelDate")
    .optional()
    .isISO8601()
    .withMessage("Date must be a valid ISO 8601 date"),
  body("isPublic").optional().isBoolean().withMessage('isPublic must be a boolean'),
];
