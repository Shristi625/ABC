import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const BandipurDiary = () => {
  const navigate = useNavigate();

  const bandipurLocation = {
    name: "Bandipur",
    district: "Tanahun",
    elevation: 1084,
    bestTime: "September to November, March to May",
    distance: "160 km from Kathmandu (3.5-4 hours)",
    tempRange: "8°C - 22°C",
  };

  const bandipurCoordinates = {
    lat: 27.924,
    lng: 84.325,
  };

  const bandipurWeather = {
    temp: 20,
    feelsLike: 18,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    uvIndex: 5,
    icon: "🌤️",
    forecast: [
      { day: "Tomorrow", high: 22, low: 16, icon: "⛅" },
      { day: "Thu", high: 20, low: 15, icon: "🌤️" },
      { day: "Fri", high: 18, low: 14, icon: "🌧️" },
      { day: "Sat", high: 19, low: 15, icon: "⛅" },
    ],
  };

  const bandipurImages = [
    {
      id: 1,
      url: "https://i.ytimg.com/vi/6I-dymfCuzA/maxresdefault.jpg",
      alt: "Bandipur hill town view",
      caption: "Bandipur town nestled in the hills",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional stone streets of Bandipur",
      caption: "Cobblestone streets of old Bandipur",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Old Newari architecture in Bandipur",
      caption: "Traditional Newari wood carvings",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Hilltop view from Bandipur",
      caption: "Panoramic view from Bandipur hilltop",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Café balcony in Bandipur",
      caption: "Morning coffee on a sunlit balcony",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Evening golden hour in Bandipur",
      caption: "Golden hour light on traditional houses",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet village life in Bandipur",
      caption: "Evening calm in the village square",
    },
  ];

  return (
    <div className="bandipur-diary">
      {/* Navigation */}
      <nav className="diary-navbar">
        <div className="navbar-content">
          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            <svg
              className="back-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <div className="navbar-logo">
            <span className="logo-text">TravelDiaries</span>
            <span className="logo-subtext">Bandipur Journal</span>
          </div>
          <div className="navbar-actions">
            <button className="nav-action">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 11h-5" />
              </svg>
              Print
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img
            src={bandipurImages[0].url}
            alt={bandipurImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Bandipur, Tanahun</span>
              <h1 className="hero-title">Bandipur – Aesthetic Hill Town</h1>
              <p className="hero-date">April 10, 2024 • 1 day • Clear, 20°C</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="diary-content" className="diary-main-content">
        <div className="content-container">
          {/* Introduction */}
          <section className="diary-intro">
            <div className="intro-text">
              <h2 className="section-title">A Walk Through Time</h2>
              <p className="lead-paragraph">
                Bandipur doesn't greet you—it welcomes you. The stone archway
                frames a street that seems to belong to another century, where
                time moves at the pace of footsteps and sunlight slowly crossing
                carved wooden windows.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={bandipurLocation}
            coordinates={bandipurCoordinates}
            weather={bandipurWeather}
          />

          {/* Image Grid 1 - Morning */}
          <section className="image-section">
            <h3 className="image-section-title">Morning in Stone Streets</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={bandipurImages[1].url} alt={bandipurImages[1].alt} />
                <p className="image-caption">{bandipurImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={bandipurImages[2].url} alt={bandipurImages[2].alt} />
                <p className="image-caption">{bandipurImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              I arrived in Bandipur early, when the morning mist still clung to
              the hills like a veil. The streets were empty, save for a
              shopkeeper sweeping his doorstep and the distant sound of prayer
              flags fluttering in the breeze. Each house told a story in wood
              and stone—intricate carvings of gods and flowers, windows that
              seemed to watch over generations.
            </p>
            <p>
              Walking through Bandipur feels like moving through a living
              museum, except the exhibits aren't behind glass. They're in the
              worn stone steps, the polished wood of doorways, the whitewashed
              walls turned gold by morning light. The air smells of wood smoke
              and something else—history, perhaps, or the quiet pride of
              preservation.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={bandipurImages[3].url} alt={bandipurImages[3].alt} />
              <div className="full-image-caption">
                <p>{bandipurImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              At a small café with a balcony overlooking the valley, I met an
              elderly man who'd lived in Bandipur all his life. "Tourists come
              for the view," he said, stirring his tea. "But the real beauty
              isn't in what you see. It's in what you feel. The quiet. The space
              between moments."
            </p>
            <p>
              He showed me old photographs—Bandipur in the 1960s, when it was a
              trading hub, then in the 80s, when the highway bypassed it and the
              town fell asleep. "Sometimes," he said, "being forgotten is a kind
              of blessing. It gives you time to remember who you are."
            </p>
          </section>

          {/* Image Grid 2 - Afternoon */}
          <section className="image-section">
            <h3 className="image-section-title">Afternoon Light & Calm</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={bandipurImages[4].url} alt={bandipurImages[4].alt} />
                <p className="image-caption">{bandipurImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={bandipurImages[5].url} alt={bandipurImages[5].alt} />
                <p className="image-caption">{bandipurImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              The afternoon was for photography, but not the hurried kind. I let
              the light guide me—down narrow alleyways where it fell in perfect
              rectangles on stone, through courtyards where it filtered through
              leaves, onto windowsills where it warmed weathered wood. Each
              corner revealed another composition, another moment worth holding.
            </p>
            <p>
              Bandipur teaches you to see differently. Not with the wide-eyed
              rush of a tourist, but with the patient gaze of someone who
              understands that beauty reveals itself slowly, to those willing to
              wait, to watch, to be still.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={bandipurImages[6].url} alt={bandipurImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {bandipurImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Stillness in the Hills</h3>
            <div className="conclusion-content">
              <p>
                As evening settled, lanterns were lit along the main street. The
                mountains turned to silhouettes against a fading sky, and the
                air grew cool. I sat on a stone wall, watching lights appear in
                homes below—each window a small story continuing in the dark.
              </p>
              <p>
                Bandipur didn't change me dramatically. It didn't offer grand
                revelations or life-altering moments. Instead, it gave me
                something quieter: the understanding that some places exist not
                to be conquered or checked off lists, but to be experienced
                gently, like reading a favorite book for the second time.
              </p>
              <p className="final-thought">
                In a world that moves too fast, Bandipur remembers how to be
                still. It holds time like a treasure, preserving not just
                architecture but a way of being—a reminder that sometimes, the
                most radical thing you can do is simply stay.
              </p>
            </div>
          </section>

          {/* Actions */}
          <div className="action-footer">
            <div className="action-buttons">
              <button className="action-btn primary-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Edit Entry
              </button>
              <ShareDownload
                title={bandipurLocation.name}
                elementId="diary-content"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="diary-footer">
        <div className="footer-content">
          <p className="footer-text">
            This diary entry was written in Bandipur, Nepal on April 10, 2024.
          </p>
          <div className="footer-links">
            <span>© 2024 TravelDiaries</span>
            <span>•</span>
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .bandipur-diary {
          min-height: 100vh;
          background: #fefefe;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #2c2c2c;
          line-height: 1.7;
        }

        /* Navigation */
        .diary-navbar {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #eaeaea;
          z-index: 100;
          padding: 1rem 0;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #555;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          border-color: #888;
          background: #f8f8f8;
        }

        .back-icon {
          stroke-width: 2;
        }

        .navbar-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #222;
        }

        .logo-subtext {
          font-size: 0.75rem;
          color: #777;
          margin-top: 2px;
          letter-spacing: 1px;
        }

        .navbar-actions {
          display: flex;
          gap: 1rem;
        }

        .nav-action {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .nav-action:hover {
          color: #222;
        }

        /* Hero Section */
        .hero-section {
          width: 100%;
          margin-bottom: 4rem;
        }

        .hero-image-container {
          position: relative;
          height: 70vh;
          min-height: 500px;
          max-height: 800px;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          display: flex;
          align-items: flex-end;
          padding: 3rem;
        }

        .hero-text {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          color: white;
        }

        .hero-location {
          font-size: 0.9rem;
          letter-spacing: 1px;
          opacity: 0.9;
          margin-bottom: 0.5rem;
          display: block;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 400;
          margin: 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .hero-date {
          font-size: 1rem;
          opacity: 0.8;
          margin-top: 1rem;
          font-family: 'Arial', sans-serif;
        }

        /* Main Content */
        .diary-main-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }

        .content-container {
          background: white;
        }

        /* Introduction */
        .diary-intro {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 400;
          color: #333;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #eee;
          padding-bottom: 0.5rem;
        }

        .lead-paragraph {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }

        /* Image Sections */
        .image-section {
          margin: 3rem 0;
        }

        .image-section-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: #444;
          margin-bottom: 1.5rem;
          text-align: center;
          font-family: 'Arial', sans-serif;
        }

        /* 2 Column Grid */
        .image-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 2rem 0;
        }

        .image-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .image-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          margin: 0;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.3s ease;
        }

        .image-card:hover .image-caption {
          opacity: 1;
          transform: translateY(0);
        }

        /* Full Width Image */
        .full-image-section {
          margin: 4rem 0;
        }

        .full-image-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
        }

        .full-image-card img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .full-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .full-image-caption p {
          margin: 0;
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Story Sections */
        .story-section {
          margin: 3rem 0;
        }

        .story-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: justify;
        }

        /* Final Image */
        .final-image-card {
          position: relative;
          margin: 4rem 0;
          border-radius: 12px;
          overflow: hidden;
          height: 400px;
        }

        .final-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85);
        }

        .final-image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .final-image-caption {
          color: white;
          font-size: 1.3rem;
          font-style: italic;
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          margin: 0;
        }

        /* Conclusion */
        .conclusion-section {
          margin: 4rem 0;
          padding: 2rem;
          background: #fafafa;
          border-radius: 12px;
          border-left: 4px solid #3498db;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #444;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .conclusion-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
        }

        .conclusion-content p {
          margin-bottom: 1.5rem;
        }

        .final-thought {
          font-style: italic;
          color: #666;
          border-left: 3px solid #ccc;
          padding-left: 1.5rem;
          margin-top: 2rem;
        }

        /* Action Footer */
        .action-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-btn {
          background: #2c3e50;
          color: white;
        }

        .primary-btn:hover {
          background: #1a252f;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: #f8f9fa;
          color: #333;
          border: 1px solid #ddd;
        }

        .secondary-btn:hover {
          background: #e9ecef;
          border-color: #ccc;
          transform: translateY(-2px);
        }

        .share-btn {
          background: #3498db;
          color: white;
        }

        .share-btn:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }

        /* Footer */
        .diary-footer {
          background: #2c3e50;
          color: white;
          padding: 3rem 2rem;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-text {
          font-size: 0.95rem;
          color: #bdc3c7;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .footer-links a {
          color: #ecf0f1;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          text-decoration: underline;
        }

        .footer-links span {
          color: #7f8c8d;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .image-grid-2col {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .hero-image-container {
            height: 50vh;
            min-height: 400px;
          }
          
          .hero-text {
            padding: 0 1rem;
          }
          
          .navbar-content {
            padding: 0 1rem;
          }
          
          .diary-main-content {
            padding: 0 1rem 3rem;
          }
          
          .full-image-card img {
            height: 400px;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          
          .action-btn {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .hero-image-container {
            height: 40vh;
            min-height: 300px;
          }
          
          .image-overlay {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BandipurDiary;
