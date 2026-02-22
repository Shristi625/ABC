import React from "react";
import { useNavigate } from "react-router-dom";
import MapWeatherSection from "./MapWeatherSection";
import ShareDownload from "./ShareDownload";
import "./DiaryDetails.css";

const TansenDiary = () => {
  const navigate = useNavigate();

  const tansenLocation = {
    name: "Tansen",
    district: "Palpa",
    elevation: 1372,
    bestTime: "October to November",
    distance: "180 km from Kathmandu (5-6 hours)",
    tempRange: "8°C - 24°C",
  };

  const tansenCoordinates = {
    lat: 27.9,
    lng: 83.7,
  };

  const tansenWeather = {
    temp: 20,
    feelsLike: 18,
    condition: "Pleasant",
    humidity: 65,
    windSpeed: 9,
    uvIndex: 6,
    icon: "🌤️",
    forecast: [
      { day: "Tomorrow", high: 22, low: 16, icon: "☀️" },
      { day: "Thu", high: 21, low: 15, icon: "🌤️" },
      { day: "Fri", high: 19, low: 14, icon: "🌥️" },
      { day: "Sat", high: 20, low: 15, icon: "🌤️" },
    ],
  };

  const tansenImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Tansen town nestled in the hills of Palpa",
      caption: "Tansen town overlooking the hills",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional houses and streets in Tansen",
      caption: "Cobblestone streets of old Tansen",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Tansen Durbar historic site",
      caption: "Tansen Durbar - Historic heart of the town",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Local market in Tansen",
      caption: "Vibrant local market scene",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Viewpoint overlooking Tansen hills",
      caption: "Panoramic view of surrounding hills",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Sunset over Tansen town",
      caption: "Golden hour in the hill town",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet evening streets of Tansen",
      caption: "Peaceful evening walk through town",
    },
  ];

  return (
    <div className="tansen-diary">
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
            <span className="logo-subtext">Tansen Journal</span>
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
            src={tansenImages[0].url}
            alt={tansenImages[0].alt}
            className="hero-image"
          />
          <div className="image-overlay">
            <div className="hero-text">
              <span className="hero-location">📍 Tansen, Palpa, Nepal</span>
              <h1 className="hero-title">
                Tansen (Palpa) – Hill Town & Culture
              </h1>
              <p className="hero-date">
                March 2, 2024 • 1 day • Pleasant, 18°C
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
              <h2 className="section-title">Where Culture Meets the Hills</h2>
              <p className="lead-paragraph">
                Tansen is a town that remembers its history. Its cobblestone
                streets, traditional houses, and hilltop views tell stories of
                Newari architecture, Magar culture, and a pace of life that
                moves with the rhythm of the hills.
              </p>
            </div>
          </section>

          {/* Map and Weather Section */}
          <MapWeatherSection
            location={tansenLocation}
            coordinates={tansenCoordinates}
            weather={tansenWeather}
          />

          {/* Image Grid 1 - Old Town */}
          <section className="image-section">
            <h3 className="image-section-title">Streets of History</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={tansenImages[1].url} alt={tansenImages[1].alt} />
                <p className="image-caption">{tansenImages[1].caption}</p>
              </div>
              <div className="image-card">
                <img src={tansenImages[2].url} alt={tansenImages[2].alt} />
                <p className="image-caption">{tansenImages[2].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 1 */}
          <section className="story-section">
            <p>
              The road to Tansen winds up through terraced fields and pine
              forests until suddenly the town appears, spread across a ridge
              with views stretching to distant mountains. The air here is
              different—clean, cool, and carrying the scent of woodsmoke and
              flowering trees. My first stop was the old bazaar, a street so
              unchanged by time that I felt I had stepped into another century.
            </p>
            <p>
              The houses along the bazaar are architectural poetry. Built in
              traditional Newari style with intricately carved wooden windows
              and doors, their brick walls worn smooth by weather and time. Some
              have small courtyards visible through open gates, filled with pots
              of blooming marigolds and chilies drying in the sun. The roofs are
              tiled in red clay, and many have small shrines built into their
              walls, where fresh flowers and incense show daily devotion.
            </p>
          </section>

          {/* Full Width Image */}
          <section className="full-image-section">
            <div className="full-image-card">
              <img src={tansenImages[3].url} alt={tansenImages[3].alt} />
              <div className="full-image-caption">
                <p>{tansenImages[3].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 2 */}
          <section className="story-section">
            <p>
              At a small tea shop, I met an elderly man who told me about
              Tansen's history as a major stop on the ancient trade route
              between India and Tibet. "This town has seen everything," he said,
              stirring sugar into his tea. "Silk, spices, salt, wool—all passed
              through here. Our buildings remember. Our streets remember."
            </p>
            <p>
              He pointed out architectural details I might have missed—the
              carved peacocks on one window frame (symbolizing protection), the
              lotus flowers on another (purity), the geometric patterns that
              followed traditional Newari design principles. "People come here
              for the view," he said, "but the real beauty is in the details. In
              the carvings, the brickwork, the way a courtyard catches the
              afternoon light."
            </p>
          </section>

          {/* Image Grid 2 - Town Life */}
          <section className="image-section">
            <h3 className="image-section-title">Life in the Hills</h3>
            <div className="image-grid-2col">
              <div className="image-card">
                <img src={tansenImages[4].url} alt={tansenImages[4].alt} />
                <p className="image-caption">{tansenImages[4].caption}</p>
              </div>
              <div className="image-card">
                <img src={tansenImages[5].url} alt={tansenImages[5].alt} />
                <p className="image-caption">{tansenImages[5].caption}</p>
              </div>
            </div>
          </section>

          {/* Story Section 3 */}
          <section className="story-section">
            <p>
              I climbed to Shreenagar Hill, the highest point in Tansen. From
              here, the entire town lay spread out below—a tapestry of red
              roofs, green trees, and winding streets. Beyond, the hills rolled
              away into the distance, their ridges fading from green to blue to
              hazy purple. The air was so clear I could see individual houses in
              distant villages, tiny dots of white against the green.
            </p>
            <p>
              Back in town as afternoon softened toward evening, the bazaar came
              alive in a different way. Shopkeepers lit oil lamps in their
              windows. The smell of cooking—garlic, ginger, wood fire—filled the
              air. Children played in the streets, their laughter echoing off
              the old walls. There was a sense of community here, of people
              living not just in the same place but with each other, sharing
              walls, sharing streets, sharing the history embedded in every
              stone.
            </p>
          </section>

          {/* Final Image */}
          <section className="image-section">
            <div className="final-image-card">
              <img src={tansenImages[6].url} alt={tansenImages[6].alt} />
              <div className="final-image-overlay">
                <p className="final-image-caption">{tansenImages[6].caption}</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h3 className="conclusion-title">Stories in the Streets</h3>
            <div className="conclusion-content">
              <p>
                As darkness fell, Tansen transformed. Streetlights came on,
                casting warm pools of light on the cobblestones. The sounds of
                the day—market chatter, children playing, temple bells—faded
                into the quiet hum of evening. From my guesthouse window, I
                could see lights in windows across the valley, each one a story,
                a family, a life lived in this beautiful, historic place.
              </p>
              <p>
                Tansen taught me that some places carry their history not in
                museums or monuments, but in their daily life. In the way a
                doorway is carved, a courtyard is swept, a street follows the
                contour of a hill. This isn't a town preserved in glass; it's a
                living, breathing community that happens to be hundreds of years
                old. The history isn't separate from the present; it's in the
                bricks under your feet, the wood of the window frames, the view
                from the hilltop that generations have shared.
              </p>
              <p className="final-thought">
                We often travel to see famous sights, but sometimes the deepest
                beauty is in ordinary places lived in extraordinary ways. Tansen
                is ordinary in the best sense—people live here, work here, raise
                families here. But they do so in houses built with art, on
                streets laid with care, with a view that reminds them daily of
                the world's beauty. Perhaps that's the secret to preserving
                culture—not treating it as something separate and precious, but
                weaving it into the fabric of daily life until it becomes simply
                how things are done, how things are built, how life is lived.
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
                title={tansenLocation.name}
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
            This diary entry was written in Tansen, Nepal on March 2, 2024.
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

        .tansen-diary {
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
          color: #975a16;
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
          background: #fffaf0;
          border-radius: 12px;
          border-left: 4px solid #ed8936;
        }

        .conclusion-title {
          font-size: 1.8rem;
          font-weight: 400;
          color: #9c4221;
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
          background: #975a16;
          color: white;
        }

        .primary-btn:hover {
          background: #7b4a12;
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

export default TansenDiary;
