import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomLetterGenerator = () => {
    const generateLetter = async () => {
        // Generate a random letter from A-Z
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
        return randomLetter;
    };

    return (
        <RandomGeneratorLayout
            title="Random Letter Generator"
            description="Generate a random letter from A to Z."
            generateContent={generateLetter}
            downloadLabel="Letter"
        />
    );
};

export default RandomLetterGenerator;
