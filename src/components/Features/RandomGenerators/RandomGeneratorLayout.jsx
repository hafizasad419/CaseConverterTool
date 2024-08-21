import React, { useState } from 'react';
import { CopyToClipboard, DownloadText } from '../../../utils'; 
import { PrimaryButton } from "../../../utils/"


const RandomGeneratorLayout = ({ title, description, generateContent, downloadLabel }) => {
    const [content, setContent] = useState('');

    const handleGenerate = async () => {
        const generatedContent = await generateContent();
        setContent(generatedContent);
    };

    return (
        <div className="my-28 px-4 md:px-8">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">{title}</h1>
            <p className="text-center text-sm md:text-lg md:max-w-[60vw] mx-auto">{description}</p>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mt-8">
                <textarea
                    className="w-full md:w-4/5 h-32 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 resize-none"
                    value={content}
                    readOnly
                />
                <div className="flex flex-col md:flex-row w-full mt-4 gap-4 md:justify-center">
                    <PrimaryButton
                        children={`Generate ${downloadLabel}`}
                        onClick={handleGenerate}
                    />

                    <CopyToClipboard text={content} />
                    <DownloadText text={content} />
                </div>
            </div>
        </div>
    );
};

export default RandomGeneratorLayout;
