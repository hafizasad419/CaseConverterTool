import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

function WebPToJPGConverter() {
    const convertWebPToJPG = async (file) => {
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
                }, 'image/jpeg');
            };
            img.onerror = reject;
        });
    };

    return (
        <ImageToolsLayout
            title="WebP to JPG Converter"
            description="Convert your WebP images to JPG format."
            processImage={convertWebPToJPG}
            downloadLabel="JPG"
        />
    );
}

export default WebPToJPGConverter;
