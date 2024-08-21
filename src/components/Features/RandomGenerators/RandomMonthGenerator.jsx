import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomMonthGenerator = () => {
    const generateMonth = async () => {
        // Generate a random month name
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        return randomMonth;
    };

    return (
        <RandomGeneratorLayout
            title="Random Month Generator"
            description="Generate a random month name."
            generateContent={generateMonth}
            downloadLabel="Month"
        />
    );
};

export default RandomMonthGenerator;
