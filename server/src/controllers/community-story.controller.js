import CommunityStory from "../models/community-story.model.js";
import asyncHandler from "../middlewares/async-handler.middleware.js";

// Create a new community story
export const createStory = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const author = req.user._id;
  const story = await CommunityStory.create({ title, content, author });
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
  const { title, content } = req.body;
  const story = await CommunityStory.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  // Only author can update
  if (story.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  story.title = title || story.title;
  story.content = content || story.content;
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
