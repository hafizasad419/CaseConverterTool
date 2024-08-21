import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

const convertJPGToWebP = async (file) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    
    return new Promise((resolve, reject) => {
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                if (blob) {
                    const webpUrl = URL.createObjectURL(blob);
                    resolve(webpUrl);
                } else {
                    reject('Conversion failed');
                }
            }, 'image/webp');
        };
        img.onerror = () => reject('Image load failed');
    });
};

function JPGToWebPConverter() {
    return (
        <ImageToolsLayout
            title="JPG to WebP Converter"
            description="Convert your JPG images to WebP format."
            processImage={convertJPGToWebP}
            downloadLabel="WebP"
        />
    );
}

export default JPGToWebPConverter;
