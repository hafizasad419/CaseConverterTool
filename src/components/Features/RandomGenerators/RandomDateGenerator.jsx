import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomDateGenerator = () => {
    const generateDate = async () => {
        // Generate a random date between 2000 and today
        const start = new Date(2000, 0, 1);
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        
        // Format the date to a readable string (YYYY-MM-DD)
        return randomDate.toISOString().split('T')[0];
    };

    return (
        <RandomGeneratorLayout
            title="Random Date Generator"
            description="Generate a random date between January 1, 2000 and today."
            generateContent={generateDate}
            downloadLabel="Date"
        />
    );
};

export default RandomDateGenerator;
