import React, { useState, useCallback } from 'react';
import {TextModificationLayout} from '../../'; 

const RepeatTextGenerator = () => {
    const [repeatCount, setRepeatCount] = useState(1);

    const generateRepeatedText = useCallback((text) => {
        return new Array(repeatCount).fill(text).join(' ');
    }, [repeatCount]);

    const transformFunction = useCallback(generateRepeatedText, [repeatCount]);

    return (
        <div className="my-8 px-4">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Repeat Text Generator</h1>
            <p className="text-center text-sm md:text-lg">Repeat your text a specified number of times.</p>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                <div className="w-full lg:w-1/2">
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
        </div>
    );
}

export default RepeatTextGenerator;
