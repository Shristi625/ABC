import User from "../models/user.model.js";
import {
  APIError,
  successResponse,
  uploadToCloudinary,
} from "../utils/index.util.js";

// Get current user profile
export const getUserProfileController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      throw new APIError(404, "User not found");
    }

    successResponse(res, 200, "User profile fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateUserProfileController = async (req, res, next) => {
  try {
    console.log("=== Update profile request received ===");
    console.log("User ID:", req.user.userId);
    console.log("File received:", req.file ? "Yes" : "No");
    if (req.file) {
      console.log("File details:", {
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
      });
    }
    console.log("Body:", req.body);

    const { fullName, displayName } = req.body;

    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new APIError(404, "User not found");
    }

    console.log("Current user data:", {
      fullName: user.fullName,
      displayName: user.displayName,
      avatar: user.avatar,
    });

    // Update fields if provided
    if (fullName !== undefined && fullName !== "") user.fullName = fullName;
    if (displayName !== undefined && displayName !== "")
      user.displayName = displayName;

    // Handle avatar upload if file is provided
    if (req.file) {
      try {
        console.log("Starting Cloudinary upload...");
        const cloudinaryResult = await uploadToCloudinary(
          req.file.buffer,
          "TravelDiaries/avatars",
        );
        console.log("✓ Cloudinary upload successful!");
        console.log("Cloudinary result:", cloudinaryResult);
        user.avatar = cloudinaryResult.url;
        console.log("Avatar URL set to:", user.avatar);
      } catch (cloudinaryError) {
        console.error("❌ Cloudinary upload failed:", cloudinaryError.message);
        throw cloudinaryError;
      }
    }

    await user.save();
    console.log("✓ User saved to database");

    const updatedUser = await User.findById(req.user.userId).select(
      "-password",
    );

    console.log("Updated user data from DB:", updatedUser);
    console.log("=== Update profile request completed ===");
    successResponse(res, 200, "Profile updated successfully", updatedUser);
  } catch (error) {
    console.error("❌ Error in updateUserProfileController:", error);
    next(error);
  }
};

// Get user by ID (for public profiles)
export const getUserByIdController = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select(
      "fullName displayName avatar role",
    );

    if (!user) {
      throw new APIError(404, "User not found");
    }

    successResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

// Delete user account
export const deleteUserAccountController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new APIError(404, "User not found");
    }

    await User.findByIdAndDelete(req.user.userId);

    successResponse(res, 200, "Account deleted successfully", null);
  } catch (error) {
    next(error);
  }
};
