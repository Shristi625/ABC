import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateDiary.css";
import { createTravelDiary } from "../../services/travel-diary";

const CreateDiary = () => {
  const navigate = useNavigate();
  const [diary, setDiary] = useState({
    title: "",
    location: "",
    date: "",
    content: "",
  });
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData to send file and data
      const formData = new FormData();
      formData.append("title", diary.title);
      formData.append("location", diary.location);
      formData.append("travelDate", diary.date); // Backend expects 'travelDate'
      formData.append("story", diary.content); // Backend model expects 'story'

      if (coverImage) {
        formData.append("coverImage", coverImage);
      }

      // Call the actual API
      const response = await createTravelDiary(formData);

      console.log("Diary published:", response.data);
      alert("Diary published successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to publish diary:", error);
      console.error("Error response:", error.response?.data);
      alert(
        error.response?.data?.message ||
          "Failed to publish diary. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = () => {
    console.log("Saved as draft:", { ...diary, coverImage });
    alert("Draft saved");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="create-diary">
      {/* Same Navbar as Dashboard */}
      <nav className="diary-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">📖</span>
            <span className="logo-text">TravelDiaries</span>
          </div>

          <div className="nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/dashboard" className="nav-link">
              Dashboard
            </a>
            <a href="/explore" className="nav-link">
              Explore
            </a>
            <button className="nav-cta active">Write</button>
            <div className="profile-dropdown">
              <button className="profile-trigger">
                <span className="profile-avatar">🧑‍🦰</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Writing Space */}
      <main className="diary-main">
        <div className="diary-container">
          {/* Page Header */}
          <header className="page-header">
            <button className="back-button" onClick={handleBack}>
              ← Back
            </button>
            <h1 className="page-title">Write a New Travel Diary</h1>
            <p className="page-subtitle">
              Capture your journey while it's still fresh.
            </p>
          </header>

          {/* Cover Image Upload */}
          <section className="cover-section">
            <div className="cover-label">
              <h3>Cover Image</h3>
              <p className="label-hint">Sets the mood for your story</p>
            </div>

            <div className="cover-upload">
              {imagePreview ? (
                <div className="cover-preview">
                  <img
                    src={imagePreview}
                    alt="Cover preview"
                    className="preview-image"
                  />
                  <div className="preview-overlay">
                    <label className="upload-label">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="file-input"
                      />
                      Change Image
                    </label>
                    <button
                      className="remove-image"
                      onClick={() => {
                        setCoverImage(null);
                        setImagePreview(null);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="upload-area">
                  <div className="upload-icon">📷</div>
                  <div className="upload-text">
                    <div className="upload-title">Upload cover photo</div>
                    <div className="upload-hint">JPG, PNG up to 5MB</div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                  />
                </label>
              )}
            </div>
          </section>

          {/* Basic Information */}
          <section className="info-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Diary Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={diary.title}
                  onChange={handleInputChange}
                  className="form-input title-input"
                  placeholder="Give your diary a meaningful title"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={diary.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Where did this journey take place?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Travel Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={diary.date}
                  onChange={handleInputChange}
                  className="form-input date-input"
                />
              </div>
            </div>
          </section>

          {/* Story Editor - Most Important */}
          <section className="editor-section">
            <div className="editor-label">
              <h3>Your Story</h3>
              <p className="label-hint">Write from the heart</p>
            </div>

            <div className="editor-container">
              <textarea
                id="content"
                name="content"
                value={diary.content}
                onChange={handleInputChange}
                className="story-editor"
                placeholder="Start writing about your journey…
                
Begin with what you felt when you arrived…
Describe the sounds, smells, and sights…
Share the moments that moved you…
                
Don't worry about perfection – just write."
                rows={20}
              />
              <div className="editor-footer">
                <span className="character-count">
                  {diary.content.length} characters
                </span>
                <span className="word-count">
                  {
                    diary.content.split(/\s+/).filter((word) => word.length > 0)
                      .length
                  }{" "}
                  words
                </span>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="actions-section">
            <div className="action-buttons">
              <button
                className="secondary-button"
                onClick={handleSaveDraft}
                type="button"
              >
                Save Draft
              </button>
              <button
                className="primary-button"
                onClick={handlePublish}
                disabled={isSubmitting || !diary.title || !diary.content}
                type="button"
              >
                {isSubmitting ? "Publishing..." : "Publish Diary"}
              </button>
            </div>
            <p className="action-hint">
              Your diary will be added to your collection
            </p>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="diary-footer">
        <p>TravelDiaries · Your stories deserve to be told</p>
      </footer>
    </div>
  );
};

export default CreateDiary;
