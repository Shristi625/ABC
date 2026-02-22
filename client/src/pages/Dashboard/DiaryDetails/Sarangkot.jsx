import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const SarangkotDiary = () => {
  const navigate = useNavigate();

  const sarangkotLocation = {
    name: "Sarangkot",
    district: "Kaski",
    elevation: 1592,
    bestTime: "October to November",
    distance: "200 km from Kathmandu (5-6 hours)",
    tempRange: "8°C - 22°C",
  };

  const sarangkotCoordinates = {
    lat: 28.2,
    lng: 83.9,
  };

  const sarangkotWeather = {
    temp: 18,
    feelsLike: 16,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 9,
    uvIndex: 6,
    icon: "☀️",
    forecast: [
      { day: "Tomorrow", high: 20, low: 14, icon: "☀️" },
      { day: "Thu", high: 19, low: 13, icon: "🌤️" },
      { day: "Fri", high: 17, low: 12, icon: "🌥️" },
      { day: "Sat", high: 18, low: 13, icon: "☀️" },
    ],
  };

  const sarangkotImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1521478706270-f2e8e5e3f7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Sunrise over Annapurna range from Sarangkot",
      caption: "First light on Annapurna",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "View of Pokhara Valley from Sarangkot",
      caption: "Pokhara Valley waking up",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1593431685201-5a6a75b51b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Paragliders preparing for flight at Sarangkot",
      caption: "Preparing for flight",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Paragliding over Phewa Lake in Pokhara",
      caption: "Floating above Phewa Lake",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1521478706270-f2e8e5e3f7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Mountain silhouettes in morning light",
      caption: "Mountain shadows at dawn",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset sky from Sarangkot viewpoint",
      caption: "Evening colors over the valley",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening view of Pokhara city lights",
      caption: "Pokhara lights at dusk",
    },
  ];

  return (
    <div className="sarangkot-diary">
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
            <span className="logo-subtext">Sarangkot Journal</span>
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
            src={sarangkotImages[0].url}
            alt={sarangkotImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">
                📍 Sarangkot, Pokhara, Nepal
              </span>
              <h1 className="hero-title">Sarangkot – Sunrise & Paragliding</h1>
              <p className="hero-date">
                March 18, 2024 • 1 day • Clear Morning, 21°C
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
              <h2 className="section-title">Waking Above Pokhara</h2>
              <p className="lead-paragraph">
                The world was still dark when we reached Sarangkot, but the sky
                was already hinting at dawn. Cold morning air, quiet
                anticipation, and the outline of mountains waiting for the sun's
                first touch.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={sarangkotLocation}
            coordinates={sarangkotCoordinates}
            weather={sarangkotWeather}
          />

          {/* Image Grid 1 - Morning View */}
          <section className="image-section">
            <h3 className="image-section-title">The Valley Awakens</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={sarangkotImages[1].url}
                  alt={sarangkotImages[1].alt}
                />
                <p className="image-caption">{sarangkotImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={sarangkotImages[2].url}
                  alt={sarangkotImages[2].alt}
                />
                <p className="image-caption">{sarangkotImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              We arrived in darkness, guided by flashlight beams on the stone
              steps. Other early risers were already there, wrapped in blankets
              against the cold, their faces turned east where the sky was
              beginning to lighten. There was a shared silence, a collective
              waiting. Then, slowly, the mountains appeared.
            </p>
            <p>
              First as dark shapes against a slightly less dark sky. Then, as
              the minutes passed, details emerged—ridges, peaks, the curve of a
              distant summit. The Annapurna range stood before us, massive and
              silent. We watched as the first sunlight touched the highest
              peaks, turning them from gray to gold, then pink, then brilliant
              white. It happened so gradually, yet it felt sudden when the light
              finally reached us, warm on our cold faces.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={sarangkotImages[3].url} alt={sarangkotImages[3].alt} />
              <div className="full-image-caption">
                <p>{sarangkotImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              After sunrise came the paragliders. They laid out their colorful
              canopies on the hillside like giant butterflies resting. The wind
              picked up, testing the fabric. There was a calm energy among the
              pilots—checking harnesses, watching wind socks, waiting for the
              right moment. Then, one by one, they ran downhill and were lifted
              into the air.
            </p>
            <p>
              My turn came. The instructor secured my harness, gave simple
              instructions: "Run when I say run, and don't stop." We faced the
              edge, the valley spread out below. "Now!" We ran. Three steps,
              four, and then—no ground. Just air. The sudden silence after the
              running, the gentle lift as the canopy caught the wind, the world
              dropping away below.
            </p>
          </section>

          {/* Image Grid 2 - Flying */}
          <section className="image-section">
            <h3 className="image-section-title">Above the World</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img
                  src={sarangkotImages[4].url}
                  alt={sarangkotImages[4].alt}
                />
                <p className="image-caption">{sarangkotImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img
                  src={sarangkotImages[5].url}
                  alt={sarangkotImages[5].alt}
                />
                <p className="image-caption">{sarangkotImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              Floating above Pokhara was unlike anything I'd experienced. No
              engine noise, just the wind in the lines and the occasional
              instruction from the pilot behind me. We rose on thermals,
              circling gently, then descended toward Phewa Lake. From above, the
              world looked peaceful—orderly fields, tiny houses, boats like toys
              on the water. The mountains watched from a distance, now fully lit
              by morning sun.
            </p>
            <p>
              There was no fear, only wonder. The kind of calm that comes from
              complete surrender—to the wind, to gravity, to the moment. For
              twenty minutes, I existed in that space between earth and sky, not
              quite belonging to either. Then came the gentle descent, the soft
              touchdown on the lakeside grass, the strange heaviness of being
              back on solid ground.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={sarangkotImages[6].url} alt={sarangkotImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {sarangkotImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Between Sky and Mountains</h3>
            <div className="conclusion-content">
              <p>
                I returned to Sarangkot in the evening, not for the view this
                time but for the quiet. The crowds were gone, the paragliders
                packed up. The mountains were silhouettes against a fading sky,
                and below, Pokhara's lights began to twinkle. The same place,
                transformed by different light.
              </p>
              <p>
                Sarangkot offers two kinds of freedom: the freedom of height, of
                seeing the world from above, and the freedom of stillness, of
                watching day begin and end from a high place. The paragliding
                was exhilarating, but so was the simple act of sitting on a cold
                stone wall, watching light change mountains.
              </p>
              <p className="final-thought">
                We spend our lives with feet firmly on ground, but sometimes we
                need to remember what it feels like to fly. Not just in the
                physical sense, but in the way a sunrise can lift your heart,
                how a high place can expand your perspective. Sarangkot gives
                you both—the adrenaline of flight and the quiet joy of watching
                the world wake up from above.
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
                title={sarangkotLocation.name}
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
            This diary entry was written in Sarangkot, Nepal on March 18, 2024.
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

        .sarangkot-diary {
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
          color: #dd6b20;
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
          background: #fffbeb;
          border-radius: 12px;
          border-left: 4px solid #f6ad55;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #c05621;
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
          background: #dd6b20;
          color: white;
        }

        .primary-btn:hover {
          background: #c05621;
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

export default SarangkotDiary;
