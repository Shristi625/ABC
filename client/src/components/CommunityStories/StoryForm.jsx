import React, { useState, useRef } from "react";
import "./StoryForm.css";

const StoryForm = ({ initialData, onSubmit, onCancel }) => {
  // Ensure initialData is always an object
  const safeInitialData = initialData || {};
  const [content, setContent] = useState(safeInitialData.content || "");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form className="story-form" onSubmit={handleSubmit}>
      <label className="story-label">Share your story</label>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="story-textarea"
        rows={4}
      />
      <div className="story-image-upload">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="image-upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          {image ? "Change Image" : "Add Image"}
        </button>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="story-image-preview"
          />
        )}
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-btn">
          {safeInitialData._id ? "Update" : "Post"} Story
        </button>
        {onCancel && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default StoryForm;
