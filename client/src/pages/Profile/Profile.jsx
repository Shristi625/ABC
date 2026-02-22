import React, { useState, useEffect } from "react";
import "./Profile.css";
import { getUserProfile, updateUserProfile } from "../../services/user";
import { getMyTravelDiaries } from "../../services/travel-diary";

const Profile = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [diaries, setDiaries] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState({
    fullName: "",
    displayName: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const fileInputRef = React.useRef(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      // Fetch user profile
      const userResponse = await getUserProfile();
      setUser(userResponse.data.data);
      setEditData({
        fullName: userResponse.data.data.fullName || "",
        displayName: userResponse.data.data.displayName || "",
      });
      setAvatarPreview(userResponse.data.data.avatar || null);

      // Fetch user's diaries
      const diariesResponse = await getMyTravelDiaries();
      setDiaries(diariesResponse.data.data || []);
    } catch (error) {
      console.error("Failed to load profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    // Set the current avatar as preview when opening edit modal
    setAvatarPreview(user.avatar || null);
    setAvatarFile(null);
    setIsEditMode(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsUpdating(true);
    try {
      const formData = new FormData();
      formData.append("fullName", editData.fullName);
      formData.append("displayName", editData.displayName);

      if (avatarFile) {
        console.log("Avatar file selected:", avatarFile);
        formData.append("avatar", avatarFile);
      } else {
        console.log("No avatar file selected");
      }

      console.log("FormData keys:", Array.from(formData.keys()));
      console.log("FormData values:", Array.from(formData.entries()));
      console.log("Sending update request to backend...");
      const response = await updateUserProfile(formData);
      console.log("Backend response:", response.data);

      const updatedUser = response.data.data;
      console.log("Updated user avatar:", updatedUser.avatar);
      setUser(updatedUser);
      setAvatarPreview(updatedUser.avatar || null);
      setIsEditMode(false);
      setAvatarFile(null);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      console.error("Error response from backend:", error.response?.data);
      alert(
        error.response?.data?.message ||
          "Failed to update profile. Please try again.",
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setAvatarFile(null);
    setAvatarPreview(user.avatar || null);
    setEditData({
      fullName: user.fullName || "",
      displayName: user.displayName || "",
    });
  };

  const [favoriteDiaries, setFavoriteDiaries] = useState([
    {
      id: 1,
      title: "First Sunrise at Sarangkot",
      date: "April 2023",
      destination: "Pokhara",
      excerpt:
        "Woke up at 4 AM to witness the golden rays hitting the Annapurna range...",
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      title: "Temple Hopping in Bhaktapur",
      date: "November 2023",
      destination: "Bhaktapur",
      excerpt:
        "Spent a day exploring ancient courtyards and learning about Newari culture...",
      likes: 32,
      comments: 8,
    },
    {
      id: 3,
      title: "Trek to Ghorepani",
      date: "February 2024",
      destination: "Annapurna Region",
      excerpt:
        "Four days of rhododendron forests, friendly teahouses, and breathtaking views...",
      likes: 67,
      comments: 15,
    },
  ]);

  const [visitedPlaces] = useState([
    { name: "Kathmandu", coords: { x: 60, y: 50 }, type: "city" },
    { name: "Pokhara", coords: { x: 45, y: 45 }, type: "city" },
    { name: "Annapurna Base Camp", coords: { x: 40, y: 35 }, type: "mountain" },
    { name: "Chitwan", coords: { x: 70, y: 65 }, type: "jungle" },
    { name: "Nagarkot", coords: { x: 65, y: 55 }, type: "hill" },
    { name: "Lumbini", coords: { x: 55, y: 70 }, type: "temple" },
    { name: "Mustang", coords: { x: 25, y: 40 }, type: "desert" },
    { name: "Rara Lake", coords: { x: 15, y: 35 }, type: "lake" },
    { name: "Everest Base Camp", coords: { x: 75, y: 25 }, type: "mountain" },
    { name: "Bhaktapur", coords: { x: 62, y: 52 }, type: "city" },
    { name: "Patan", coords: { x: 63, y: 51 }, type: "city" },
    { name: "Ghandruk", coords: { x: 42, y: 43 }, type: "village" },
  ]);

  const handleEditProfile = () => {
    alert("Profile editing would open a modal or separate page");
  };

  const handleViewDiary = (diaryId) => {
    console.log("Viewing diary:", diaryId);
    // Navigation would happen here
  };

  const handlePlaceClick = (placeName) => {
    console.log("Clicked on:", placeName);
    // Could filter diaries by this place
  };
  if (loading) {
    return (
      <div className="profile-page">
        <main className="profile-main">
          <div className="container">
            <div className="loading-state">Loading profile...</div>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page">
        <main className="profile-main">
          <div className="container">
            <div className="error-state">Failed to load profile</div>
          </div>
        </main>
      </div>
    );
  }

  const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  return (
    <div className="profile-page">
      {/* Edit Profile Modal */}
      {isEditMode && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <div className="modal-header">
              <h2>Edit Profile</h2>
              <button
                className="close-button"
                onClick={handleCancel}
                disabled={isUpdating}
              >
                ✕
              </button>
            </div>

            <div className="modal-content">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={editData.fullName}
                  onChange={handleEditChange}
                  placeholder="Enter your full name"
                  disabled={isUpdating}
                />
              </div>

              <div className="form-group">
                <label htmlFor="displayName">Display Name</label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={editData.displayName}
                  onChange={handleEditChange}
                  placeholder="How you want to be known"
                  disabled={isUpdating}
                />
              </div>

              <div className="form-group">
                <label htmlFor="avatar">Avatar Image</label>
                <div
                  className="file-upload-wrapper"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="avatar"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setAvatarFile(file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setAvatarPreview(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    disabled={isUpdating}
                  />
                  <div className="file-upload-hint">
                    📷 Click to select or drag and drop your avatar
                  </div>
                </div>
              </div>

              {avatarPreview && (
                <div className="avatar-preview">
                  <p>Preview:</p>
                  <img src={avatarPreview} alt="Avatar preview" />
                </div>
              )}
            </div>

            <div className="modal-actions">
              <button
                className="cancel-button"
                onClick={handleCancel}
                disabled={isUpdating}
              >
                Cancel
              </button>
              <button
                className="save-button"
                onClick={handleSaveProfile}
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="profile-main">
        <div className="container">
          {/* Profile Header */}
          <section className="profile-header">
            <div className="profile-avatar-container">
              <div className="profile-avatar">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User avatar"
                    className="avatar-image"
                  />
                ) : (
                  <span className="avatar-initial">
                    {(user.fullName ||
                      user.displayName ||
                      "A")[0].toUpperCase()}
                  </span>
                )}
              </div>
              <div className="profile-badge">Explorer</div>
            </div>

            <div className="profile-info">
              <h1 className="profile-name">
                {user.fullName || user.displayName || "Traveler"}
              </h1>
              <p className="profile-bio">
                {user.bio || "Exploring Nepal, one adventure at a time."}
              </p>
              <div className="profile-meta">
                <span className="meta-item">📧 {user.email}</span>
                <span className="meta-item">📅 Joined {joinDate}</span>
              </div>
            </div>

            <button
              className="edit-profile-button"
              onClick={handleEditClick}
              disabled={isEditMode}
            >
              Edit Profile
            </button>
          </section>

          {/* Travel Summary */}
          <section className="travel-summary">
            <h2 className="section-title">My Travel Journey</h2>
            <p className="section-subtitle">
              A personal look at your adventures in Nepal
            </p>

            <div className="summary-cards">
              <div className="summary-card">
                <div className="summary-icon">🗺️</div>
                <div className="summary-content">
                  <div className="summary-number">{visitedPlaces.length}</div>
                  <div className="summary-label">Places Visited</div>
                  <div className="summary-description">
                    Across Nepal's diverse landscapes
                  </div>
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-icon">📝</div>
                <div className="summary-content">
                  <div className="summary-number">{diaries.length}</div>
                  <div className="summary-label">Diary Entries</div>
                  <div className="summary-description">
                    Stories captured forever
                  </div>
                </div>
              </div>

              <div className="summary-card">
                <div className="summary-icon">⏳</div>
                <div className="summary-content">
                  <div className="summary-number">
                    {new Date(user.createdAt).getFullYear()}
                  </div>
                  <div className="summary-label">Journey Began</div>
                  <div className="summary-description">
                    Year I started exploring Nepal
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map View */}
          <section className="travel-map-section">
            <div className="section-header">
              <h2 className="section-title">My Nepal Journey</h2>
              <p className="section-subtitle">Places that hold my memories</p>
            </div>

            <div className="map-container">
              <div className="map-image">
                {/* Simplified Nepal map with dots */}
                <div className="nepal-outline">
                  {visitedPlaces.map((place, index) => (
                    <button
                      key={index}
                      className={`map-pin ${place.type}`}
                      style={{
                        left: `${place.coords.x}%`,
                        top: `${place.coords.y}%`,
                      }}
                      onClick={() => handlePlaceClick(place.name)}
                      title={place.name}
                    >
                      <span className="pin-dot"></span>
                      <span className="pin-label">{place.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="map-legend">
                <div className="legend-item">
                  <span className="legend-dot city"></span>
                  <span>Cities & Towns</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot mountain"></span>
                  <span>Mountain Treks</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot nature"></span>
                  <span>Nature & Culture</span>
                </div>
              </div>
            </div>

            <div className="places-summary">
              <p>
                You've explored{" "}
                <strong>{visitedPlaces.length} special places</strong> across
                Nepal, from the Himalayan peaks to the Terai plains.
              </p>
            </div>
          </section>

          {/* Saved Diaries */}
          <section className="saved-diaries">
            <div className="section-header">
              <h2 className="section-title">Cherished Memories</h2>
              <p className="section-subtitle">
                Your most meaningful travel stories
              </p>
            </div>

            {diaries.length > 0 ? (
              <div className="diaries-grid">
                {diaries.slice(0, 3).map((diary) => (
                  <div key={diary._id} className="diary-card">
                    <div className="diary-header">
                      <div className="diary-meta">
                        <span className="diary-date">
                          {new Date(
                            diary.travelDate || diary.createdAt,
                          ).toLocaleDateString()}
                        </span>
                        <span className="diary-destination">
                          📍 {diary.location || "Nepal"}
                        </span>
                      </div>
                    </div>

                    <h3 className="diary-title">{diary.title}</h3>
                    <p className="diary-excerpt">
                      {diary.story?.substring(0, 100)}...
                    </p>

                    <button
                      className="read-story-button"
                      onClick={() => handleViewDiary(diary._id)}
                    >
                      Read Full Story →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-diaries">
                <div className="empty-icon">📝</div>
                <h3>Your stories are waiting</h3>
                <p>Start writing your first travel diary to see it here</p>
                <button className="start-writing-button">Start Writing</button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
