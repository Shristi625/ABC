import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const Dhulikhel = () => {
  const navigate = useNavigate();

  const dhulikhelLocation = {
    name: "Dhulikhel",
    district: "Kavre",
    elevation: 1550,
    bestTime: "September to November, March to May",
    distance: "30 km from Kathmandu (1-1.5 hours)",
    tempRange: "8°C - 25°C",
  };

  const dhulikhelCoordinates = {
    lat: 27.609,
    lng: 85.406,
  };

  const dhulikhelWeather = {
    temp: 18,
    feelsLike: 16,
    condition: "Mostly Clear",
    humidity: 60,
    windSpeed: 10,
    uvIndex: 6,
    icon: "🌤️",
    forecast: [
      { day: "Tomorrow", high: 20, low: 14, icon: "☀️" },
      { day: "Thu", high: 19, low: 13, icon: "🌤️" },
      { day: "Fri", high: 17, low: 12, icon: "🌥️" },
      { day: "Sat", high: 18, low: 13, icon: "🌤️" },
    ],
  };

  const dhulikhelImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Sunrise over Dhulikhel hills",
      caption: "First light touching the hills of Dhulikhel",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1526749837599-b4eba9fd5e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Dhulikhel town aerial view",
      caption: "Aerial view of Dhulikhel town",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Local village road",
      caption: "Quiet village road in Dhulikhel",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Himalayan range view",
      caption: "Himalayan peaks from Dhulikhel",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Tea shop / local life",
      caption: "Morning tea at a local shop",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over hills",
      caption: "Golden hour over the terraced fields",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Evening calm / blue hour",
      caption: "Evening calm in the hills",
    },
  ];

  return (
    <div className="dhulikhel-diary">
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
            <span className="logo-subtext">Dhulikhel Journal</span>
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
            src={dhulikhelImages[0].url}
            alt={dhulikhelImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Dhulikhel, Kavre, Nepal</span>
              <h1 className="hero-title">Calm Hills & Mountain Views</h1>
              <p className="hero-date">
                April 12, 2024 • 2 days • Cool Breeze, 17°C
              </p>
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
              <h2 className="section-title">Arrival in the Hills</h2>
              <p className="lead-paragraph">
                The road to Dhulikhel winds gently upward, each turn revealing
                another layer of terraced fields and distant hills. When I
                stepped out of the car, the air felt different—cleaner, quieter,
                as if the mountains had been breathing here for centuries.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={dhulikhelLocation}
            coordinates={dhulikhelCoordinates}
            weather={dhulikhelWeather}
          />

          {/* Image Grid 1 - Morning */}
          <section className="image-section">
            <h3 className="image-section-title">Morning Light</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={dhulikhelImages[1].url}
                  alt={dhulikhelImages[1].alt}
                />
                <p className="image-caption">{dhulikhelImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={dhulikhelImages[2].url}
                  alt={dhulikhelImages[2].alt}
                />
                <p className="image-caption">{dhulikhelImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              I woke before dawn, drawn by the promise of a silent morning. The
              world was still asleep—even the birds seemed hesitant to break the
              quiet. I walked along a dirt path that smelled of damp earth and
              pine, my footsteps the only sound in the crisp morning air.
            </p>
            <p>
              The sunrise didn't announce itself dramatically. It emerged
              slowly, painting the hills in soft gold, then warm orange, then
              the clear blue of day. The Himalayas appeared as faint outlines in
              the distance, white against the morning sky, looking less like
              mountains and more like clouds that had decided to stay.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={dhulikhelImages[3].url} alt={dhulikhelImages[3].alt} />
              <div className="full-image-caption">
                <p>{dhulikhelImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              I found a small tea shop where an elderly woman was already
              boiling water over a wood fire. "Morning chai?" she asked, as if
              we'd been expecting each other. We sat on wooden stools while she
              told me about Dhulikhel—how it used to be, how it's changing, how
              the mountains don't care about either.
            </p>
            <p>
              "People come for the view," she said, stirring sugar into my cup.
              "But they stay for the quiet." Her words stayed with me as I
              continued walking, noticing how the silence here wasn't empty but
              full—of space, of peace, of room to think.
            </p>
          </section>

          {/* Image Grid 2 - Afternoon */}
          <section className="image-section">
            <h3 className="image-section-title">Afternoon Wanderings</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={dhulikhelImages[4].url}
                  alt={dhulikhelImages[4].alt}
                />
                <p className="image-caption">{dhulikhelImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={dhulikhelImages[5].url}
                  alt={dhulikhelImages[5].alt}
                />
                <p className="image-caption">{dhulikhelImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              The afternoon was for getting lost—on purpose. I followed narrow
              paths between traditional Newari houses, past windows carved with
              stories I couldn't read but could feel. Farmers worked in terraced
              fields below, their movements slow and rhythmic, synchronized with
              the sun's journey across the sky.
            </p>
            <p>
              I met a shepherd moving his flock across a hillside. We didn't
              speak the same language, but we shared a smile and a moment
              watching his goats navigate the steep slope. There was a
              simplicity here that felt profound—life reduced to essentials:
              sun, soil, work, rest.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={dhulikhelImages[6].url} alt={dhulikhelImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {dhulikhelImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Evening Reflections</h3>
            <div className="conclusion-content">
              <p>
                As evening approached, I returned to the viewpoint. The sunset
                was gentle—a slow fading rather than a dramatic exit. The hills
                turned from green to blue to purple, as if being put to bed.
                Lights began to appear in the valley below, each one a home, a
                family, a story continuing in the gathering dark.
              </p>
              <p>
                Dhulikhel doesn't demand your attention like some places do. It
                doesn't have dramatic peaks or famous monuments. Instead, it
                offers something quieter: space to breathe, hills to
                contemplate, a rhythm of life that feels ancient and true.
              </p>
              <p className="final-thought">
                Sometimes travel isn't about seeing something spectacular.
                Sometimes it's about finding a place where you can hear yourself
                think. Dhulikhel is that place—a pause between mountains, a
                breath between thoughts, a gentle reminder that not every
                journey needs to be an adventure.
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
                title={dhulikhelLocation.name}
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
            This diary entry was written in Dhulikhel, Nepal on April 12, 2024.
            All photographs represent the peaceful beauty of these hills.
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

        .dhulikhel-diary {
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

export default Dhulikhel;
