import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";
import { logout } from "../../services/auth";
import { getMyTravelDiaries } from "../../services/travel-diary";

const Dashboard = () => {
  const navigate = useNavigate();
  const [recentEntries, setRecentEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    setIsLoading(true);
    getMyTravelDiaries()
      .then((res) => {
        setRecentEntries(res.data.data);
      })
      .catch((error) => {
        console.error("Failed to load travel diaries:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleNewEntry = () => {
    navigate("/create");
  };

  const handleViewAll = () => {
    // Navigate to all entries page or just scroll down
    const el = document.getElementById("private-collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="diary-dashboard">
      {/* Premium Navbar */}
      <nav className="dashboard-nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <div className="img">
              <img
                src="/logo/travel-logo-remove.png"
                alt="Travel Diaries Logo"
              />
            </div>
            <span className="logo-text">Travel Diaries</span>
          </Link>

          <div className="nav-links">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/dashboard" className="nav-link active">
              Dashboard
            </Link>
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
            <Link to="/community/stories" className="nav-link">
              Community Stories
            </Link>
            <button className="nav-cta" onClick={handleNewEntry}>
              Write Now
            </button>
            <div className="profile-dropdown">
              <button className="profile-trigger">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  <span>👤</span> Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <span>⚙️</span> Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  <span>🚪</span> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1 className="welcome-title">
            Welcome back, {user.fullName?.split(" ")[0] || "Explorer"} 👋
          </h1>
          <p className="welcome-subtitle">
            Your Himalayan journey continues here. Capture a new memory today.
          </p>
        </section>

        {/* Primary CTA Card */}
        <section className="cta-section">
          <div className="cta-glow"></div>
          <button className="write-button" onClick={handleNewEntry}>
            Start Writing Diary
          </button>
          <div className="cta-hint">
            Continue your journey where you left off.
          </div>
        </section>

        {/* Entries Section */}
        <section id="private-collection" className="recent-entries">
          <div className="section-header">
            <h2 className="section-title">Your Private Collection</h2>
            <button className="view-all-btn" onClick={handleViewAll}>
              View All <span>→</span>
            </button>
          </div>

          <div className="entries-grid">
            {isLoading ? (
              // Skeleton Loaders
              [1, 2, 3].map((i) => (
                <div key={i} className="entry-card skeleton-card">
                  <div className="entry-cover skeleton"></div>
                  <div className="entry-content">
                    <div className="skeleton title-skeleton"></div>
                    <div className="skeleton meta-skeleton"></div>
                    <div className="skeleton text-skeleton"></div>
                    <div className="skeleton text-skeleton"></div>
                  </div>
                </div>
              ))
            ) : recentEntries.length > 0 ? (
              recentEntries.map((entry) => {
                const entryId = entry._id || entry.id;
                const displayId = entryId
                  ? entryId.toString().slice(-4).toUpperCase()
                  : "xxxx";
                const displayDate = entry.createdAt || entry.date || new Date();

                return (
                  <article
                    key={entryId}
                    className="entry-card"
                    onClick={() => navigate(`/story/${entryId}`)}
                  >
                    <div
                      className="entry-cover"
                      style={{
                        backgroundImage: `url(${entry.coverImage || "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"})`,
                      }}
                    >
                      <div className="cover-overlay"></div>
                      <div className="entry-number">MEMOIR #{displayId}</div>
                    </div>
                    <div className="entry-content">
                      <h3 className="entry-title">
                        {entry.title || "Untitled Adventure"}
                      </h3>
                      <div className="entry-meta">
                        <span className="location">
                          📍 {entry.location || "Unknown Location"}
                        </span>
                        <span className="date">
                          📅 {new Date(displayDate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="entry-excerpt">
                        {entry.excerpt ||
                          entry.story?.slice(0, 100) +
                            (entry.story?.length > 100 ? "..." : "") ||
                          "No content provided..."}
                      </p>
                      <button className="read-btn">Read Entry</button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="empty-state-container">
                <div className="empty-state-icon">✍️</div>
                <h3>No stories yet</h3>
                <p>Your journey in Nepal is waiting to be written.</p>
                <button className="btn-primary" onClick={handleNewEntry}>
                  Write First Entry
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Dynamic Stats Panel */}
        <section className="diary-stats">
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">{recentEntries.length}</span>
              <span className="stat-label">Diaries Written</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Destinations Visited</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Adventure Life</span>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="dashboard-footer">
        <p>Travel Diaries Nepal · Documenting Himalayan journeys since 2024</p>
        <p className="footer-note">
          "Every mountain has a story. Every story belongs here."
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
