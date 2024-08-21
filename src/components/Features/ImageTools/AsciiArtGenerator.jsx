import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

function AsciiArtGenerator() {
    const generateAsciiArt = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = async (event) => {
                try {
                    const asciiArt = await convertImageToAscii(event.target.result); // Convert image to ASCII art
                    const asciiArtImageUrl = createAsciiArtImage(asciiArt); // Convert ASCII art to an image
                    resolve(asciiArtImageUrl);
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = (error) => reject(error);

            reader.readAsDataURL(file);
        });
    };

    // Function to convert an image to ASCII art
    const convertImageToAscii = (imageData) => {
        // Here you would implement the logic to convert the imageData to ASCII art
        // For simplicity, we'll use a mockup function
        const asciiArt = `
          *****  
         *     * 
         *     * 
         *     * 
          *****  
        `;
        return asciiArt;
    };

    // Function to convert ASCII art to an image URL
    const createAsciiArtImage = (asciiArt) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const fontSize = 10;

        const lines = asciiArt.split('\n');
        const maxWidth = Math.max(...lines.map(line => line.length));

        canvas.width = maxWidth * fontSize;
        canvas.height = lines.length * fontSize;

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'black';
        ctx.font = `${fontSize}px monospace`;

        lines.forEach((line, index) => {
            ctx.fillText(line, 0, fontSize * (index + 1));
        });

        return canvas.toDataURL('image/png');
    };

    return (
        <ImageToolsLayout
            title="ASCII Art Generator"
            description="Convert your images to ASCII art."
            processImage={generateAsciiArt}
            downloadLabel="ASCII art"
        />
    );
}

export default AsciiArtGenerator;
