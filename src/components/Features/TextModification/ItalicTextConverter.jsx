import React from 'react';
import { TextModificationLayout } from '../..';

function ItalicTextConverter() {
    const italicTextTransform = (text) => {
        return text.split('').map(char => `<i>${char}</i>`).join(''); // Wraps each character in <i> tags
    };

    return (
        <TextModificationLayout
            title="Italic Text Converter"
            description="Convert your text to italicized format. Each character will be wrapped in <i> tags, making your text appear italicized."
            transformFunction={italicTextTransform}
        />
    );
}

export default ItalicTextConverter;
