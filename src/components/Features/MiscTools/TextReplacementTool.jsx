import React, { useState, useCallback } from 'react';
import { TextModificationLayout } from '../../';

const replaceText = (text, find, replace) => {
    if (!find || !replace) return text;
    const regex = new RegExp(find, 'g');
    return text.replace(regex, replace);
};

const TextReplacementTool = () => {
    const [findText, setFindText] = useState('');
    const [replaceTextValue, setReplaceTextValue] = useState('');

    const handleFindChange = (e) => {
        setFindText(e.target.value);
    };

    const handleReplaceChange = (e) => {
        setReplaceTextValue(e.target.value);
    };

    const transformFunction = useCallback(
        (text) => replaceText(text, findText, replaceTextValue),
        [findText, replaceTextValue]
    );

    return (
        <div className="my-8 px-4 flex flex-col items-center">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Text Replacement Tool</h1>
            <p className="text-center text-sm md:text-lg mb-4">Replace specified words or phrases in your text.</p>
            
            {/* Container for input and TextModificationLayout */}
            <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col items-center gap-6 p-6">
                <textarea
                    name="find"
                    placeholder="Word or phrase to find"
                    value={findText}
                    onChange={handleFindChange}
                    className="w-full h-24 p-4 mb-2 border border-gray-300 rounded-lg resize-none"
                />
                <textarea
                    name="replace"
                    placeholder="Replacement text"
                    value={replaceTextValue}
                    onChange={handleReplaceChange}
                    className="w-full h-24 p-4 mb-2 border border-gray-300 rounded-lg resize-none"
                />
                <TextModificationLayout
                    transformFunction={transformFunction}
                    title=""
                    description=""
                    style={{ backgroundColor: '#f5f5f5' }}
                />
            </div>
        </div>
    );
};

export default TextReplacementTool;
