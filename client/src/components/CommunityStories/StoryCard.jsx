import React from "react";
import "./StoryCard.css";

const StoryCard = ({ story, onDelete, onEdit }) => {
  return (
    <div className="story-card">
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <div className="story-meta">
        <span>By: {story.author?.username || "Unknown"}</span>
        <span>{new Date(story.createdAt).toLocaleString()}</span>
      </div>
      <div className="story-actions">
        {onEdit && <button onClick={() => onEdit(story)}>Edit</button>}
        {onDelete && (
          <button onClick={() => onDelete(story._id)}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
