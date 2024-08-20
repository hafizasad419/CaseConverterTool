import React from 'react';
import { TextModificationLayout } from '../..';

function UnicodeTextConverter() {
    const unicodeTextTransform = (text) => {
        return text.split('').map(char => `\\u${char.charCodeAt(0).toString(16).toUpperCase()}`).join(' ');
    };

    return (
        <TextModificationLayout
            title="Unicode Text Converter"
            description="Convert your text into Unicode format. Useful for representing characters in various Unicode code points."
            transformFunction={unicodeTextTransform}
        />
    );
}

export default UnicodeTextConverter;
