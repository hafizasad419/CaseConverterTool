import React from 'react';
import { TextModificationLayout } from '../..';

function PlainTextConverter() {
    const plainTextTransform = (text) => {
        // Simply returns the text as plain text
        return text; // No modification needed
    };

    return (
        <TextModificationLayout
            title="Plain Text Converter"
            description="Convert your text to plain text, removing any special formatting or characters."
            transformFunction={plainTextTransform}
        />
    );
}

export default PlainTextConverter;
