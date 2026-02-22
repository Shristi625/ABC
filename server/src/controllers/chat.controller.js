import { generateChatResponse } from "../config/gemini.js";
import { APIError } from "../utils/index.util.js";

const sanitizeChatText = (text) => {
  if (!text) return text;
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
    .replace(/(^|\n)\s*[-*+]\s+/g, "$1")
    .replace(/(^|\n)\s*\d+\.\s+/g, "$1")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\s{3,}/g, "  ")
    .trim();
};

/**
 * Controller to handle chat messages and generate AI responses
 * @route POST /api/v1/chat
 * @access Public
 */
export const sendMessageController = async (req, res, next) => {
  const { message } = req.body;

  // Validate message
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return next(new APIError(400, "Message is required"));
  }

  // Limit message length
  if (message.length > 500) {
    return next(new APIError(400, "Message is too long (max 500 characters)"));
  }

  try {
    // Generate AI response using Gemini
    const reply = sanitizeChatText(await generateChatResponse(message));

    res.status(200).json({
      success: true,
      data: {
        message,
        reply,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);
    return next(
      new APIError(
        500,
        "Failed to generate response. Please try again later.",
        process.env.NODE_ENV === "production"
          ? null
          : error?.message || "Unknown error",
      ),
    );
  }
};
