import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const ChandragiriDiary = () => {
  const navigate = useNavigate();

  const chandragiriLocation = {
    name: "Chandragiri",
    district: "Kathmandu",
    elevation: 2551,
    bestTime: "October to November",
    distance: "15 km from Kathmandu",
    tempRange: "8°C - 20°C",
  };

  const chandragiriCoordinates = {
    lat: 27.6,
    lng: 85.3,
  };

  const chandragiriWeather = {
    temp: 14,
    feelsLike: 12,
    condition: "Clear",
    humidity: 55,
    windSpeed: 14,
    uvIndex: 7,
    icon: "☀️",
  };

  const chandragiriImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519861531473-9c0d0a160259?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Cable car view at Chandragiri Hills",
      caption: "Cable car ascending to Chandragiri Hills",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Kathmandu Valley view from above",
      caption: "Kathmandu Valley from Chandragiri viewpoint",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Chandragiri temple area",
      caption: "Bhaleshwor Mahadev Temple area",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Hilltop viewpoint at Chandragiri",
      caption: "Viewpoint overlooking the valley",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Peaceful walking path at Chandragiri",
      caption: "Walking path through peaceful hills",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over Kathmandu Valley",
      caption: "Sunset colors over the valley",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Evening calm at Chandragiri",
      caption: "Evening calm on the hills",
    },
  ];

  return (
    <div className="chandragiri-diary">
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
            <span className="logo-subtext">Chandragiri Journal</span>
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
            src={chandragiriImages[0].url}
            alt={chandragiriImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">
                📍 Chandragiri Hills, Kathmandu
              </span>
              <h1 className="hero-title">
                Chandragiri Hills – Cable Car & Valley View
              </h1>
              <p className="hero-date">
                March 30, 2024 • Half day • Clear Sky, 19°C
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
              <h2 className="section-title">Above the Valley</h2>
              <p className="lead-paragraph">
                The cable car to Chandragiri is a gentle ascent above the city.
                As you rise, the noise of Kathmandu fades into a distant hum,
                replaced by the quiet whir of the cable and the growing space
                between you and the world below.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={chandragiriLocation}
            coordinates={chandragiriCoordinates}
            weather={chandragiriWeather}
          />

          {/* Image Grid 1 - Morning */}
          <section className="image-section">
            <h3 className="image-section-title">Valley Views</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={chandragiriImages[1].url}
                  alt={chandragiriImages[1].alt}
                />
                <p className="image-caption">{chandragiriImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={chandragiriImages[2].url}
                  alt={chandragiriImages[2].alt}
                />
                <p className="image-caption">{chandragiriImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              I arrived at the cable car station early, wanting to avoid the
              crowds. The ride itself was smooth, a gentle lifting away from the
              city's chaos. Through the glass cabin, Kathmandu spread out
              below—a patchwork of rooftops, streets, and temples growing
              smaller with each passing moment. The air grew cooler, cleaner,
              carrying the scent of pine.
            </p>
            <p>
              At the top, the world opened up. The valley lay below like a
              living map, the city's haze giving way to clear views of distant
              mountains. I walked toward Bhaleshwor Mahadev Temple, its white
              walls standing against the blue sky. The atmosphere was different
              up here—quieter, calmer, as if the elevation filtered out not just
              sound but hurry itself.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img
                src={chandragiriImages[3].url}
                alt={chandragiriImages[3].alt}
              />
              <div className="full-image-caption">
                <p>{chandragiriImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              I found a quiet spot on a stone wall near the viewpoint. Below,
              Kathmandu continued its daily rhythm—cars moving like toys,
              buildings catching the sunlight, life unfolding at a distance. Up
              here, the only movement was the wind through pine trees and the
              occasional prayer flag fluttering.
            </p>
            <p>
              A family nearby was taking photos, their laughter carrying on the
              breeze. An elderly couple sat in silence, watching the valley with
              the patient gaze of those who've learned to appreciate stillness.
              Everyone comes to Chandragiri for the view, but perhaps we all
              stay for the perspective—the chance to see our daily lives from a
              distance, to remember how small our worries look from above.
            </p>
          </section>

          {/* Image Grid 2 - Afternoon */}
          <section className="image-section">
            <h3 className="image-section-title">Peaceful Moments</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={chandragiriImages[4].url}
                  alt={chandragiriImages[4].alt}
                />
                <p className="image-caption">{chandragiriImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={chandragiriImages[5].url}
                  alt={chandragiriImages[5].alt}
                />
                <p className="image-caption">{chandragiriImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              The afternoon passed slowly, measured in changing light rather
              than hours. I walked the forest trails behind the temple, where
              the only sounds were my footsteps and distant bird calls. The
              contrast was striking—behind me, a sacred space of worship; before
              me, a natural space of quiet. Both offered elevation, just of
              different kinds.
            </p>
            <p>
              As the sun began its descent, the valley transformed. The harsh
              midday light softened, painting buildings in gold and shadow. The
              city's details blurred, becoming patterns of light and dark. From
              this height, Kathmandu looked less like a collection of problems
              and more like a beautiful, complicated tapestry being woven in
              real time.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img
                src={chandragiriImages[6].url}
                alt={chandragiriImages[6].alt}
              />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {chandragiriImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Watching the City from Silence</h3>
            <div className="conclusion-content">
              <p>
                The cable car ride down felt like returning from a different
                world. As we descended, the city's sounds grew louder, its
                details sharper, its pace more insistent. But something had
                changed—not in Kathmandu, but in how I saw it. The distance,
                however brief, had given me new eyes.
              </p>
              <p>
                Chandragiri doesn't offer wilderness or solitude. It's a curated
                experience, a managed escape. But perhaps that's its value—it
                shows you that sometimes, the journey away from daily life
                doesn't need to be long or difficult. Sometimes, all you need is
                a cable car ride, a hilltop view, and enough altitude to see
                your world from a different angle.
              </p>
              <p className="final-thought">
                We spend our lives navigating streets, but sometimes we need to
                float above them. Not to escape, but to understand. To see that
                the chaos below makes patterns from above, that the noise
                becomes music at a distance, that sometimes the best way to
                understand where you are is to briefly leave it.
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
                title={chandragiriLocation.name}
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
            This diary entry was written in Chandragiri Hills, Nepal on March
            30, 2024.
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

        .chandragiri-diary {
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

export default ChandragiriDiary;
