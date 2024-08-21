import React, { useState, useCallback } from 'react';
import { TextModificationLayout } from '../../';

const RepeatTextGenerator = () => {
    const [repeatCount, setRepeatCount] = useState(5);

    const generateRepeatedText = useCallback((text) => {
        return new Array(repeatCount).fill(text).join(' ');
    }, [repeatCount]);

    const transformFunction = useCallback(generateRepeatedText, [repeatCount]);

    return (
        <div className="my-8 px-4 flex flex-col items-center">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Repeat Text Generator</h1>
            <p className="text-center text-sm md:text-lg mb-4">Repeat your text a specified number of times.</p>
            
            {/* Container for input and TextModificationLayout */}
            <div className="w-full md:w-3/5 lg:w-2/5 flex flex-col items-center gap-4 p-4">
                <input
                    type="number"
                    value={repeatCount}
                    onChange={(e) => setRepeatCount(Number(e.target.value))}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                    placeholder="Number of repetitions"
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

export default RepeatTextGenerator;
