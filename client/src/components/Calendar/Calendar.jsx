import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({
        '2024-02-14': ['Valentine\'s Trip 💖'],
        '2024-03-05': ['Trekking Prep 🏔️'],
        '2024-04-10': ['Flight to Kathmandu ✈️'],
    });
    const [newEvent, setNewEvent] = useState('');

    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const handleDateClick = (day) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setSelectedDate(dateStr);
    };

    const addEvent = () => {
        if (!newEvent.trim() || !selectedDate) return;
        const newEvents = { ...events, [selectedDate]: [...(events[selectedDate] || []), newEvent] };
        setEvents(newEvents);
        setNewEvent('');
    };

    const renderCalendarDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const hasEvents = events[dateStr] && events[dateStr].length > 0;
            const isSelected = selectedDate === dateStr;
            const isToday = new Date().toISOString().split('T')[0] === dateStr;

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${hasEvents ? 'has-event' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    <span className="day-number">{day}</span>
                    {hasEvents && <div className="event-dot"></div>}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="calendar-widget glass-card">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>❮</button>
                <h3>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                <button onClick={() => changeMonth(1)}>❯</button>
            </div>

            <div className="calendar-grid">
                <div className="day-name">Sun</div>
                <div className="day-name">Mon</div>
                <div className="day-name">Tue</div>
                <div className="day-name">Wed</div>
                <div className="day-name">Thu</div>
                <div className="day-name">Fri</div>
                <div className="day-name">Sat</div>
                {renderCalendarDays()}
            </div>

            {selectedDate && (
                <div className="calendar-details">
                    <h4>📅 {selectedDate}</h4>
                    <ul className="event-list">
                        {events[selectedDate]?.map((evt, idx) => (
                            <li key={idx}>{evt}</li>
                        )) || <p className="no-events">No plans for this day.</p>}
                    </ul>
                    <div className="add-event-box">
                        <input
                            type="text"
                            placeholder="Add trip plan..."
                            value={newEvent}
                            onChange={(e) => setNewEvent(e.target.value)}
                        />
                        <button onClick={addEvent}>+</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
