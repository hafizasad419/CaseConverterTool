import React, { useState } from 'react';

function ImageToolsLayout({ title, description, processImage, downloadLabel }) {
    const [imageFile, setImageFile] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            convertImage(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setImageFile(file);
            convertImage(file);
        }
    };

    const convertImage = async (file) => {
        const result = await processImage(file);
        setProcessedImage(result);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = `converted-image.${downloadLabel.toLowerCase()}`;
        link.click();
    };

    return (
        <section className="my-8">
            <div className="px-4">
                <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">{title}</h1>
                <p className="text-sm md:text-lg text-center">{description}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className="border-dashed border-2 border-gray-400 rounded-lg p-8 w-full max-w-lg text-center cursor-pointer hover:bg-gray-100"
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                    />
                    <label htmlFor="image-upload" className="block text-xl font-bold">
                        {imageFile ? 'Change Image' : 'Upload or Drag & Drop Image'}
                    </label>
                </div>

                {processedImage && (
                    <div className="flex flex-col items-center">
                        <img
                            src={processedImage}
                            alt="Processed"
                            className="max-w-lg rounded-lg shadow-lg"
                        />
                        <button
                            onClick={handleDownload}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Download {downloadLabel}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ImageToolsLayout;
