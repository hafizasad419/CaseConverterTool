import React, { useCallback } from 'react';
import {TextModificationLayout} from '../../';
const countSentences = (text) => {
    const sentenceCount = (text.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g) || []).length;
    return `Sentence Count: ${sentenceCount}`;
};

const OnlineSentenceCounter = () => {
    const transformFunction = useCallback((text) => countSentences(text), []);

    return (
        <TextModificationLayout
            transformFunction={transformFunction}
            title="Online Sentence Counter"
            description="Count the number of sentences in your text."
            style={{ backgroundColor: '#f5f5f5' }} // Custom style if needed
        />
    );
}

export default OnlineSentenceCounter;
