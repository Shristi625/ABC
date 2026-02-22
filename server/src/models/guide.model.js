import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const guideSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Guide name is required"],
            trim: true,
        },
        bio: {
            type: String,
            required: [true, "Bio is required"],
            trim: true,
            maxlength: [500, "Bio cannot exceed 500 characters"],
        },
        photo: {
            type: String,
            required: [true, "Photo URL is required"],
            trim: true,
        },
        languages: {
            type: [String],
            required: [true, "At least one language is required"],
            validate: {
                validator: function (v) {
                    return v && v.length > 0;
                },
                message: "Guide must speak at least one language",
            },
        },
        specialties: {
            type: [String],
            required: [true, "At least one specialty is required"],
            enum: [
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
            ],
            validate: {
                validator: function (v) {
                    return v && v.length > 0;
                },
                message: "Guide must have at least one specialty",
            },
        },
        locations: {
            type: [String],
            required: [true, "At least one location is required"],
            validate: {
                validator: function (v) {
                    return v && v.length > 0;
                },
                message: "Guide must cover at least one location",
            },
        },
        experienceYears: {
            type: Number,
            required: [true, "Years of experience is required"],
            min: [0, "Experience years cannot be negative"],
        },
        pricing: {
            hourlyRate: {
                type: Number,
                min: [0, "Hourly rate cannot be negative"],
            },
            dailyRate: {
                type: Number,
                required: [true, "Daily rate is required"],
                min: [0, "Daily rate cannot be negative"],
            },
            currency: {
                type: String,
                default: "NPR",
            },
        },
        contact: {
            phone: {
                type: String,
                required: [true, "Phone number is required"],
                trim: true,
            },
            email: {
                type: String,
                required: [true, "Email is required"],
                lowercase: true,
                trim: true,
                match: [
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    "Please provide a valid email",
                ],
            },
            whatsapp: {
                type: String,
                trim: true,
            },
        },
        certifications: {
            type: [String],
            default: [],
        },
        availability: {
            type: String,
            enum: ["Available", "Booked", "Limited Availability"],
            default: "Available",
        },
        reviews: [reviewSchema],
        averageRating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        totalReviews: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Calculate average rating before saving
guideSchema.pre("save", function (next) {
    if (this.reviews && this.reviews.length > 0) {
        const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        this.averageRating = Math.round((sum / this.reviews.length) * 10) / 10;
        this.totalReviews = this.reviews.length;
    } else {
        this.averageRating = 0;
        this.totalReviews = 0;
    }
    next();
});

// Index for better query performance
guideSchema.index({ locations: 1, isActive: 1 });
guideSchema.index({ specialties: 1, isActive: 1 });
guideSchema.index({ averageRating: -1 });
guideSchema.index({ name: "text", bio: "text" });

const Guide = mongoose.model("Guide", guideSchema);

export default Guide;
