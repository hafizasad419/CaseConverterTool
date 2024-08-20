import React from 'react';
import { TextModificationLayout } from '../..';

function StackedTextGenerator() {
    const stackedTextTransform = (text) => {
        return text.split('').join('\n');
    };

    return (
        <TextModificationLayout
            title="Stacked Text Generator"
            description="Convert your text into a stacked format where each character appears on a new line."
            transformFunction={stackedTextTransform}
        />
    );
}

export default StackedTextGenerator;
