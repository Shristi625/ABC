import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { logout } from "../../services/auth"; // Import logout service

const Header = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // State for profile dropdown
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const profileTimeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDestinationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (destinationsOpen || profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [destinationsOpen, profileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handlePlanTrip = () => {
    navigate("/plan");
    closeMenu();
  };

  const handleAITravelPlanner = () => {
    setTimeout(() => {
      const chatbotToggle = document.querySelector(".chatbot__toggle");
      if (chatbotToggle) {
        chatbotToggle.click();
      }
    }, 100);
    closeMenu();
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
      });
  };

  const destinationCategories = {
    hills: [
      { name: "Nagarkot", path: "/destination/nagarkot" },
      { name: "Dhulikhel", path: "/destination/dhulikhel" },
      { name: "Bandipur", path: "/destination/bandipur" },
      { name: "Daman", path: "/destination/daman" },
    ],
    mountains: [
      { name: "Annapurna Base Camp", path: "/destination/annapurna-base-camp" },
      { name: "Poon Hill", path: "/destination/poonhill" },
      { name: "Kalinchowk", path: "/destination/kalinchowk" },
      { name: "Langtang", path: "/destination/langtang" },
    ],
    "cultural-towns": [
      { name: "Kathmandu", path: "/destination/kathmandu" },
      { name: "Patan", path: "/destination/patan" },
      { name: "Bandipur", path: "/destination/bandipur" },
      { name: "Tansen", path: "/destination/tansen" },
    ],
    "hidden-gems": [
      { name: "Ilam", path: "/destination/ilam" },
      { name: "Sailung", path: "/destination/sailung" },
      { name: "Jaljala", path: "/destination/jaljala" },
      { name: "Bhedetar", path: "/destination/bhedetar" },
    ],
  };

  return (
    <header className={`header header--${variant}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <div className="img">
            <img src="/logo/travel-logo-remove.png" alt="Logo" />
          </div>
          <span className="header__logo-text">Travel Diaries</span>
        </Link>

        <button
          className="header__menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <Link to="/" className="header__link" onClick={closeMenu}>
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div
            className="header__dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setDestinationsOpen(true)}
            onMouseLeave={() => setDestinationsOpen(false)}
          >
            <button
              className="header__link header__link--dropdown"
              onClick={() => setDestinationsOpen(!destinationsOpen)}
            >
              Destinations
              <span className="header__dropdown-arrow">▼</span>
            </button>
            {destinationsOpen && (
              <div className="header__dropdown-menu">
                <div className="header__dropdown-section">
                  <h4 className="header__dropdown-title">Hills</h4>
                  {destinationCategories.hills.map((dest) => (
                    <Link
                      key={dest.path}
                      to={dest.path}
                      className="header__dropdown-item"
                      onClick={closeMenu}
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
                <div className="header__dropdown-section">
                  <h4 className="header__dropdown-title">Mountains</h4>
                  {destinationCategories.mountains.map((dest) => (
                    <Link
                      key={dest.path}
                      to={dest.path}
                      className="header__dropdown-item"
                      onClick={closeMenu}
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
                <div className="header__dropdown-section">
                  <h4 className="header__dropdown-title">Cultural Towns</h4>
                  {destinationCategories["cultural-towns"].map((dest) => (
                    <Link
                      key={dest.path}
                      to={dest.path}
                      className="header__dropdown-item"
                      onClick={closeMenu}
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
                <div className="header__dropdown-section">
                  <h4 className="header__dropdown-title">Hidden Gems</h4>
                  {destinationCategories["hidden-gems"].map((dest) => (
                    <Link
                      key={dest.path}
                      to={dest.path}
                      className="header__dropdown-item"
                      onClick={closeMenu}
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/food" className="header__link" onClick={closeMenu}>
            Food & Local Eats
          </Link>

          <button
            className="header__link header__link--button"
            onClick={handleAITravelPlanner}
          >
            AI Travel Planner
          </button>

          <Link to="/dashboard" className="header__link" onClick={closeMenu}>
            Dashboard
          </Link>

          <Link to="/explore" className="header__link" onClick={closeMenu}>
            Explore
          </Link>

          <Link to="/create" className="header__link" onClick={closeMenu}>
            Write
          </Link>

          <Link to="/community" className="header__link" onClick={closeMenu}>
            Community
          </Link>

          <button className="header__cta" onClick={handlePlanTrip}>
            <span>✨</span> Plan My Trip
          </button>

          {/* User Profile Dropdown */}
          <div
            className="header__profile"
            ref={profileRef}
            onMouseEnter={() => {
              if (profileTimeoutRef.current)
                clearTimeout(profileTimeoutRef.current);
              setProfileOpen(true);
            }}
            onMouseLeave={() => {
              profileTimeoutRef.current = setTimeout(() => {
                setProfileOpen(false);
              }, 200);
            }}
          >
            <button
              className="header__profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <span role="img" aria-label="user">
                👤
              </span>
            </button>

            {profileOpen && (
              <div
                className="header__profile-menu"
                onMouseEnter={() => {
                  if (profileTimeoutRef.current)
                    clearTimeout(profileTimeoutRef.current);
                }}
              >
                <Link
                  to="/profile"
                  className="header__profile-link"
                  onClick={closeMenu}
                >
                  My Profile
                </Link>
                <Link
                  to="/settings"
                  className="header__profile-link"
                  onClick={closeMenu}
                >
                  Settings
                </Link>
                <button
                  className="header__profile-logout"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
