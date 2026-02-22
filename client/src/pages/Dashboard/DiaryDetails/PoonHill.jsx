import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const PoonHillDiary = () => {
  const navigate = useNavigate();

  const poonhillLocation = {
    name: "Poon Hill",
    district: "Myagdi",
    elevation: 3210,
    bestTime: "October to November",
    distance: "220 km from Kathmandu (5-6 hours)",
    tempRange: "2°C - 12°C",
  };

  const poonhillCoordinates = {
    lat: 28.8,
    lng: 83.4,
  };

  const poonhillWeather = {
    temp: 8,
    feelsLike: 5,
    condition: "Clear",
    humidity: 45,
    windSpeed: 18,
    uvIndex: 7,
    icon: "☀️",
    forecast: [
      { day: "Tomorrow", high: 10, low: 4, icon: "☀️" },
      { day: "Thu", high: 9, low: 3, icon: "🌤️" },
      { day: "Fri", high: 7, low: 2, icon: "🌥️" },
      { day: "Sat", high: 8, low: 3, icon: "☀️" },
    ],
  };

  const poonHillImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Sunrise view from Poon Hill showing golden mountains",
      caption: "First light touches Annapurna and Dhaulagiri",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Annapurna and Dhaulagiri mountain ranges from Poon Hill",
      caption: "The twin giants at dawn",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "People waiting for sunrise at Poon Hill viewpoint",
      caption: "Silent anticipation on the hilltop",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Golden light on the peaks of Annapurna",
      caption: "Mountains turning to gold",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Mountain silhouettes at dawn from Poon Hill",
      caption: "Dark shapes against the morning sky",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Morning sky colors over Poon Hill",
      caption: "Sky painting the world in color",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Calm atmosphere after sunrise at Poon Hill",
      caption: "Morning calm after the spectacle",
    },
  ];

  return (
    <div className="poonhill-diary">
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
            <span className="logo-subtext">Poon Hill Journal</span>
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
            src={poonHillImages[0].url}
            alt={poonHillImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Poon Hill, Myagdi, Nepal</span>
              <h1 className="hero-title">Poon Hill – Golden Sunrise View</h1>
              <p className="hero-date">
                April 3, 2024 • Early Morning • Clear Sky, 8°C
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
              <h2 className="section-title">Before the Sun Appears</h2>
              <p className="lead-paragraph">
                We woke in darkness, our breath visible in the cold air.
                Headlamps pierced the pre-dawn black as we started up the trail,
                a silent procession of shadows moving toward the promise of
                light.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={poonhillLocation}
            coordinates={poonhillCoordinates}
            weather={poonhillWeather}
          />

          {/* Image Grid 1 - Waiting */}
          <section className="image-section">
            <h3 className="image-section-title">The Climb in Darkness</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={poonHillImages[1].url} alt={poonHillImages[1].alt} />
                <p className="image-caption">{poonHillImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={poonHillImages[2].url} alt={poonHillImages[2].alt} />
                <p className="image-caption">{poonHillImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The trail to Poon Hill is steep and dark in the pre-dawn hours. We
              moved by the light of our headlamps, seeing only the patch of
              ground immediately before us. The air was cold enough to make our
              lungs ache with each breath. Around us, we could hear but not
              see—the crunch of boots on stone, the occasional whisper, the
              distant call of a bird still sleeping. There was a shared purpose
              in our silence, a collective anticipation.
            </p>
            <p>
              As we climbed higher, the sky began to lighten. Not with sunrise
              yet, but with that faint glow that comes before dawn, turning the
              black to deep blue. Stars faded. Shapes emerged from the
              darkness—trees, rocks, the silhouette of the ridge above us. We
              could see each other now without headlamps, faces pale in the
              gathering light, expressions focused, expectant.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={poonHillImages[3].url} alt={poonHillImages[3].alt} />
              <div className="full-image-caption">
                <p>{poonHillImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              We reached the viewpoint just as the first true light appeared in
              the east. Hundreds of people were already there, but there was
              almost no sound. We all faced the same direction, toward the
              mountains that were still dark shapes against the lightening sky.
              Annapurna South, Hiunchuli, Machhapuchhre, and beyond them,
              Dhaulagiri—they stood in a line, massive and silent.
            </p>
            <p>
              Then it began. Not with the sun itself, but with its light hitting
              the highest peaks. The tip of Annapurna South turned pink. Then
              Dhaulagiri. Then one by one, each summit caught fire. Pink turned
              to orange, orange to gold. The light flowed down the mountainsides
              like molten metal, illuminating ridges, glaciers, faces of rock
              that had been dark moments before. The transformation was slow but
              relentless, beautiful beyond words.
            </p>
          </section>

          {/* Image Grid 2 - Golden Light */}
          <section className="image-section">
            <h3 className="image-section-title">The Golden Moment</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={poonHillImages[4].url} alt={poonHillImages[4].alt} />
                <p className="image-caption">{poonHillImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={poonHillImages[5].url} alt={poonHillImages[5].alt} />
                <p className="image-caption">{poonHillImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              For about twenty minutes, the mountains were golden. Not just lit,
              but made of light. The snowfields glowed. The rock faces shone.
              The entire range seemed to be burning with a cool, pure fire. Then
              the sun itself appeared over the hills to the east, and the magic
              changed. The golden light became white, the shadows sharpened, the
              world returned to its normal colors. But for those twenty minutes,
              we had seen something extraordinary.
            </p>
            <p>
              I looked around at the other people on the hilltop. No one was
              speaking. Some were taking photos, but many were just standing,
              looking. Some had tears on their cheeks. The shared experience was
              palpable—hundreds of strangers brought together by a need to
              witness beauty, to stand in cold darkness waiting for light, to
              see mountains turn to gold.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={poonHillImages[6].url} alt={poonHillImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">
                  {poonHillImages[6].caption}
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">When the Mountains Turn Gold</h3>
            <div className="conclusion-content">
              <p>
                As the sun rose fully, the crowd began to disperse. People
                started talking again, comparing photos, sharing stories. But
                the quiet wonder remained. We descended the trail in daylight,
                seeing for the first time what we had climbed in
                darkness—forests, villages, the steep path that had seemed
                endless hours before. Everything looked different in the morning
                light, washed clean, new.
              </p>
              <p>
                Poon Hill teaches you about anticipation. About the value of
                waiting in darkness for light. About how the most beautiful
                things often require effort—the cold walk, the early wake-up,
                the steep climb. And about how that effort makes the beauty more
                meaningful. Anyone can see a photograph of a mountain sunrise.
                But to stand there, cold and tired, watching it happen—that's
                different. That enters your bones.
              </p>
              <p className="final-thought">
                We live in a world of instant gratification, but some things
                cannot be rushed. The sun rises at its own pace. Mountains
                reveal themselves gradually. The transformation from dark to
                light happens whether we watch or not, but watching changes us.
                It reminds us that beauty is not passive; it requires our
                presence, our attention, our willingness to stand in the cold
                and wait. Poon Hill gives you that—not just a view, but an
                experience. Not just light on mountains, but light in your
                memory, warming you long after you've descended back to the
                world.
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
                title={poonhillLocation.name}
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
            This diary entry was written at Poon Hill, Nepal on April 3, 2024.
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

        .poonhill-diary {
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
          color: #d69e2e;
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
          border-left: 4px solid #ecc94b;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #b7791f;
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
          background: #d69e2e;
          color: white;
        }

        .primary-btn:hover {
          background: #b7791f;
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

export default PoonHillDiary;
