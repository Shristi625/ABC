import mongoose from "mongoose";

const CommunityStorySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
    },

    likesCount: {
      type: Number,
      default: 0,
    },

    viewsCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

CommunityStorySchema.pre("save", function (next) {
  // Remove this hook; timestamps are handled by Mongoose
});

export default mongoose.model("CommunityStory", CommunityStorySchema);
