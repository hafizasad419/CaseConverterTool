import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const RandomIPGenerator = () => {
    const generateIP = async () => {
        // Generate a random IP address
        const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        return randomIP;
    };

    return (
        <RandomGeneratorLayout
            title="Random IP Address Generator"
            description="Generate a random IP address."
            generateContent={generateIP}
            downloadLabel="IP"
        />
    );
};

export default RandomIPGenerator;
