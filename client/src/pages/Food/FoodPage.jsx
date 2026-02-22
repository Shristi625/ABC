import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getAllFoods, getFoodTypes } from "../../services/food";
import "./FoodPage.css";

const FoodPage = () => {
  const [popularFoods, setPopularFoods] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceCategory, setSelectedPriceCategory] = useState("");

  useEffect(() => {
    fetchFoods();
    fetchFoodTypes();
  }, [selectedType, selectedPriceCategory]);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedType) params.type = selectedType;
      if (selectedPriceCategory) params.priceCategory = selectedPriceCategory;

      const response = await getAllFoods(params);
      setPopularFoods(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch foods:", err);
      setError("Failed to load foods. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFoodTypes = async () => {
    try {
      const response = await getFoodTypes();
      setFoodTypes(response.data.data);
    } catch (err) {
      console.error("Failed to fetch food types:", err);
    }
  };

  const cafes = [
    {
      id: 1,
      name: "Himalayan Java",
      location: "Kathmandu, Pokhara",
      description:
        "Popular coffee chain with excellent espresso and cozy atmosphere.",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    },
    {
      id: 2,
      name: "Roadhouse Cafe",
      location: "Kathmandu",
      description: "Western-style cafe with burgers, pasta, and great coffee.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    },
    {
      id: 3,
      name: "OR2K",
      location: "Kathmandu, Pokhara",
      description:
        "Vegetarian restaurant with Middle Eastern and Nepali fusion dishes.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
  ];

  return (
    <div className="food-page">
      <Header />

      <section className="food-hero">
        <div className="container">
          <h1 className="food-hero__title">Food & Local Eats</h1>
          <p className="food-hero__subtitle">
            Discover the flavors of Nepal - from street food to traditional
            feasts
          </p>
        </div>
      </section>

      <div className="container food-content">
        {/* Filters */}
        <section className="food-filters">
          <div className="filter-group">
            <label htmlFor="type-filter">Filter by Type:</label>
            <select
              id="type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              {foodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="price-filter">Filter by Price:</label>
            <select
              id="price-filter"
              value={selectedPriceCategory}
              onChange={(e) => setSelectedPriceCategory(e.target.value)}
              className="filter-select"
            >
              <option value="">All Prices</option>
              <option value="Budget">Budget</option>
              <option value="Affordable">Affordable</option>
              <option value="Moderate">Moderate</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>
        </section>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <p>Loading delicious foods...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <p>{error}</p>
            <button onClick={fetchFoods} className="retry-button">
              Try Again
            </button>
          </div>
        )}

        {/* Popular Foods */}
        {!loading && !error && (
          <section className="food-section">
            <h2 className="section-title">Must-Try Foods</h2>
            {popularFoods.length === 0 ? (
              <div className="empty-state">
                <p>No foods found matching your filters.</p>
              </div>
            ) : (
              <div className="food-grid">
                {popularFoods.map((food) => (
                  <div key={food._id} className="food-card">
                    <div className="food-card__image-wrap">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="food-card__image"
                      />
                      <div className="food-card__badges">
                        <span className="food-card__badge">{food.type}</span>
                        <span className="food-card__badge food-card__badge--price">
                          {food.priceCategory}
                        </span>
                      </div>
                    </div>
                    <div className="food-card__body">
                      <h3 className="food-card__title">{food.name}</h3>
                      <p className="food-card__description">
                        {food.description}
                      </p>
                      <p className="food-card__price">NPR {food.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Cafes & Restaurants */}
        <section className="food-section">
          <h2 className="section-title">Popular Cafes & Restaurants</h2>
          <div className="cafe-grid">
            {cafes.map((cafe) => (
              <div key={cafe.id} className="cafe-card">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="cafe-card__image"
                />
                <div className="cafe-card__body">
                  <h3 className="cafe-card__title">{cafe.name}</h3>
                  <p className="cafe-card__location">📍 {cafe.location}</p>
                  <p className="cafe-card__description">{cafe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="food-cta">
          <h2>Share Your Food Adventures</h2>
          <p>Document your favorite meals and dining experiences in Nepal</p>
          <Link to="/create" className="food-cta__btn">
            Write About Food
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FoodPage;
