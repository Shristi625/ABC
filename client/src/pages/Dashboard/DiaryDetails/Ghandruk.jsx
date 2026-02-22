import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const GhandrukDiary = () => {
  const navigate = useNavigate();

  const ghandrukLocation = {
    name: "Ghandruk",
    district: "Kaski",
    elevation: 1950,
    bestTime: "October to November",
    distance: "210 km from Kathmandu",
    tempRange: "7°C - 20°C",
  };

  const ghandrukCoordinates = {
    lat: 28.4,
    lng: 83.9,
  };

  const ghandrukWeather = {
    temp: 16,
    feelsLike: 14,
    condition: "Pleasant",
    humidity: 60,
    windSpeed: 10,
    uvIndex: 6,
    icon: "🌤️",
  };

  const ghandrukImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Ghandruk village with Annapurna range in background",
      caption: "Ghandruk village beneath Annapurna",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional Gurung stone houses in Ghandruk",
      caption: "Stone houses with slate roofs",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Stone-paved pathways in Ghandruk village",
      caption: "Ancient pathways through the village",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Annapurna South and Machhapuchhre view from Ghandruk",
      caption: "Machhapuchhre (Fishtail Mountain) from Ghandruk",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Local Gurung woman weaving in Ghandruk",
      caption: "Traditional weaving in the village",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over Annapurna range from Ghandruk",
      caption: "Evening colors on the mountains",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet evening scene in Ghandruk village",
      caption: "Peaceful evening in the mountains",
    },
  ];

  return (
    <div className="ghandruk-diary">
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
            <span className="logo-subtext">Ghandruk Journal</span>
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
            src={ghandrukImages[0].url}
            alt={ghandrukImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Ghandruk, Kaski, Nepal</span>
              <h1 className="hero-title">
                Ghandruk – Gurung Village & Mountain Views
              </h1>
              <p className="hero-date">
                April 6, 2024 • 2 days • Clear Sky, 17°C
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
              <h2 className="section-title">A Village Beneath the Peaks</h2>
              <p className="lead-paragraph">
                Ghandruk is a world of stone, sky, and mountains. Traditional
                Gurung houses cling to the hillside, their slate roofs stepping
                down the slope toward the valley, while above them, the
                Annapurna range stands in silent majesty.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={ghandrukLocation}
            coordinates={ghandrukCoordinates}
            weather={ghandrukWeather}
          />

          {/* Image Grid 1 - Village Life */}
          <section className="image-section">
            <h3 className="image-section-title">Stone & Tradition</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={ghandrukImages[1].url} alt={ghandrukImages[1].alt} />
                <p className="image-caption">{ghandrukImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={ghandrukImages[2].url} alt={ghandrukImages[2].alt} />
                <p className="image-caption">{ghandrukImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The path to Ghandruk winds through rhododendron forests and across
              stone bridges over clear streams. Then suddenly, the forest opens,
              and the village appears—a cascade of stone houses spilling down
              the mountainside. The first sound is not traffic, but the rhythmic
              tapping of a woodcarver, the distant bleat of goats, the quiet
              murmur of voices from an open window.
            </p>
            <p>
              I walked through narrow pathways paved with flat stones worn
              smooth by generations of footsteps. Each house had its own
              character—some with intricately carved wooden windows, others with
              courtyards filled with blooming flowers, all with the same gray
              slate roofs that seemed to grow naturally from the mountain. The
              air smelled of woodsmoke, damp earth, and the faint scent of pine
              from the surrounding forest.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={ghandrukImages[3].url} alt={ghandrukImages[3].alt} />
              <div className="full-image-caption">
                <p>{ghandrukImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              At a small tea house, I met an elderly Gurung woman weaving on a
              traditional loom. Her hands moved with practiced ease as she
              created patterns that, she told me, told stories of her family's
              history. "Each pattern has meaning," she said, her eyes not
              leaving her work. "This one is for the mountains, this for the
              river, this for our ancestors who first settled here."
            </p>
            <p>
              She offered me tea in a metal cup, sweet and milky, and we talked
              about life in Ghandruk. "People come here for the mountains," she
              said, "but they stay for the village. The mountains are always
              there, beautiful but distant. The village is alive. It's children
              playing, women weaving, men returning from the fields. It's where
              life happens, at the foot of the giants."
            </p>
          </section>

          {/* Image Grid 2 - People & Culture */}
          <section className="image-section">
            <h3 className="image-section-title">Living with the Mountains</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={ghandrukImages[4].url} alt={ghandrukImages[4].alt} />
                <p className="image-caption">{ghandrukImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={ghandrukImages[5].url} alt={ghandrukImages[5].alt} />
                <p className="image-caption">{ghandrukImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              I spent the afternoon walking to viewpoints where the entire
              Annapurna range spread before me. Machhapuchhre, the "Fishtail
              Mountain," dominated the view, its distinctive peak piercing the
              clear blue sky. From Ghandruk, the mountains felt close enough to
              touch, yet their scale was humbling. People here live with this
              view every day—waking to it, working beneath it, seeing it change
              with the light.
            </p>
            <p>
              Back in the village as evening approached, the light turned
              golden. Smoke from cooking fires rose straight into the still air.
              Children played in the courtyards, their laughter echoing off the
              stone walls. Men returned from the fields, hoisters of grass on
              their backs. There was a rhythm to this life, a rhythm set not by
              clocks but by sunlight, seasons, and the needs of the land.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={ghandrukImages[6].url} alt={ghandrukImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {ghandrukImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">
              Life at the Foot of the Mountains
            </h3>
            <div className="conclusion-content">
              <p>
                As darkness fell, stars appeared above the black silhouette of
                the mountains. Without city lights, the sky was a vast expanse
                of glittering points. From my guesthouse window, I could see a
                few lamps still burning in the village below—small points of
                warmth in the cool mountain night. The only sounds were the
                occasional bark of a dog and the constant whisper of the wind
                through the pines.
              </p>
              <p>
                Ghandruk taught me that the most breathtaking views are best
                appreciated from a place of lived experience. The mountains
                aren't just scenery here; they're neighbors. They're the reason
                for the stone houses, the terraced fields, the careful balance
                of life on steep slopes. They provide water, define weather,
                shape culture.
              </p>
              <p className="final-thought">
                In our modern lives, we often separate nature from daily living.
                But in Ghandruk, they're inseparable. You carry water from a
                mountain spring, cook with wood from mountain forests, sleep
                beneath mountain shadows. The grandeur isn't something you
                visit; it's something you live within. And perhaps that's the
                truest way to appreciate beauty—not as a spectator, but as a
                participant in the landscape.
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
                title={ghandrukLocation.name}
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
            This diary entry was written in Ghandruk, Nepal on April 6, 2024.
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

        .ghandruk-diary {
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
          color: #2f855a;
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
          background: #f0fff4;
          border-radius: 12px;
          border-left: 4px solid #68d391;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #276749;
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
          background: #2f855a;
          color: white;
        }

        .primary-btn:hover {
          background: #276749;
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

export default GhandrukDiary;
