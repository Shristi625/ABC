import { body } from "express-validator";

const validSpecialties = [
    "Trekking & Hiking",
    "Cultural Tours",
    "Food Tours",
    "Photography Tours",
    "Wildlife & Nature",
    "Adventure Sports",
    "City Tours",
    "Spiritual & Religious",
    "Mountain Expeditions",
    "Historical Sites",
];

export const createGuideValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Guide name is required")
        .isLength({ min: 2, max: 100 })
        .withMessage("Guide name must be between 2 and 100 characters"),

    body("bio")
        .trim()
        .notEmpty()
        .withMessage("Bio is required")
        .isLength({ min: 20, max: 500 })
        .withMessage("Bio must be between 20 and 500 characters"),

    body("languages")
        .custom((value) => {
            const langs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            return langs.length > 0;
        })
        .withMessage("At least one language is required"),

    body("specialties")
        .custom((value) => {
            const specs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            if (specs.length === 0) {
                throw new Error("At least one specialty is required");
            }
            const invalidSpecs = specs.filter((s) => !validSpecialties.includes(s));
            if (invalidSpecs.length > 0) {
                throw new Error(`Invalid specialties: ${invalidSpecs.join(", ")}`);
            }
            return true;
        })
        .withMessage("Invalid specialties"),

    body("locations")
        .custom((value) => {
            const locs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            return locs.length > 0;
        })
        .withMessage("At least one location is required"),

    body("experienceYears")
        .notEmpty()
        .withMessage("Experience years is required")
        .isInt({ min: 0 })
        .withMessage("Experience years must be a non-negative number"),

    body("pricing.dailyRate")
        .notEmpty()
        .withMessage("Daily rate is required")
        .isFloat({ min: 0 })
        .withMessage("Daily rate must be a positive number"),

    body("pricing.hourlyRate")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Hourly rate must be a positive number"),

    body("contact.phone")
        .trim()
        .notEmpty()
        .withMessage("Phone number is required"),

    body("contact.email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email"),

    body("contact.whatsapp").optional().trim(),

    body("availability")
        .optional()
        .isIn(["Available", "Booked", "Limited Availability"])
        .withMessage("Invalid availability status"),

    body("photo").optional().isURL().withMessage("Photo must be a valid URL"),
];

export const updateGuideValidator = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Guide name must be between 2 and 100 characters"),

    body("bio")
        .optional()
        .trim()
        .isLength({ min: 20, max: 500 })
        .withMessage("Bio must be between 20 and 500 characters"),

    body("languages")
        .optional()
        .custom((value) => {
            const langs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            return langs.length > 0;
        })
        .withMessage("At least one language is required"),

    body("specialties")
        .optional()
        .custom((value) => {
            const specs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            if (specs.length === 0) {
                throw new Error("At least one specialty is required");
            }
            const invalidSpecs = specs.filter((s) => !validSpecialties.includes(s));
            if (invalidSpecs.length > 0) {
                throw new Error(`Invalid specialties: ${invalidSpecs.join(", ")}`);
            }
            return true;
        })
        .withMessage("Invalid specialties"),

    body("locations")
        .optional()
        .custom((value) => {
            const locs = Array.isArray(value) ? value : JSON.parse(value || "[]");
            return locs.length > 0;
        })
        .withMessage("At least one location is required"),

    body("experienceYears")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Experience years must be a non-negative number"),

    body("pricing.dailyRate")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Daily rate must be a positive number"),

    body("pricing.hourlyRate")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Hourly rate must be a positive number"),

    body("contact.email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Please provide a valid email"),

    body("availability")
        .optional()
        .isIn(["Available", "Booked", "Limited Availability"])
        .withMessage("Invalid availability status"),

    body("photo").optional().isURL().withMessage("Photo must be a valid URL"),

    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive must be a boolean"),

    body("featured")
        .optional()
        .isBoolean()
        .withMessage("featured must be a boolean"),
];

export const addReviewValidator = [
    body("rating")
        .notEmpty()
        .withMessage("Rating is required")
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5"),

    body("comment")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Comment cannot exceed 500 characters"),
];
