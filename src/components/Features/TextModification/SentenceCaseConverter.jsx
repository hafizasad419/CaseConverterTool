import React from 'react';
import { TextModificationLayout } from '../..';

function SentenceCaseConverter() {
    const sentenceCaseTransform = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    return (
        <TextModificationLayout
            title="Sentence Case Converter"
            description="Convert your text to sentence case, where only the first letter of the first sentence is capitalized."
            transformFunction={sentenceCaseTransform}
        />
    );
}

export default SentenceCaseConverter;
