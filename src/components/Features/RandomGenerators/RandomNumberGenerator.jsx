import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomNumberGenerator = () => {
    const generateNumber = async () => {
        // Generate a random number between 0 and 1000
        const randomNumber = Math.floor(Math.random() * 1000);
        return randomNumber;
    };

    return (
        <RandomGeneratorLayout
            title="Random Number Generator"
            description="Generate a random number between 0 and 1000."
            generateContent={generateNumber}
            downloadLabel="Number"
        />
    );
};

export default RandomNumberGenerator;
