import React from "react";
import "./StoryCard.css";

const StoryCard = ({ story, onDelete, onEdit }) => {
  return (
    <div className="story-card">
      {story.image && (
        <div className="story-image-wrap">
          <img src={story.image} alt="Story" className="story-image" />
        </div>
      )}
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <div className="story-meta">
        <span>By: {story.author?.username || "Unknown"}</span>
        <span>{new Date(story.createdAt).toLocaleString()}</span>
      </div>
      <div className="story-actions">
        {onEdit && (
          <button
            className="edit-btn"
            title="Edit"
            onClick={() => onEdit(story)}
          >
            <span role="img" aria-label="edit">
              ✏️
            </span>{" "}
            Edit
          </button>
        )}
        {onDelete && (
          <button
            className="delete-btn"
            title="Delete"
            onClick={() => onDelete(story._id)}
          >
            <span role="img" aria-label="delete">
              🗑️
            </span>{" "}
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
