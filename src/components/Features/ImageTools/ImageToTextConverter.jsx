import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { CopyToClipboard, DownloadText } from '../../../utils';

function ImageToTextConverter() {
    const [extractedText, setExtractedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const convertImageToText = async (file) => {
        setLoading(true);
        setError('');
        try {
            const { data: { text } } = await Tesseract.recognize(file, 'eng', {
                logger: (m) => console.log(m), // Optional: Log progress
            });
            setExtractedText(text);
        } catch (err) {
            console.error('Error extracting text:', err);
            setError('Failed to extract text from the image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            convertImageToText(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            convertImageToText(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className='my-8'>
            <div className='px-4'>
                <h1 className='text-center text-4xl my-4 md:text-6xl text-customGray font-bold'>Image To Text Converter.</h1>
                <p className='text-sm md:text-lg text-center'>Extract Text from your images in one click.</p>
            </div>

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
                <div
                    className="w-full md:w-1/2 bg-gray-100 border-dashed border-2 border-gray-300 flex justify-center items-center p-4 rounded-lg hover:bg-gray-200"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute opacity-0 w-full h-full cursor-pointer"
                        style={{ zIndex: 1 }} // Ensure input is clickable
                    />
                    <span className="text-gray-600">Drag & Drop an Image or Click to Upload</span>
                </div>

                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-4 relative">
                    {loading ? (
                        <div className="text-center text-gray-500">Extracting text, please wait...</div>
                    ) : (
                        <div>
                            <textarea
                                className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                                value={error || extractedText}
                                readOnly
                            />
                            <div className="flex justify-center mt-4 space-x-4"> {/* Space between buttons */}
                                <CopyToClipboard text={extractedText} />
                                <DownloadText text={extractedText} filename="extracted-text.txt" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImageToTextConverter;
