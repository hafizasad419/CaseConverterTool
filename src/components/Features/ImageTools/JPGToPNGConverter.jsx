import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

function JPGToPNGConverter() {
    const convertJPGToPNG = async (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const reader = new FileReader();

            reader.onload = (event) => {
                img.src = event.target.result;
            };

            reader.onerror = (error) => reject(error);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };

            img.onerror = (error) => reject(error);

            reader.readAsDataURL(file);
        });
    };

    return (
        <ImageToolsLayout
            title="JPG to PNG Converter"
            description="Convert your JPG images to PNG format."
            processImage={convertJPGToPNG}
            downloadLabel="PNG"
        />
    );
}

export default JPGToPNGConverter;
