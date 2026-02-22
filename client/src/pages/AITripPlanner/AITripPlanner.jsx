import React, { useState } from 'react';
import './AITripPlanner.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AITripPlanner = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const [formData, setFormData] = useState({
        destination: '',
        budget: '',
        days: 3,
        style: 'balanced'
    });

    const generateItinerary = () => {
        setLoading(true);
        // Simulate AI generation lag
        setTimeout(() => {
            setLoading(false);
            setResult({
                title: `Your ${formData.days}-Day Trip to ${formData.destination || 'Nepal'}`,
                summary: "Based on your preferences, we've crafted a balanced mix of adventure and relaxation.",
                itinerary: [
                    { day: 1, activity: "Arrival & Local Culture", desc: "Explore the ancient streets and taste local momos." },
                    { day: 2, activity: "Mountain View Hike", desc: "Early morning hike to Sarangkot for sunrise." },
                    { day: 3, activity: "Relaxation & Spa", desc: "Unwind at a lakeside resort." }
                ],
                estimatedCost: "$450 - $600"
            });
            setStep(3);
        }, 2500);
    };

    const handleNext = () => {
        if (step === 1 && formData.days > 0) {
            setStep(2);
            generateItinerary();
        }
    };

    return (
        <div className="ai-planner-page">
            <Header />

            <main className="ai-container">
                <div className="ai-planner-card">
                    {/* Progress Header */}
                    <div className="planner-header">
                        <h1>AI Travel Architect 🤖</h1>
                        <p>Design your perfect trip in seconds</p>
                    </div>

                    {step === 1 && (
                        <div className="planner-form fade-in">
                            <div className="form-group">
                                <label>Where do you want to go?</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Nepal, Pokhara, Mustang"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>How many days?</label>
                                <div className="slider-container">
                                    <input
                                        type="range"
                                        min="1" max="14"
                                        value={formData.days}
                                        onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                                    />
                                    <span className="slider-value">{formData.days} Days</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Travel Style</label>
                                <div className="style-pills">
                                    {['Relaxed', 'Adventure', 'Cultural', 'Luxury'].map(style => (
                                        <button
                                            key={style}
                                            className={`pill ${formData.style === style ? 'active' : ''}`}
                                            onClick={() => setFormData({ ...formData, style })}
                                        >
                                            {style}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="btn-generate" onClick={handleNext}>
                                Generate Itinerary ✨
                            </button>
                        </div>
                    )}

                    {step === 2 && loading && (
                        <div className="ai-loading">
                            <div className="loader-orbit"></div>
                            <h3>Analyzing {formData.days} days of possibilities...</h3>
                            <p>Checking weather, crowds, and hidden gems.</p>
                        </div>
                    )}

                    {step === 3 && result && (
                        <div className="itinerary-result fade-in">
                            <div className="result-header">
                                <h2>{result.title}</h2>
                                <span className="cost-badge">{result.estimatedCost}</span>
                            </div>

                            <div className="timeline">
                                {result.itinerary.map((day, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="day-marker">Day {day.day}</div>
                                        <div className="day-content">
                                            <h4>{day.activity}</h4>
                                            <p>{day.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="result-actions">
                                <button className="btn-save">Save Trip</button>
                                <button className="btn-book">Book Now</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AITripPlanner;
