import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import PublicMoments from "../../components/PublicMoments/PublicMoments";
import DestinationModal from "../../components/DestinationModal/DestinationModal";
import { destinationsData } from "../../data/destinations";

const LandingPage = () => {
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const user = localStorage.getItem("user");

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredDestinations = Object.values(destinationsData).filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="landing-page">
      {/* SEO Title & Meta (handled by index.html ideally, but adding semantic tags here) */}

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span>🌄</span> Travel Diaries Nepal
          </Link>
          <div className="nav-buttons">
            <button className="btn btn-outline" onClick={() => {
              const el = document.getElementById('public-moments');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>Community Stories</button>
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <span className="hero-tag">Step into the extraordinary</span>
          <h1 className="hero-title">Document Your Journey Across Nepal</h1>
          <p className="hero-subtitle">
            The ultimate platform to capture memories, explore hidden gems, and relive your Himalayan adventures with the world.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary btn-large">Start Writing Your Story</Link>
            <Link to="/explore" className="btn btn-outline btn-large">Explore 100+ Destinations</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Experience excellence</span>
            <h2 className="section-title">Why Travel with Us</h2>
            <p className="section-subtitle">We provide the tools you need to make every journey unforgettable and every memory eternal.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-fade-in-up">
              <div className="feature-icon-wrapper">📝</div>
              <h3>Write Travel Diaries</h3>
              <p>Document your experiences with a rich-text editor, high-resolution photos, and precise geo-locations.</p>
            </div>
            <div className="feature-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon-wrapper">🗺️</div>
              <h3>Discover Hidden Gems</h3>
              <p>Go beyond the tourist trails with detailed guides for off-the-beaten-path locations and local secrets.</p>
            </div>
            <div className="feature-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon-wrapper">📸</div>
              <h3>Curate Your Legacy</h3>
              <p>Build a stunning digital portfolio of your travels to share with friends, family, or the entire community.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="public-moments">
        <PublicMoments />
      </section>

      {/* Search Header for Destinations */}
      <section className="search-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Find your next adventure</span>
            <h2 className="section-title">Popular Destinations</h2>
          </div>
          <div className="search-container">
            <div className="search-box">
              <span className="search-icon">�</span>
              <input
                type="text"
                placeholder="Search by city, landmark, or vibe..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="destinations">
        <div className="container">
          <div className="destinations-grid">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((d) => (
                <div key={d.id} className="destination-card" onClick={() => setSelected(d)}>
                  <img src={d.image} alt={d.name} className="destination-image" loading="lazy" />
                  <div className="destination-overlay">
                    <div className="destination-info">
                      <div className="destination-rating">
                        <span>★</span> {d.rating || "4.8"}
                      </div>
                      <h3>{d.name}</h3>
                      <p>{d.tagline}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '5rem 0' }}>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>No destinations match your search. Try "Pokhara" or "Everest".</p>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/explore" className="btn btn-outline btn-large">View All Destinations</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Simplified for you</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-icon-box">👤</div>
              <h3>Create Account</h3>
              <p>Sign up in seconds and build your personalized traveler profile.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-icon-box">✍️</div>
              <h3>Write Your Story</h3>
              <p>Add rich entries, stunning photo sets, and precise locations to your diary.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-icon-box">🌍</div>
              <h3>Share the Magic</h3>
              <p>Publish your stories to the community or keep them private for your legacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h2 className="cta-title">Your next great adventure <br /> starts with a single entry.</h2>
              <Link to="/signup" className="btn btn-primary btn-large">
                Create Your Free Diary Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DestinationModal destination={selected} onClose={() => setSelected(null)} />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>🌄 Travel Diaries Nepal</h2>
              <p>Preserving the spirit of Himalayan adventure through the power of collective storytelling. Every journey deserves to be remembered.</p>
              <div className="footer-socials">
                <a href="#" className="social-link">FB</a>
                <a href="#" className="social-link">IG</a>
                <a href="#" className="social-link">TW</a>
              </div>
            </div>
            <div>
              <h4 className="footer-title">Platform</h4>
              <ul className="footer-links">
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Destinations</h4>
              <ul className="footer-links">
                <li><a href="#">Pokhara</a></li>
                <li><a href="#">Everest Base Camp</a></li>
                <li><a href="#">Mustang</a></li>
                <li><a href="#">Chitwan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Travel Diaries Nepal. All rights reserved.
            </div>
            <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;