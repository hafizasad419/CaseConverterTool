import React, { useState, useCallback } from 'react';
import {TextModificationLayout} from '../../'; 

const replaceText = (text, replacements) => {
    let updatedText = text;
    for (const [find, replace] of Object.entries(replacements)) {
        updatedText = updatedText.replace(new RegExp(find, 'g'), replace);
    }
    return updatedText;
};

const TextReplacementTool = () => {
    const [replacements, setReplacements] = useState({});

    const handleReplacementChange = (e) => {
        const { name, value } = e.target;
        setReplacements((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const transformFunction = useCallback((text) => replaceText(text, replacements), [replacements]);

    return (
        <div className="my-8 px-4">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Text Replacement Tool</h1>
            <p className="text-center text-sm md:text-lg">Replace specified words or phrases in your text.</p>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                <div className="w-full lg:w-1/2">
                    <textarea
                        name="find"
                        placeholder="Word or phrase to find"
                        onChange={handleReplacementChange}
                        className="w-full h-24 p-2 mb-2 border border-gray-300 rounded-lg resize-none"
                    />
                    <textarea
                        name="replace"
                        placeholder="Replacement text"
                        onChange={handleReplacementChange}
                        className="w-full h-24 p-2 mb-2 border border-gray-300 rounded-lg resize-none"
                    />
                    <TextModificationLayout
                        transformFunction={transformFunction}
                        title=""
                        description=""
                        style={{ backgroundColor: '#f5f5f5' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default TextReplacementTool;
