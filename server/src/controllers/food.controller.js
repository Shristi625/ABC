import Food from "../models/food.model.js";
import {
  APIError,
  successResponse,
  uploadToCloudinary,
} from "../utils/index.util.js";

// Get all foods (public - for users)
export const getAllFoodsController = async (req, res, next) => {
  try {
    const { type, priceCategory, search } = req.query;

    const filter = { isActive: true };

    if (type) {
      filter.type = type;
    }

    if (priceCategory) {
      filter.priceCategory = priceCategory;
    }

    if (search) {
      filter.$text = { $search: search };
    }

    const foods = await Food.find(filter).sort({ createdAt: -1 });

    successResponse(res, 200, "Foods fetched successfully", foods);
  } catch (error) {
    next(error);
  }
};

// Get single food by ID (public)
export const getFoodByIdController = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      throw new APIError(404, "Food not found");
    }

    successResponse(res, 200, "Food fetched successfully", food);
  } catch (error) {
    next(error);
  }
};

// Create new food (admin only)
export const createFoodController = async (req, res, next) => {
  try {
    const { name, description, type, priceCategory, price } = req.body;

    let imageUrl = req.body.image;

    // Handle image upload if file is provided
    if (req.file) {
      const cloudinaryResult = await uploadToCloudinary(
        req.file.buffer,
        "TravelDiaries/foods",
      );
      imageUrl = cloudinaryResult.url;
    }

    const food = await Food.create({
      name,
      description,
      image: imageUrl,
      type,
      priceCategory,
      price,
      createdBy: req.user.userId,
    });

    successResponse(res, 201, "Food created successfully", food);
  } catch (error) {
    next(error);
  }
};

// Update food (admin only)
export const updateFoodController = async (req, res, next) => {
  try {
    const { name, description, type, priceCategory, price, isActive } =
      req.body;

    const food = await Food.findById(req.params.id);

    if (!food) {
      throw new APIError(404, "Food not found");
    }

    // Update fields if provided
    if (name !== undefined) food.name = name;
    if (description !== undefined) food.description = description;
    if (type !== undefined) food.type = type;
    if (priceCategory !== undefined) food.priceCategory = priceCategory;
    if (price !== undefined) food.price = price;
    if (isActive !== undefined) food.isActive = isActive;

    // Handle image upload if file is provided
    if (req.file) {
      const cloudinaryResult = await uploadToCloudinary(
        req.file.buffer,
        "TravelDiaries/foods",
      );
      food.image = cloudinaryResult.url;
    }

    await food.save();

    successResponse(res, 200, "Food updated successfully", food);
  } catch (error) {
    next(error);
  }
};

// Delete food (admin only)
export const deleteFoodController = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      throw new APIError(404, "Food not found");
    }

    await Food.findByIdAndDelete(req.params.id);

    successResponse(res, 200, "Food deleted successfully", null);
  } catch (error) {
    next(error);
  }
};

// Get food types (public)
export const getFoodTypesController = async (req, res, next) => {
  try {
    const types = await Food.distinct("type", { isActive: true });

    successResponse(res, 200, "Food types fetched successfully", types);
  } catch (error) {
    next(error);
  }
};
