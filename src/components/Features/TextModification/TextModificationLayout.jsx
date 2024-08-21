import React, { useState, useEffect } from 'react';
import { DownloadText, CopyToClipboard } from '../../../utils'; // Adjust the import paths as needed

function TextModificationLayout({ transformFunction, title, description, style }) {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // Sync the output text with the transformed input text
    useEffect(() => {
        setOutputText(transformFunction(inputText));
    }, [inputText, transformFunction]);

    // Text statistics
    const charCount = inputText.length;
    const wordCount = inputText.trim().split(/\s+/).length;
    const sentenceCount = (inputText.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g) || []).length;
    const lineCount = inputText.split(/\r\n|\r|\n/).length;

    return (
        <section className='my-8'>
            {/* title and description */}
            <div className='px-4'>
                <h1 className='text-center text-4xl my-4 md:text-6xl text-customGray font-bold'>{title}</h1>
                <p className='text-center text-sm md:text-lg'>{description}</p>

            </div>

            <div className="flex flex-col lg:flex-row gap-4 p-4">
                {/* Left Side: Input Area */}
                <div className="w-full lg:w-1/2">
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-32 p-2 mb-2 border border-gray-300 rounded-lg resize-none"
                        placeholder="Type or paste your text here..."
                    />

                    {/* Text Statistics */}
                    <div className="text-sm text-gray-600">
                        Character Count: {charCount} | Word Count: {wordCount} | Sentence Count: {sentenceCount} | Line Count: {lineCount}
                    </div>
                </div>

                {/* Right Side: Output Area */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <textarea
                        style={style}
                        value={outputText}
                        readOnly
                        className="w-full h-32 p-2 mb-2 border border-gray-300 rounded-lg resize-none bg-gray-100"
                        placeholder="Your converted text will appear here..."
                    />

                    {/* Utility Buttons */}
                    <div className="flex gap-2">
                        <DownloadText text={outputText} />
                        <CopyToClipboard text={outputText} />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TextModificationLayout;
