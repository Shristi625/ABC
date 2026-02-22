import React from 'react';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import './CalendarPage.css';

const CalendarPage = () => {
    return (
        <div className="calendar-page">
            <Header />
            <main className="container calendar-main">
                <section className="calendar-hero">
                    <h1>Travel Calendar</h1>
                    <p>Plan your upcoming adventures and track your journey dates.</p>
                </section>

                <div className="calendar-layout">
                    <section className="calendar-section">
                        <Calendar />
                    </section>

                    <aside className="calendar-sidebar">
                        <div className="calendar-info-card">
                            <h3>How to use</h3>
                            <ul>
                                <li>Click on a date to select it.</li>
                                <li>Add trip notes or reminders below the calendar.</li>
                                <li>Use this to plan your itinerary days.</li>
                            </ul>
                        </div>

                        <div className="upcoming-summary">
                            <h3>Upcoming Trips</h3>
                            <div className="mini-event-card">
                                <strong>Feb 14</strong>
                                <p>Valentine's Trip 💖</p>
                            </div>
                            <div className="mini-event-card">
                                <strong>Mar 05</strong>
                                <p>Trekking Prep 🏔️</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default CalendarPage;
