import TravelDiary from "../models/travel-diary.model.js";
import {
  successResponse,
  APIError,
  uploadToCloudinary,
} from "../utils/index.util.js";

export const createDiaryController = async (req, res, next) => {
  try {
    const { title, location, travelDate, story, isPublic } = req.body;
    
    if (!req.file) {
      return next(new APIError(400, "Cover image is required"));
    }

    const uploadImage = await uploadToCloudinary(
      req.file.buffer,
      "travel-diaries"
    );

    const date = new Date(travelDate);
    if (isNaN(date.getTime())) {
      return next(new APIError(400, "Invalid travel date"));
    }
    const newDiary = await TravelDiary.create({
      userId: req.user.userId,
      title,
      location,
      travelDate: date,
      story,
      coverImage: uploadImage.url,
      isPublic: Boolean(isPublic),
    });

    successResponse(res, 201, "Diary created successfully", newDiary);
  } catch (err) {
    next(err);
  }
};

export const getMyDiariesController = async (req, res, next) => {
  try {
    let diaries;
    if (req.user.role === "admin") {
      diaries = await TravelDiary.find();
    } else {
      diaries = await TravelDiary.find({ userId: req.user.userId });
    }

    successResponse(res, 200, "Diaries fetched successfully", diaries);
  } catch (err) {
    next(err);
  }
};

export const getDiaryByIdController = async (req, res, next) => {
  try {
    const diary = await TravelDiary.findById(req.params.id).populate({ path: 'userId', select: 'displayName avatar' });
    if (!diary) return next(new APIError(404, "Diary not found"));

    if (
      req.user.role !== "admin" &&
      diary.userId.toString() !== req.user.userId
    )
      return next(new APIError(403, "Access denied"));

    successResponse(res, 200, "Diary fetched successfully", diary);
  } catch (err) {
    next(err);
  }
};

export const updateDiaryController = async (req, res, next) => {
  try {
    const diary = await TravelDiary.findById(req.params.id);
    if (!diary) return next(new APIError(404, "Diary not found"));

    if (
      req.user.role !== "admin" &&
      diary.userId.toString() !== req.user.userId
    )
      return next(new APIError(403, "Access denied"));

    // allow updating isPublic explicitly
    const { isPublic } = req.body;
    Object.assign(diary, req.body);
    if (typeof isPublic !== 'undefined') diary.isPublic = Boolean(isPublic);
    await diary.save();

    successResponse(res, 200, "Diary updated successfully", diary);
  } catch (err) {
    next(err);
  }
};

export const deleteDiaryController = async (req, res, next) => {
  try {
    const diary = await TravelDiary.findById(req.params.id);
    if (!diary) return next(new APIError(404, "Diary not found"));

    if (
      req.user.role !== "admin" &&
      diary.userId.toString() !== req.user.userId
    )
      return next(new APIError(403, "Access denied"));

    await diary.remove();
    successResponse(res, 200, "Diary deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getPublicDiariesController = async (req, res, next) => {
  try {
    const diaries = await TravelDiary.find({ isPublic: true }).populate({ path: 'userId', select: 'displayName avatar' }).sort({ createdAt: -1 });
    successResponse(res, 200, 'Public diaries fetched successfully', diaries);
  } catch (err) {
    next(err);
  }
};
