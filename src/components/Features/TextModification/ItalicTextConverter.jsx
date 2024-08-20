import React from 'react';
import { TextModificationLayout } from '../..';

function ItalicTextConverter() {
    const italicTextTransform = (text) => {
        return text;
    };

    return (
        <TextModificationLayout
            title="Italic Text Converter"
            description="Convert your text to italicized format. Each character will appear italicized."
            transformFunction={italicTextTransform}
            style={{ fontStyle: 'italic' }}
        />
    );
}

export default ItalicTextConverter;
