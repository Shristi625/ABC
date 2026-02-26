import { body } from "express-validator";

export const createStoryValidator = [
  body("content").notEmpty().withMessage("Content is required"),
  body("image").optional().isString().withMessage("Image must be a string URL"),
];

export const updateStoryValidator = [
  body("content").optional().notEmpty().withMessage("Content cannot be empty"),
  body("image").optional().isString().withMessage("Image must be a string URL"),
];
