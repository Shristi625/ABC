import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GuideCard from "../../components/GuideCard/GuideCard";
import {
    getAllGuides,
    getGuideSpecialties,
    getGuideLocations,
    getGuideLanguages,
} from "../../services/guide";
import "./GuidePage.css";

const GuidePage = () => {
    const [guides, setGuides] = useState([]);
    const [featuredGuides, setFeaturedGuides] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [locations, setLocations] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filters
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedAvailability, setSelectedAvailability] = useState("");
    const [minRating, setMinRating] = useState("");

    useEffect(() => {
        fetchFilters();
    }, []);

    useEffect(() => {
        fetchGuides();
    }, [
        selectedSpecialty,
        selectedLocation,
        selectedLanguage,
        selectedAvailability,
        minRating,
    ]);

    const fetchFilters = async () => {
        try {
            const [specialtiesRes, locationsRes, languagesRes] = await Promise.all([
                getGuideSpecialties(),
                getGuideLocations(),
                getGuideLanguages(),
            ]);

            setSpecialties(specialtiesRes.data.data);
            setLocations(locationsRes.data.data);
            setLanguages(languagesRes.data.data);
        } catch (err) {
            console.error("Failed to fetch filters:", err);
        }
    };

    const fetchGuides = async () => {
        try {
            setLoading(true);
            const params = {};

            if (selectedSpecialty) params.specialty = selectedSpecialty;
            if (selectedLocation) params.location = selectedLocation;
            if (selectedLanguage) params.language = selectedLanguage;
            if (selectedAvailability) params.availability = selectedAvailability;
            if (minRating) params.minRating = minRating;

            const response = await getAllGuides(params);
            const allGuides = response.data.data;

            setGuides(allGuides);
            setFeaturedGuides(allGuides.filter((guide) => guide.featured));
            setError(null);
        } catch (err) {
            console.error("Failed to fetch guides:", err);
            setError("Failed to load guides. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const clearFilters = () => {
        setSelectedSpecialty("");
        setSelectedLocation("");
        setSelectedLanguage("");
        setSelectedAvailability("");
        setMinRating("");
    };

    const hasActiveFilters =
        selectedSpecialty ||
        selectedLocation ||
        selectedLanguage ||
        selectedAvailability ||
        minRating;

    return (
        <div className="guide-page">
            <Header />

            {/* Hero Section */}
            <section className="guide-hero">
                <div className="guide-hero__overlay"></div>
                <div className="container">
                    <h1 className="guide-hero__title">Find Your Perfect Guide</h1>
                    <p className="guide-hero__subtitle">
                        Connect with experienced local guides who know Nepal inside out
                    </p>
                    <div className="guide-hero__stats">
                        <div className="guide-hero__stat">
                            <span className="guide-hero__stat-number">{guides.length}+</span>
                            <span className="guide-hero__stat-label">Expert Guides</span>
                        </div>
                        <div className="guide-hero__stat">
                            <span className="guide-hero__stat-number">
                                {specialties.length}+
                            </span>
                            <span className="guide-hero__stat-label">Specialties</span>
                        </div>
                        <div className="guide-hero__stat">
                            <span className="guide-hero__stat-number">
                                {locations.length}+
                            </span>
                            <span className="guide-hero__stat-label">Locations</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container guide-content">
                {/* Filters */}
                <section className="guide-filters">
                    <div className="guide-filters__header">
                        <h2 className="guide-filters__title">Filter Guides</h2>
                        {hasActiveFilters && (
                            <button onClick={clearFilters} className="guide-filters__clear">
                                Clear All Filters
                            </button>
                        )}
                    </div>

                    <div className="guide-filters__grid">
                        <div className="filter-group">
                            <label htmlFor="specialty-filter" className="filter-label">
                                <span className="filter-icon">🎯</span>
                                Specialty
                            </label>
                            <select
                                id="specialty-filter"
                                value={selectedSpecialty}
                                onChange={(e) => setSelectedSpecialty(e.target.value)}
                                className="filter-select"
                            >
                                <option value="">All Specialties</option>
                                {specialties.map((specialty) => (
                                    <option key={specialty} value={specialty}>
                                        {specialty}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="location-filter" className="filter-label">
                                <span className="filter-icon">📍</span>
                                Location
                            </label>
                            <select
                                id="location-filter"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="filter-select"
                            >
                                <option value="">All Locations</option>
                                {locations.map((location) => (
                                    <option key={location} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="language-filter" className="filter-label">
                                <span className="filter-icon">🗣️</span>
                                Language
                            </label>
                            <select
                                id="language-filter"
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="filter-select"
                            >
                                <option value="">All Languages</option>
                                {languages.map((language) => (
                                    <option key={language} value={language}>
                                        {language}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="availability-filter" className="filter-label">
                                <span className="filter-icon">✓</span>
                                Availability
                            </label>
                            <select
                                id="availability-filter"
                                value={selectedAvailability}
                                onChange={(e) => setSelectedAvailability(e.target.value)}
                                className="filter-select"
                            >
                                <option value="">All</option>
                                <option value="Available">Available</option>
                                <option value="Limited Availability">Limited</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="rating-filter" className="filter-label">
                                <span className="filter-icon">⭐</span>
                                Min Rating
                            </label>
                            <select
                                id="rating-filter"
                                value={minRating}
                                onChange={(e) => setMinRating(e.target.value)}
                                className="filter-select"
                            >
                                <option value="">Any Rating</option>
                                <option value="4">4+ Stars</option>
                                <option value="4.5">4.5+ Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Loading State */}
                {loading && (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading guides...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="error-state">
                        <p>{error}</p>
                        <button onClick={fetchGuides} className="retry-button">
                            Try Again
                        </button>
                    </div>
                )}

                {/* Featured Guides */}
                {!loading && !error && featuredGuides.length > 0 && (
                    <section className="guide-section">
                        <h2 className="section-title">
                            <span className="section-title__icon">⭐</span>
                            Featured Guides
                        </h2>
                        <div className="guide-grid">
                            {featuredGuides.map((guide) => (
                                <GuideCard key={guide._id} guide={guide} />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Guides */}
                {!loading && !error && (
                    <section className="guide-section">
                        <h2 className="section-title">
                            <span className="section-title__icon">👥</span>
                            {hasActiveFilters ? "Filtered Guides" : "All Guides"}
                            <span className="section-title__count">({guides.length})</span>
                        </h2>
                        {guides.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-state__icon">🔍</div>
                                <h3 className="empty-state__title">No guides found</h3>
                                <p className="empty-state__text">
                                    Try adjusting your filters to see more results
                                </p>
                                {hasActiveFilters && (
                                    <button onClick={clearFilters} className="empty-state__btn">
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="guide-grid">
                                {guides.map((guide) => (
                                    <GuideCard key={guide._id} guide={guide} />
                                ))}
                            </div>
                        )}
                    </section>
                )}

                {/* CTA Section */}
                <section className="guide-cta">
                    <div className="guide-cta__content">
                        <h2 className="guide-cta__title">Are you a local guide?</h2>
                        <p className="guide-cta__text">
                            Join our community and connect with travelers from around the
                            world
                        </p>
                        <Link to="/contact" className="guide-cta__btn">
                            Become a Guide
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default GuidePage;
