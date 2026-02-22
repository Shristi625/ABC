import React, { useEffect, useState } from "react";
import "./PublicMoments.css";

const STORAGE_KEY = "publicMoments";

const PublicMoments = () => {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ author: "", title: "", content: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to read public moments:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error("Failed to save public moments:", e);
    }
  }, [entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      setError("Please add a title and a short moment.");
      return;
    }

    const entry = {
      id: Date.now(),
      author: form.author.trim() || "Anonymous",
      title: form.title.trim(),
      content: form.content.trim(),
      createdAt: new Date().toISOString(),
    };

    setEntries((prev) => [entry, ...prev]);
    setForm({ author: "", title: "", content: "" });
  };

  const handleClear = () => {
    if (!window.confirm("Clear all public moments?")) return;
    setEntries([]);
  };

  return (
    <section id="public-moments" className="public-moments">
      <div className="container">
        <h2 className="section-title">Share a Moment</h2>
        <p className="section-sub">Write a quick public entry to share with the community.</p>

        <form className="moment-form" onSubmit={handleSubmit}>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Your name (optional)"
            className="input"
          />
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="input"
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your moment..."
            className="textarea"
            rows={4}
          />
          {error && <div className="error">{error}</div>}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Share Publicly</button>
            <button type="button" className="btn btn-outline" onClick={handleClear}>Clear All</button>
          </div>
        </form>

        <div className="entries-list">
          {entries.length === 0 ? (
            <div className="no-entries">No public moments yet — be the first!</div>
          ) : (
            entries.map((e) => (
              <article key={e.id} className="entry-card">
                <div className="entry-header">
                  <strong className="entry-title">{e.title}</strong>
                  <span className="entry-meta">{new Date(e.createdAt).toLocaleString()} • {e.author}</span>
                </div>
                <p className="entry-content">{e.content}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicMoments;
