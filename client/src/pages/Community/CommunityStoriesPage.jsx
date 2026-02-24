import React, { useEffect, useState, createContext, useContext } from "react";
import {
  fetchStories,
  createStory,
  updateStory,
  deleteStory,
} from "../../services/community-story";
import StoryCard from "../../components/CommunityStories/StoryCard";
import StoryForm from "../../components/CommunityStories/StoryForm";
import "./CommunityStoriesPage.css";

// Context for stories store
const StoriesContext = createContext();

function useStories() {
  return useContext(StoriesContext);
}

function StoriesProvider({ children }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStories = async () => {
    setLoading(true);
    try {
      const data = await fetchStories();
      setStories(data);
    } catch (err) {
      setError("Failed to load stories");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadStories();
  }, []);

  const addStory = async (story) => {
    try {
      const newStory = await createStory(story);
      setStories((prev) => [newStory, ...prev]);
      return true;
    } catch (err) {
      setError("Failed to create story");
      return false;
    }
  };

  const editStory = async (id, story) => {
    try {
      const updated = await updateStory(id, story);
      setStories((prev) => prev.map((s) => (s._id === id ? updated : s)));
      return true;
    } catch (err) {
      setError("Failed to update story");
      return false;
    }
  };

  const removeStory = async (id) => {
    try {
      await deleteStory(id);
      setStories((prev) => prev.filter((s) => s._id !== id));
      return true;
    } catch (err) {
      setError("Failed to delete story");
      return false;
    }
  };

  return (
    <StoriesContext.Provider
      value={{
        stories,
        loading,
        error,
        addStory,
        editStory,
        removeStory,
        setError,
      }}
    >
      {children}
    </StoriesContext.Provider>
  );
}

const CommunityStoriesPage = () => {
  const {
    stories,
    loading,
    error,
    addStory,
    editStory,
    removeStory,
    setError,
  } = useStories();
  const [showForm, setShowForm] = useState(false);
  const [editingStory, setEditingStory] = useState(null);

  const handleCreate = async (story) => {
    const ok = await addStory(story);
    if (ok) setShowForm(false);
  };

  const handleEdit = (story) => {
    setEditingStory(story);
    setShowForm(true);
  };

  const handleUpdate = async (story) => {
    if (editingStory) {
      const ok = await editStory(editingStory._id, story);
      if (ok) {
        setEditingStory(null);
        setShowForm(false);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this story?")) return;
    await removeStory(id);
  };

  // Sidebar: show 5 most recent stories
  const recentStories = stories.slice(0, 5);

  return (
    <div className="community-stories-page">
      <div className="stories-main">
        <h2>Community Stories</h2>
        {error && (
          <div className="error">
            {error} <button onClick={() => setError(null)}>x</button>
          </div>
        )}
        {showForm ? (
          <StoryForm
            initialData={editingStory}
            onSubmit={editingStory ? handleUpdate : handleCreate}
            onCancel={() => {
              setShowForm(false);
              setEditingStory(null);
            }}
          />
        ) : (
          <button className="post-story-btn" onClick={() => setShowForm(true)}>
            {editingStory ? "Edit Story" : "Post a Story"}
          </button>
        )}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="stories-list">
            {stories.length === 0 ? (
              <div>No stories yet.</div>
            ) : (
              stories.map((story) => (
                <StoryCard
                  key={story._id}
                  story={story}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </div>
        )}
      </div>
      <aside className="stories-sidebar">
        <h4>Recent Stories</h4>
        <ul>
          {recentStories.map((story) => (
            <li key={story._id} title={story.title}>
              <span role="img" aria-label="story">
                📖
              </span>{" "}
              {story.title.length > 30
                ? story.title.slice(0, 30) + "…"
                : story.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

// Wrap with provider
export default function CommunityStoriesPageWithStore() {
  return (
    <StoriesProvider>
      <CommunityStoriesPage />
    </StoriesProvider>
  );
}
