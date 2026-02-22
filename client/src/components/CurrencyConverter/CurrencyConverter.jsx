import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('NPR');
    const [result, setResult] = useState(null);
    const [exchangeRates, setExchangeRates] = useState({
        USD: 1,
        NPR: 132.5,
        EUR: 0.92,
        GBP: 0.79,
        INR: 83.12,
        AUD: 1.52,
        JPY: 148.2
    });

    const currencies = Object.keys(exchangeRates);

    useEffect(() => {
        handleConvert();
    }, [amount, fromCurrency, toCurrency]);

    const handleConvert = () => {
        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        setResult((amount * rate).toFixed(2));
    };

    return (
        <div className="currency-converter glass-card">
            <h3>💱 Currency Converter</h3>
            <div className="converter-form">
                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                    />
                </div>

                <div className="currency-select-group">
                    <div className="select-wrapper">
                        <label>From</label>
                        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                            {currencies.map(curr => <option key={curr} value={curr}>{curr}</option>)}
                        </select>
                    </div>

                    <div className="exchange-icon">⇄</div>

                    <div className="select-wrapper">
                        <label>To</label>
                        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                            {currencies.map(curr => <option key={curr} value={curr}>{curr}</option>)}
                        </select>
                    </div>
                </div>

                <div className="conversion-result">
                    <span className="result-amount">{result} {toCurrency}</span>
                    <span className="rate-info">1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}</span>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
