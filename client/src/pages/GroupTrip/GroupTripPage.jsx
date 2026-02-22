import React, { useState } from 'react';
import './GroupTripPage.css';

const GroupTripPage = () => {
    const [tripDetails, setTripDetails] = useState({
        destination: 'Paris, France',
        date: '2024-05-15',
        duration: '7 Days',
    });

    const [costs, setCosts] = useState({
        transport: [],
        accommodation: [],
        activities: [],
    });

    const [newTransport, setNewTransport] = useState({ from: '', to: '', price: '' });

    const addTransportCost = () => {
        if (newTransport.from && newTransport.price) {
            setCosts({
                ...costs,
                transport: [...costs.transport, { ...newTransport, id: Date.now() }],
            });
            setNewTransport({ from: '', to: '', price: '' });
        }
    };

    const calculateTotal = (category) => {
        return costs[category].reduce((acc, item) => acc + Number(item.price), 0);
    };

    const grandTotal = calculateTotal('transport') + calculateTotal('accommodation') + calculateTotal('activities');
    const perPerson = (grandTotal / 4).toFixed(2); // Assuming 4 people for demo

    return (
        <div className="group-trip-container">
            <header className="trip-header">
                <h1>Plan Your Journey</h1>
                <p>Collaborative Trip Planning & Budgeting</p>
            </header>

            <div className="trip-dashboard">
                {/* Sidebar: Trip Info */}
                <aside className="trip-sidebar">
                    <div className="glass-card trip-info">
                        <h2>Trip Details</h2>
                        <div className="info-item">
                            <label>Destination</label>
                            <input
                                type="text"
                                value={tripDetails.destination}
                                onChange={(e) => setTripDetails({ ...tripDetails, destination: e.target.value })}
                            />
                        </div>
                        <div className="info-item">
                            <label>Start Date</label>
                            <input
                                type="date"
                                value={tripDetails.date}
                                onChange={(e) => setTripDetails({ ...tripDetails, date: e.target.value })}
                            />
                        </div>

                        <div className="members-section">
                            <label>Travel Buddies</label>
                            <div className="members-list">
                                <div className="member-avatar">jd</div>
                                <div className="member-avatar">ak</div>
                                <div className="member-avatar">sm</div>
                                <div className="member-avatar add-member">+</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card total-summary">
                        <h2>Estimated Cost</h2>
                        <div className="total-cost">${grandTotal}</div>
                        <div className="per-person">${perPerson} per person</div>
                    </div>
                </aside>

                {/* Main Content: Budget Planner */}
                <main className="budget-tracker">
                    <div className="glass-card budget-section">
                        <h2>Budget & Expenses</h2>

                        <div className="budget-categories">
                            {/* Transportation Column */}
                            <div className="category-card cat-transport">
                                <div className="category-header">
                                    <h3>🚗 Transportation</h3>
                                    <span className="cat-total">${calculateTotal('transport')}</span>
                                </div>

                                <div className="cost-list">
                                    {costs.transport.map(item => (
                                        <div key={item.id} className="cost-item">
                                            <span>{item.from} ➝ {item.to}</span>
                                            <span>${item.price}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="transport-details">
                                    <div className="transport-input-group">
                                        <input
                                            placeholder="From"
                                            value={newTransport.from}
                                            onChange={(e) => setNewTransport({ ...newTransport, from: e.target.value })}
                                        />
                                        <input
                                            placeholder="To"
                                            value={newTransport.to}
                                            onChange={(e) => setNewTransport({ ...newTransport, to: e.target.value })}
                                        />
                                    </div>
                                    <div className="transport-input-group">
                                        <input
                                            type="number"
                                            placeholder="Price ($)"
                                            value={newTransport.price}
                                            onChange={(e) => setNewTransport({ ...newTransport, price: e.target.value })}
                                        />
                                    </div>
                                    <button className="save-btn" onClick={addTransportCost}>Add Route Cost</button>
                                </div>
                            </div>

                            {/* Accommodation Column (Placeholder Logic) */}
                            <div className="category-card cat-accommodation">
                                <div className="category-header">
                                    <h3>🏨 Accommodation</h3>
                                    <button className="add-cost-btn">+</button>
                                </div>
                                <p className="per-person" style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    Add hotels or Airbnbs
                                </p>
                            </div>

                            {/* Activities Column (Placeholder Logic) */}
                            <div className="category-card cat-activities">
                                <div className="category-header">
                                    <h3>ben Activities</h3>
                                    <button className="add-cost-btn">+</button>
                                </div>
                                <p className="per-person" style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    Tours, entry fees, etc.
                                </p>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GroupTripPage;
