import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const SailungDiary = () => {
  const navigate = useNavigate();

  const sailungLocation = {
    name: "Sailung",
    district: "Dolakha",
    elevation: 2640,
    bestTime: "October to November",
    distance: "140 km from Kathmandu (3.5-4 hours)",
    tempRange: "3°C - 16°C",
  };

  const sailungCoordinates = {
    lat: 27.7,
    lng: 86.5,
  };

  const sailungWeather = {
    temp: 11,
    feelsLike: 9,
    condition: "Clear Skies",
    humidity: 48,
    windSpeed: 13,
    uvIndex: 6,
    icon: "☀️",
    forecast: [
      { day: "Tomorrow", high: 13, low: 8, icon: "☀️" },
      { day: "Thu", high: 12, low: 7, icon: "🌤️" },
      { day: "Fri", high: 10, low: 6, icon: "🌥️" },
      { day: "Sat", high: 11, low: 7, icon: "☀️" },
    ],
  };

  const sailungImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Rolling hills of Sailung with endless green landscapes",
      caption: "The endless hills of Sailung",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Wide open grasslands of Sailung",
      caption: "Open grasslands stretching to the horizon",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Clouds moving over the hills of Sailung",
      caption: "Clouds painting shadows on the hills",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Prayer flags on a hilltop in Sailung",
      caption: "Prayer flags whispering in the wind",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Viewpoint panorama of Sailung hills",
      caption: "Panoramic view from the hilltop",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over the hills of Sailung",
      caption: "Golden hour on the hundred hills",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm evening sky over Sailung",
      caption: "Evening calm settling over the hills",
    },
  ];

  return (
    <div className="sailung-diary">
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
            <span className="logo-subtext">Sailung Journal</span>
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
            src={sailungImages[0].url}
            alt={sailungImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Sailung, Dolakha, Nepal</span>
              <h1 className="hero-title">
                Sailung – The "100 Hills" Destination
              </h1>
              <p className="hero-date">
                February 5, 2024 • 1 day • Windy & Clear, 14°C
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
              <h2 className="section-title">Where the Hills Never End</h2>
              <p className="lead-paragraph">
                Sailung is a place of endless horizons. Green hills roll into
                the distance like ocean waves frozen in time, each crest touched
                by wind and sunlight. Here, the world feels open, expansive, and
                quietly alive.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={sailungLocation}
            coordinates={sailungCoordinates}
            weather={sailungWeather}
          />

          {/* Image Grid 1 - Hills */}
          <section className="image-section">
            <h3 className="image-section-title">Open Skies & Rolling Land</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={sailungImages[1].url} alt={sailungImages[1].alt} />
                <p className="image-caption">{sailungImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={sailungImages[2].url} alt={sailungImages[2].alt} />
                <p className="image-caption">{sailungImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The journey to Sailung was a steady climb through villages that
              gradually thinned into pure grassland. The air changed—crisper,
              cooler, carrying the scent of damp earth and wild herbs. When I
              reached the top, the wind hit me first. Not a gentle breeze, but a
              constant, insistent presence that seemed to come from every
              direction at once.
            </p>
            <p>
              Then came the view. Hills upon hills, stretching to the horizon in
              every direction. Some were rounded and soft, others sharper
              against the sky. There were no trees to block the view, just grass
              waving in the wind and the occasional rock formation standing like
              a silent sentinel. The sky felt enormous here, a vast dome of blue
              with fast-moving clouds casting shadows that raced across the
              hills below.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={sailungImages[3].url} alt={sailungImages[3].alt} />
              <div className="full-image-caption">
                <p>{sailungImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              I walked without any particular destination, following ridges that
              seemed to lead to even better views. The wind was my only
              companion, whispering secrets in a language I couldn't understand
              but felt in my bones. There were no crowds here, no noise except
              for the wind and my own footsteps. The silence wasn't empty—it was
              full of space, of possibility.
            </p>
            <p>
              At one viewpoint, I sat on a rock warmed by the sun and watched
              clouds form and dissolve. In the distance, I could see the faint
              shapes of mountains, but here in Sailung, it was the hills that
              commanded attention. They had a rhythm to them, a pattern that
              repeated but never exactly. Each hill was similar yet unique, like
              variations on a theme in some grand natural symphony.
            </p>
          </section>

          {/* Image Grid 2 - Afternoon */}
          <section className="image-section">
            <h3 className="image-section-title">Freedom in Every Direction</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={sailungImages[4].url} alt={sailungImages[4].alt} />
                <p className="image-caption">{sailungImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={sailungImages[5].url} alt={sailungImages[5].alt} />
                <p className="image-caption">{sailungImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              As afternoon turned toward evening, the light changed. The hills
              that had been bright green in midday sun now took on golden tones.
              Shadows lengthened, revealing textures in the landscape I hadn't
              noticed before—small valleys, subtle ridges, patches where the
              grass grew thicker. The wind softened slightly, as if tired from
              its day's work.
            </p>
            <p>
              I met a shepherd moving his flock from one hill to another. He
              moved slowly, calmly, as if he had all the time in the world. We
              exchanged nods but no words. What was there to say? The hills said
              everything that needed saying. His sheep moved like white dots on
              a green canvas, part of the landscape rather than separate from
              it. I thought about how people have lived in places like this for
              generations, how they must develop a different sense of time, of
              space, of what matters.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={sailungImages[6].url} alt={sailungImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {sailungImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">A Landscape That Breathes</h3>
            <div className="conclusion-content">
              <p>
                The sun began its descent, painting the sky in shades of orange
                and pink. The hills, which had been distinct in the daylight,
                now merged into silhouettes against the colorful sky. The wind
                dropped to a whisper, and for the first time all day, I could
                hear absolute silence. Not the absence of sound, but the
                presence of quiet so complete it felt like a physical thing.
              </p>
              <p>
                Sailung teaches you about space—not just physical space, but
                mental space. In a world where we're constantly crowded by
                buildings, information, noise, and people, here there's room to
                breathe. Room to think. Room to simply be. The hundred hills
                aren't just a geographical feature; they're an invitation to
                expand your own horizons.
              </p>
              <p className="final-thought">
                We carry our crowded lives with us wherever we go, but places
                like Sailung remind us we can set those burdens down. We can
                walk where the only limit is the horizon. We can stand in wind
                that blows from distant places. We can remember that sometimes
                freedom isn't about going somewhere specific, but about being
                somewhere where every direction is possible.
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
                title={sailungLocation.name}
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
            This diary entry was written in Sailung, Nepal on February 5, 2024.
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

        .sailung-diary {
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
          color: #2d7a4d;
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
          background: #2d7a4d;
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

export default SailungDiary;
