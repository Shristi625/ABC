import React, { useEffect, useState } from "react";
import "./PublicMoments.css";
import axios from "../../lib/axios";

const PublicMoments = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  const getStoryId = (story) => story._id || story.id;
  const getLikes = (story) => story.likesCount ?? story.likes ?? 0;
  const getViews = (story) => story.viewsCount ?? story.views ?? 0;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get("/api/v1/community-stories");
        setEntries(res.data || []);
      } catch (e) {
        setError("Failed to load public moments.");
        console.error("Failed to fetch public moments:", e);
      }
    };
    fetchStories();
  }, []);

  return (
    <section id="public-moments" className="public-moments">
      <div className="container">
        <h2 className="section-title">Share a Moment</h2>
        <p className="section-sub">
          Write a quick public entry to share with the community.
        </p>
        <div className="entries-list">
          {entries.length === 0 ? (
            <div className="no-entries">No public moments yet.</div>
          ) : (
            entries.map((e) => {
              const handleLike = async () => {
                try {
                  const storyId = getStoryId(e);
                  if (!storyId) return;

                  const res = await axios.post(
                    `/api/v1/community-stories/${storyId}/like`,
                  );
                  setEntries((prev) =>
                    prev.map((story) =>
                      getStoryId(story) === storyId
                        ? {
                            ...story,
                            likesCount:
                              res.data?.likesCount ?? getLikes(story) + 1,
                          }
                        : story,
                    ),
                  );
                } catch (err) {
                  setError(
                    err?.response?.status === 401
                      ? "Please login to like a story."
                      : "Failed to like story.",
                  );
                }
              };
              const handleView = async () => {
                try {
                  const storyId = getStoryId(e);
                  if (!storyId) return;

                  const res = await axios.post(
                    `/api/v1/community-stories/${storyId}/view`,
                  );
                  setEntries((prev) =>
                    prev.map((story) =>
                      getStoryId(story) === storyId
                        ? {
                            ...story,
                            viewsCount:
                              res.data?.viewsCount ?? getViews(story) + 1,
                          }
                        : story,
                    ),
                  );
                } catch (err) {
                  setError("Failed to update views.");
                }
              };
              return (
                <div key={getStoryId(e)} className="community-card">
                  <div className="card-image-wrap">
                    <img
                      src={e.image || e.imageUrl || "/logo/default-story.png"}
                      alt="Story"
                      className="card-image"
                      onError={(ev) => {
                        ev.target.src = "/logo/default-story.png";
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span className="card-author">
                        {e.author?.username || e.author || "Unknown"}
                      </span>
                      <span className="card-date">
                        {e.createdAt
                          ? new Date(e.createdAt).toLocaleString()
                          : ""}
                      </span>
                    </div>
                    <div className="card-content">
                      {e.title && (
                        <strong className="card-title">{e.title}</strong>
                      )}
                      <p>{e.content}</p>
                    </div>
                    <div className="card-actions">
                      <div className="like-group">
                        <button
                          type="button"
                          className="like-btn"
                          onClick={handleLike}
                          title="Like"
                          aria-label="Like story"
                        >
                          <span role="img" aria-label="like">
                            ❤️
                          </span>
                        </button>
                        <span className="like-count">{getLikes(e)}</span>
                      </div>
                      <button
                        type="button"
                        className="views-btn"
                        onClick={handleView}
                        title="View story"
                        aria-label="View story"
                      >
                        <span className="views">👁️ {getViews(e)} views</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </section>
  );
};

export default PublicMoments;
