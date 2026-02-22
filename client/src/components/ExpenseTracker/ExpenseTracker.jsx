import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([
        { id: 1, title: 'Flight Tickets', amount: 450, category: 'Transport', date: '2024-05-15' },
        { id: 2, title: 'Hotel Booking', amount: 320, category: 'Accommodation', date: '2024-05-16' },
    ]);
    const [newExpense, setNewExpense] = useState({ title: '', amount: '', category: 'Food', date: '' });

    const categories = ['Transport', 'Accommodation', 'Food', 'Activities', 'Shopping', 'Misc'];

    const addExpense = (e) => {
        e.preventDefault();
        if (!newExpense.title || !newExpense.amount) return;

        setExpenses([...expenses, { ...newExpense, id: Date.now(), amount: Number(newExpense.amount) }]);
        setNewExpense({ title: '', amount: '', category: 'Food', date: '' });
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    };

    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="expense-tracker glass-card">
            <h3>💰 Expense Tracker</h3>

            <div className="expense-summary">
                <div className="summary-card">
                    <span>Total Spent</span>
                    <strong>${totalExpense.toFixed(2)}</strong>
                </div>
            </div>

            <form className="add-expense-form" onSubmit={addExpense}>
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Expense Title"
                        value={newExpense.title}
                        onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    />
                </div>
                <div className="form-row">
                    <select
                        value={newExpense.category}
                        onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <input
                        type="date"
                        value={newExpense.date}
                        onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                    />
                </div>
                <button type="submit" className="add-btn">Add Expense</button>
            </form>

            <div className="expenses-list">
                <h4>Recent Expenses</h4>
                {expenses.length === 0 ? (
                    <p className="no-expenses">No expenses recorded yet.</p>
                ) : (
                    expenses.map(expense => (
                        <div key={expense.id} className="expense-item">
                            <div className="expense-info">
                                <span className="expense-title">{expense.title}</span>
                                <span className="expense-meta">{expense.category} • {expense.date}</span>
                            </div>
                            <div className="expense-actions">
                                <span className="expense-amount">${expense.amount}</span>
                                <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>×</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ExpenseTracker;
