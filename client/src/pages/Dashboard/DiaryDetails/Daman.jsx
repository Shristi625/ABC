import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const DamanDiary = () => {
  const navigate = useNavigate();

  const damanLocation = {
    name: "Daman",
    district: "Makwanpur",
    elevation: 2322,
    bestTime: "October to November",
    distance: "75 km from Kathmandu",
    tempRange: "6°C - 18°C",
  };

  const damanCoordinates = {
    lat: 27.5,
    lng: 85.1,
  };

  const damanWeather = {
    temp: 13,
    feelsLike: 11,
    condition: "Very Clear",
    humidity: 45,
    windSpeed: 12,
    uvIndex: 7,
    icon: "☀️",
  };

  const damanImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Himalayan range view from Daman viewpoint",
      caption: "The entire Himalayan range unfolds before you",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunrise over snow-capped peaks from Daman",
      caption: "First light touches the highest peaks",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "View tower at Daman viewpoint",
      caption: "Viewing tower against the morning sky",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Endless mountain panorama from Daman",
      caption: "Peaks stretching to the horizon",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet hilltop surroundings at Daman",
      caption: "Silent morning on the hilltop",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset colors over mountains from Daman",
      caption: "Evening paints the mountains gold",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening sky over Daman",
      caption: "Night falls over the silent peaks",
    },
  ];

  return (
    <div className="daman-diary">
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
            <span className="logo-subtext">Daman Journal</span>
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
            src={damanImages[0].url}
            alt={damanImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Daman, Makwanpur, Nepal</span>
              <h1 className="hero-title">
                Daman – One of the Best Himalayan Viewpoints
              </h1>
              <p className="hero-date">
                February 14, 2024 • 1 day • Clear Morning, 13°C
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
              <h2 className="section-title">Watching the Giants Wake Up</h2>
              <p className="lead-paragraph">
                In the cold morning air of Daman, you don't just see
                mountains—you witness the entire Himalayan range slowly coming
                to life. The silence is broken only by the wind and the
                collective breath of people watching the world wake up.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={damanLocation}
            coordinates={damanCoordinates}
            weather={damanWeather}
          />

          {/* Image Grid 1 - Sunrise */}
          <section className="image-section">
            <h3 className="image-section-title">First Light on the Peaks</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={damanImages[1].url} alt={damanImages[1].alt} />
                <p className="image-caption">{damanImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={damanImages[2].url} alt={damanImages[2].alt} />
                <p className="image-caption">{damanImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              We arrived in darkness, the road winding up through pine forests
              that gave way to open hilltops. The air was crisp, cold enough to
              see our breath in the glow of our flashlights. At the viewpoint,
              people were already gathering—some wrapped in blankets, others
              setting up tripods, all facing east where the sky was beginning to
              lighten.
            </p>
            <p>
              Then it began. Not with a sudden burst of light, but with a slow
              transformation. The mountains, invisible in the dark, first
              appeared as faint outlines against the lighter sky. Then, as if
              painted stroke by stroke, they gained definition. The highest
              peaks caught the first sunlight—Mount Everest, Langtang, Ganesh
              Himal, Annapurna—turning from dark shapes to glowing orange, then
              brilliant white against the blue sky. The light moved down the
              mountains like water, illuminating ridge after ridge until the
              entire range stood revealed.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={damanImages[3].url} alt={damanImages[3].alt} />
              <div className="full-image-caption">
                <p>{damanImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              What strikes you at Daman is not just the beauty, but the scale.
              You're not looking at one mountain or one range, but at hundreds
              of kilometers of the Himalayas spread out before you. The view
              stretches from Everest in the east to Annapurna in the west—an
              impossible panorama that feels like looking at the spine of the
              world.
            </p>
            <p>
              There's a tower at the viewpoint, and climbing it gives an even
              more expansive view. From there, you can see how the mountains
              march away into the distance, each range a little lighter, a
              little bluer than the one before it, until they fade into the sky.
              The silence up there is complete except for the wind. People speak
              in whispers, as if loud voices might disturb the mountains' sleep.
            </p>
          </section>

          {/* Image Grid 2 - Panorama */}
          <section className="image-section">
            <h3 className="image-section-title">Endless Horizons</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={damanImages[4].url} alt={damanImages[4].alt} />
                <p className="image-caption">{damanImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={damanImages[5].url} alt={damanImages[5].alt} />
                <p className="image-caption">{damanImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              I spent hours just sitting, watching the light change. Clouds
              formed in the valleys below, then rose to wrap around the middle
              slopes of the mountains before dissipating in the higher air.
              Shadows moved across the landscape, revealing contours and
              textures. At one point, a rainbow appeared in a distant valley,
              arcing over forests and villages I couldn't see but knew were
              there.
            </p>
            <p>
              There's a particular kind of peace that comes from watching
              something so much larger than yourself. Your worries, your plans,
              your small daily concerns—they all shrink to their proper size.
              What matters is the sun moving across the sky, the wind on your
              face, the impossible beauty of snow and rock and light. Time
              doesn't pass in minutes or hours here, but in the slow movement of
              shadows across mountains.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={damanImages[6].url} alt={damanImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">{damanImages[6].caption}</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">
              Where the Himalayas Feel Endless
            </h3>
            <div className="conclusion-content">
              <p>
                As evening approached, the mountains underwent another
                transformation. The white peaks turned pink, then orange, then
                deep purple as the sun set behind the hills to the west. The sky
                flared with color, and for a few minutes, everything—mountains,
                sky, the very air—seemed to be made of light. Then the colors
                faded, and the mountains became dark silhouettes against a
                starry sky.
              </p>
              <p>
                Daman gives you what few places can: perspective. Not just the
                visual perspective of seeing so much at once, but the emotional
                perspective of understanding your place in the world. You are
                small here, yes—a tiny speck on a hilltop looking at giants. But
                that smallness isn't frightening; it's comforting. It means your
                problems are small too. It means there's beauty so vast it can
                hold all your worries and still have room for wonder.
              </p>
              <p className="final-thought">
                We live our lives in rooms, in cities, in landscapes scaled to
                human measure. But sometimes we need to stand somewhere that
                reminds us of the scale of the planet. We need to see horizons
                that curve with the earth, mountains that touch the sky,
                distances that take our breath away. Daman gives you that. It
                gives you the Himalayas not as a postcard image, but as a
                living, breathing presence that surrounds you, that makes you
                feel both insignificant and completely connected to everything
                that is vast and beautiful in the world.
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
                title={damanLocation.name}
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
            This diary entry was written in Daman, Nepal on February 14, 2024.
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

        .daman-diary {
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
          color: #2b6cb0;
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
          background: #ebf8ff;
          border-radius: 12px;
          border-left: 4px solid #4299e1;
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
          background: #2b6cb0;
          color: white;
        }

        .primary-btn:hover {
          background: #2c5282;
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

export default DamanDiary;
