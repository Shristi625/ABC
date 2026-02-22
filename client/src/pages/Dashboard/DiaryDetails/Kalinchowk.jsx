import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const KalinchowkDiary = () => {
  const navigate = useNavigate();

  const kalinchowkLocation = {
    name: "Kalinchowk",
    district: "Dolakha",
    elevation: 3530,
    bestTime: "May, September to October",
    distance: "160 km from Kathmandu",
    tempRange: "-5°C - 10°C",
  };

  const kalinchowkCoordinates = {
    lat: 27.8,
    lng: 86.2,
  };

  const kalinchowkWeather = {
    temp: 5,
    feelsLike: 2,
    condition: "Cold & Clear",
    humidity: 40,
    windSpeed: 25,
    uvIndex: 7,
    icon: "❄️",
  };

  const kalinchowkImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Snow-covered Kalinchowk hills",
      caption: "Snow-covered hills of Kalinchowk",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Kalinchowk Bhagwati Temple in snow",
      caption: "Kalinchowk Bhagwati Temple",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Snowfall on mountain trails",
      caption: "Snow-covered trail to the temple",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Cable car ride to Kalinchowk",
      caption: "Cable car ascending through snow",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Devotees and prayer flags in snow",
      caption: "Prayer flags in the winter wind",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over snow-covered hills",
      caption: "Golden sunset on white hills",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Cold evening sky at Kalinchowk",
      caption: "Evening calm in the snow",
    },
  ];

  return (
    <div className="kalinchowk-diary">
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
            <span className="logo-subtext">Kalinchowk Journal</span>
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
            src={kalinchowkImages[0].url}
            alt={kalinchowkImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">
                📍 Kalinchowk, Dolakha, Nepal
              </span>
              <h1 className="hero-title">
                Kalinchowk – Snowfall & Sacred Temple
              </h1>
              <p className="hero-date">
                January 18, 2024 • 2 days • Snowfall, -2°C
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
              <h2 className="section-title">White Silence on the Hills</h2>
              <p className="lead-paragraph">
                The world turned white as we climbed to Kalinchowk. Snow fell in
                gentle, persistent flakes, muting all sound except the crunch of
                boots on fresh powder and the distant ring of temple bells
                carried by the cold wind.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={kalinchowkLocation}
            coordinates={kalinchowkCoordinates}
            weather={kalinchowkWeather}
          />

          {/* Image Grid 1 - Morning */}
          <section className="image-section">
            <h3 className="image-section-title">The Temple in Snow</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={kalinchowkImages[1].url}
                  alt={kalinchowkImages[1].alt}
                />
                <p className="image-caption">{kalinchowkImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={kalinchowkImages[2].url}
                  alt={kalinchowkImages[2].alt}
                />
                <p className="image-caption">{kalinchowkImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The journey to Kalinchowk was slow, each step sinking into fresh
              snow. The air bit with cold, and my breath formed clouds that hung
              briefly in the still morning before dissipating. The temple
              appeared through the falling snow like a vision—a simple structure
              made sacred not by grandeur but by location, by faith, by the
              sheer effort it takes to reach it in winter.
            </p>
            <p>
              Inside, a priest was lighting butter lamps, their warm glow
              contrasting with the cold white world outside. The air smelled of
              incense and wet wool. Devotees prayed in whispers, their words
              seeming to hang in the cold air before rising with the smoke
              toward the carved wooden ceiling. I joined them briefly, not
              sharing their specific beliefs but understanding their need for
              high places, for places where earth feels closer to sky.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img
                src={kalinchowkImages[3].url}
                alt={kalinchowkImages[3].alt}
              />
              <div className="full-image-caption">
                <p>{kalinchowkImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              At a small tea stall huddled against the cold, I warmed my hands
              around a metal cup of sweet milky tea. The owner, a woman with
              cheeks red from wind, told me she's been coming to Kalinchowk for
              thirty winters. "The snow never gets old," she said, stirring a
              pot on a gas stove. "Each year it's different. Like God is
              painting the same mountains but changing the colors."
            </p>
            <p>
              We talked about faith and cold, about how hardship seems to
              sharpen devotion. "People don't come here in winter for comfort,"
              she said. "They come because comfort isn't the point. The point is
              to feel something real—the cold, the effort, the quiet. Everything
              else follows from that."
            </p>
          </section>

          {/* Image Grid 2 - Afternoon */}
          <section className="image-section">
            <h3 className="image-section-title">Winter Devotion</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={kalinchowkImages[4].url}
                  alt={kalinchowkImages[4].alt}
                />
                <p className="image-caption">{kalinchowkImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={kalinchowkImages[5].url}
                  alt={kalinchowkImages[5].alt}
                />
                <p className="image-caption">{kalinchowkImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              The afternoon was for walking through the silent white world. Snow
              fell steadily, covering tracks almost as soon as they were made.
              The only sounds were the soft thud of snow falling from pine
              branches and the occasional distant bell from the temple. I
              watched devotees make their way up the path, each step an act of
              faith, each breath visible proof of life in the cold.
            </p>
            <p>
              There's a particular beauty to winter devotion—the contrast
              between the warmth of faith and the cold of the world, between
              colorful prayer flags and white snow, between human persistence
              and indifferent weather. In Kalinchowk, belief isn't abstract.
              It's in cold fingers holding prayer beads, in boots making paths
              through snow, in voices raised in song despite frozen lips.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img
                src={kalinchowkImages[6].url}
                alt={kalinchowkImages[6].alt}
              />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {kalinchowkImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Faith in the Snow</h3>
            <div className="conclusion-content">
              <p>
                As evening came, the snow stopped and the clouds parted briefly.
                The setting sun painted the white hills pink, then gold, then
                blue as shadows lengthened across the snow. The temple bells
                rang the evening prayer, their sound carrying farther in the
                cold, clear air. Below, lights appeared in the lodge windows,
                promises of warmth and rest.
              </p>
              <p>
                Kalinchowk taught me that sometimes faith isn't about comfort
                but about encountering something larger than comfort—the cold,
                the height, the silence. That sometimes the most sacred spaces
                aren't the easiest to reach, and perhaps that's the point. The
                effort becomes part of the prayer.
              </p>
              <p className="final-thought">
                We spend our lives seeking warmth and ease, but sometimes we
                need the cold to remind us we can endure. We need the silence to
                hear our own thoughts. We need the white emptiness to appreciate
                the small flames of human warmth, human connection, human faith
                that persists even in the deepest winter.
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
                title={kalinchowkLocation.name}
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
            This diary entry was written in Kalinchowk, Nepal on January 18,
            2024.
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

        .kalinchowk-diary {
          min-height: 100vh;
          background: #f8fafc;
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
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        /* Introduction */
        .diary-intro {
          margin-bottom: 3rem;
          padding-top: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 400;
          color: #333;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #e8f4fc;
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
          padding: 0 2rem;
        }

        .image-section-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: #2c5282;
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
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
          padding: 0 2rem;
        }

        .full-image-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
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
          padding: 0 2rem;
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
          background: #f0f9ff;
          border-radius: 12px;
          border-left: 4px solid #63b3ed;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #2c5282;
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
          color: #4a5568;
          border-left: 3px solid #a0aec0;
          padding-left: 1.5rem;
          margin-top: 2rem;
        }

        /* Action Footer */
        .action-footer {
          margin-top: 4rem;
          padding: 2rem;
          border-top: 1px solid #e2e8f0;
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
          background: #2c5282;
          color: white;
        }

        .primary-btn:hover {
          background: #2a4365;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: #f7fafc;
          color: #333;
          border: 1px solid #cbd5e0;
        }

        .secondary-btn:hover {
          background: #edf2f7;
          border-color: #a0aec0;
          transform: translateY(-2px);
        }

        .share-btn {
          background: #4299e1;
          color: white;
        }

        .share-btn:hover {
          background: #3182ce;
          transform: translateY(-2px);
        }

        /* Footer */
        .diary-footer {
          background: #2d3748;
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
          color: #cbd5e0;
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
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          text-decoration: underline;
        }

        .footer-links span {
          color: #a0aec0;
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
            padding: 0 0 3rem;
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
          
          .image-section,
          .story-section,
          .full-image-section {
            padding: 0 1rem;
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
          
          .conclusion-section {
            margin: 2rem 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default KalinchowkDiary;
