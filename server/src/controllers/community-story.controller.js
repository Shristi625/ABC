import asyncHandler from "../middlewares/async-handler.middleware.js";
import CommunityStory from "../models/community-story.model.js";
import { uploadToCloudinary } from "../utils/index.util.js";

// Like a community story
export const likeStory = asyncHandler(async (req, res) => {
  const story = await CommunityStory.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  story.likesCount += 1;
  await story.save();
  res.json({ likesCount: story.likesCount });
});

// Increment view count for a community story
export const viewStory = asyncHandler(async (req, res) => {
  const story = await CommunityStory.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  story.viewsCount += 1;
  await story.save();
  res.json({ viewsCount: story.viewsCount });
});

// Create a new community story
export const createStory = asyncHandler(async (req, res) => {
  const { content, author: clientAuthor } = req.body;
  // Prefer req.user._id if authenticated, else use client-provided author
  let author = null;
  if (req.user && req.user._id) {
    author = req.user._id;
  } else if (clientAuthor) {
    author = clientAuthor;
  }
  let imageUrl = undefined;
  if (req.file) {
    const uploadResult = await uploadToCloudinary(
      req.file.buffer,
      "community-stories",
    );
    imageUrl = uploadResult.url;
  }
  const story = await CommunityStory.create({
    content,
    image: imageUrl,
    author,
  });
  res.status(201).json(story);
});

// Get all community stories
export const getStories = asyncHandler(async (req, res) => {
  const stories = await CommunityStory.find()
    .populate("author", "username")
    .sort({ createdAt: -1 });
  res.json(stories);
});

// Get a single community story by ID
export const getStoryById = asyncHandler(async (req, res) => {
  const story = await CommunityStory.findById(req.params.id).populate(
    "author",
    "username",
  );
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  res.json(story);
});

// Update a community story
export const updateStory = asyncHandler(async (req, res) => {
  const { content, image } = req.body;
  const story = await CommunityStory.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  // Only author can update
  if (story.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  if (content !== undefined) story.content = content;
  if (image !== undefined) story.image = image;
  await story.save();
  res.json(story);
});

// Delete a community story
export const deleteStory = asyncHandler(async (req, res) => {
  const story = await CommunityStory.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  // Only author can delete
  if (story.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  await story.remove();
  res.json({ message: "Story deleted" });
});
