import { body } from "express-validator";

export const createFoodValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Food name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Food name must be between 2 and 100 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10, max: 500 })
    .withMessage("Description must be between 10 and 500 characters"),

  body("type")
    .notEmpty()
    .withMessage("Food type is required")
    .isIn([
      "Street Food",
      "Traditional",
      "Cultural",
      "Snack",
      "Dessert",
      "Main Course",
      "Beverage",
    ])
    .withMessage("Invalid food type"),

  body("priceCategory")
    .optional()
    .isIn(["Budget", "Affordable", "Moderate", "Expensive"])
    .withMessage("Invalid price category"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("image").optional().isURL().withMessage("Image must be a valid URL"),
];

export const updateFoodValidator = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Food name must be between 2 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage("Description must be between 10 and 500 characters"),

  body("type")
    .optional()
    .isIn([
      "Street Food",
      "Traditional",
      "Cultural",
      "Snack",
      "Dessert",
      "Main Course",
      "Beverage",
    ])
    .withMessage("Invalid food type"),

  body("priceCategory")
    .optional()
    .isIn(["Budget", "Affordable", "Moderate", "Expensive"])
    .withMessage("Invalid price category"),

  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("image").optional().isURL().withMessage("Image must be a valid URL"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be a boolean"),
];
