import Guide from "../models/guide.model.js";
import {
    APIError,
    successResponse,
    uploadToCloudinary,
} from "../utils/index.util.js";

// Get all guides (public - for users)
export const getAllGuidesController = async (req, res, next) => {
    try {
        const {
            location,
            specialty,
            language,
            minRating,
            maxPrice,
            availability,
            search,
            featured,
        } = req.query;

        const filter = { isActive: true };

        if (location) {
            filter.locations = location;
        }

        if (specialty) {
            filter.specialties = specialty;
        }

        if (language) {
            filter.languages = language;
        }

        if (minRating) {
            filter.averageRating = { $gte: parseFloat(minRating) };
        }

        if (maxPrice) {
            filter["pricing.dailyRate"] = { $lte: parseFloat(maxPrice) };
        }

        if (availability) {
            filter.availability = availability;
        }

        if (featured === "true") {
            filter.featured = true;
        }

        if (search) {
            filter.$text = { $search: search };
        }

        const guides = await Guide.find(filter).sort({ averageRating: -1, createdAt: -1 });

        successResponse(res, 200, "Guides fetched successfully", guides);
    } catch (error) {
        next(error);
    }
};

// Get single guide by ID (public)
export const getGuideByIdController = async (req, res, next) => {
    try {
        const guide = await Guide.findById(req.params.id);

        if (!guide) {
            throw new APIError(404, "Guide not found");
        }

        successResponse(res, 200, "Guide fetched successfully", guide);
    } catch (error) {
        next(error);
    }
};

// Create new guide (admin only)
export const createGuideController = async (req, res, next) => {
    try {
        const {
            name,
            bio,
            languages,
            specialties,
            locations,
            experienceYears,
            pricing,
            contact,
            certifications,
            availability,
            featured,
        } = req.body;

        let photoUrl = req.body.photo;

        // Handle image upload if file is provided
        if (req.file) {
            const cloudinaryResult = await uploadToCloudinary(
                req.file.buffer,
                "TravelDiaries/guides"
            );
            photoUrl = cloudinaryResult.url;
        }

        const guide = await Guide.create({
            name,
            bio,
            photo: photoUrl,
            languages: Array.isArray(languages) ? languages : JSON.parse(languages || "[]"),
            specialties: Array.isArray(specialties) ? specialties : JSON.parse(specialties || "[]"),
            locations: Array.isArray(locations) ? locations : JSON.parse(locations || "[]"),
            experienceYears,
            pricing: typeof pricing === "string" ? JSON.parse(pricing) : pricing,
            contact: typeof contact === "string" ? JSON.parse(contact) : contact,
            certifications: Array.isArray(certifications)
                ? certifications
                : JSON.parse(certifications || "[]"),
            availability,
            featured: featured || false,
            createdBy: req.user.userId,
        });

        successResponse(res, 201, "Guide created successfully", guide);
    } catch (error) {
        next(error);
    }
};

// Update guide (admin only)
export const updateGuideController = async (req, res, next) => {
    try {
        const {
            name,
            bio,
            languages,
            specialties,
            locations,
            experienceYears,
            pricing,
            contact,
            certifications,
            availability,
            featured,
            isActive,
        } = req.body;

        const guide = await Guide.findById(req.params.id);

        if (!guide) {
            throw new APIError(404, "Guide not found");
        }

        // Update fields if provided
        if (name !== undefined) guide.name = name;
        if (bio !== undefined) guide.bio = bio;
        if (languages !== undefined)
            guide.languages = Array.isArray(languages) ? languages : JSON.parse(languages);
        if (specialties !== undefined)
            guide.specialties = Array.isArray(specialties) ? specialties : JSON.parse(specialties);
        if (locations !== undefined)
            guide.locations = Array.isArray(locations) ? locations : JSON.parse(locations);
        if (experienceYears !== undefined) guide.experienceYears = experienceYears;
        if (pricing !== undefined)
            guide.pricing = typeof pricing === "string" ? JSON.parse(pricing) : pricing;
        if (contact !== undefined)
            guide.contact = typeof contact === "string" ? JSON.parse(contact) : contact;
        if (certifications !== undefined)
            guide.certifications = Array.isArray(certifications)
                ? certifications
                : JSON.parse(certifications);
        if (availability !== undefined) guide.availability = availability;
        if (featured !== undefined) guide.featured = featured;
        if (isActive !== undefined) guide.isActive = isActive;

        // Handle image upload if file is provided
        if (req.file) {
            const cloudinaryResult = await uploadToCloudinary(
                req.file.buffer,
                "TravelDiaries/guides"
            );
            guide.photo = cloudinaryResult.url;
        }

        await guide.save();

        successResponse(res, 200, "Guide updated successfully", guide);
    } catch (error) {
        next(error);
    }
};

// Delete guide (admin only)
export const deleteGuideController = async (req, res, next) => {
    try {
        const guide = await Guide.findById(req.params.id);

        if (!guide) {
            throw new APIError(404, "Guide not found");
        }

        await Guide.findByIdAndDelete(req.params.id);

        successResponse(res, 200, "Guide deleted successfully", null);
    } catch (error) {
        next(error);
    }
};

// Add review to guide (authenticated users)
export const addReviewController = async (req, res, next) => {
    try {
        const { rating, comment } = req.body;
        const guideId = req.params.id;

        const guide = await Guide.findById(guideId);

        if (!guide) {
            throw new APIError(404, "Guide not found");
        }

        // Check if user already reviewed
        const existingReview = guide.reviews.find(
            (review) => review.user.toString() === req.user.userId
        );

        if (existingReview) {
            throw new APIError(400, "You have already reviewed this guide");
        }

        // Get user info from request
        const userName = req.user.fullName || req.user.email;

        guide.reviews.push({
            user: req.user.userId,
            userName,
            rating,
            comment,
        });

        await guide.save();

        successResponse(res, 201, "Review added successfully", guide);
    } catch (error) {
        next(error);
    }
};

// Get guide specialties (public)
export const getGuideSpecialtiesController = async (req, res, next) => {
    try {
        const specialties = await Guide.distinct("specialties", { isActive: true });

        successResponse(res, 200, "Specialties fetched successfully", specialties);
    } catch (error) {
        next(error);
    }
};

// Get guide locations (public)
export const getGuideLocationsController = async (req, res, next) => {
    try {
        const locations = await Guide.distinct("locations", { isActive: true });

        successResponse(res, 200, "Locations fetched successfully", locations);
    } catch (error) {
        next(error);
    }
};

// Get guide languages (public)
export const getGuideLanguagesController = async (req, res, next) => {
    try {
        const languages = await Guide.distinct("languages", { isActive: true });

        successResponse(res, 200, "Languages fetched successfully", languages);
    } catch (error) {
        next(error);
    }
};
