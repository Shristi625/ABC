import React, { useEffect, useState } from "react";
import "./PublicMoments.css";
import axios from "../../lib/axios";

const PublicMoments = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

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
                  await axios.post(
                    `/api/v1/community-stories/${e._id || e.id}/like`,
                  );
                  setEntries((prev) =>
                    prev.map((story) =>
                      (story._id || story.id) === (e._id || e.id)
                        ? { ...story, likes: (story.likes || 0) + 1 }
                        : story,
                    ),
                  );
                } catch (err) {
                  setError("Failed to like story.");
                }
              };
              const handleView = async () => {
                try {
                  await axios.post(
                    `/api/v1/community-stories/${e._id || e.id}/view`,
                  );
                  setEntries((prev) =>
                    prev.map((story) =>
                      (story._id || story.id) === (e._id || e.id)
                        ? { ...story, views: (story.views || 0) + 1 }
                        : story,
                    ),
                  );
                } catch (err) {
                  setError("Failed to update views.");
                }
              };
              return (
                <div key={e._id || e.id} className="community-card">
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
                      <button
                        className="like-btn"
                        onClick={handleLike}
                        title="Like"
                      >
                        <span role="img" aria-label="like">
                          ❤️
                        </span>
                      </button>
                      <span className="like-count">{e.likes || 0}</span>
                      <span
                        className="views"
                        style={{ cursor: "pointer" }}
                        onClick={handleView}
                      >
                        👁️ {e.views || 0} views
                      </span>
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
