import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

function SVGToPNGConverter() {
    const convertSVGToPNG = async (file) => {
        // Create a canvas element for conversion
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = URL.createObjectURL(file);

        return new Promise((resolve, reject) => {
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                }, 'image/png');
            };
            img.onerror = reject;
        });
    };

    return (
        <ImageToolsLayout
            title="SVG to PNG Converter"
            description="Convert your SVG images to PNG format."
            processImage={convertSVGToPNG}
            downloadLabel="PNG"
        />
    );
}

export default SVGToPNGConverter;
