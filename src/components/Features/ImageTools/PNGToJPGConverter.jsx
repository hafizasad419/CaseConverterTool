import React from 'react';
import ImageToolsLayout from './ImageToolsLayout';

const convertPNGToJPG = async (file) => {
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
                    const jpgUrl = URL.createObjectURL(blob);
                    resolve(jpgUrl);
                } else {
                    reject('Conversion failed');
                }
            }, 'image/jpeg');
        };
        img.onerror = () => reject('Image load failed');
    });
};

function PNGToJPGConverter() {
    return (
        <ImageToolsLayout
            title="PNG to JPG Converter"
            description="Convert your PNG images to JPG format."
            processImage={convertPNGToJPG}
            downloadLabel="JPG"
        />
    );
}

export default PNGToJPGConverter;
