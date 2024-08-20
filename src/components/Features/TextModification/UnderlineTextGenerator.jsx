import React from 'react';
import { TextModificationLayout } from '../..';

function UnderlineTextGenerator() {
    const underlineTextTransform = (text) => {
        return text.split('').map(char => char === ' ' ? ' ' : `_${char}_`).join('');
    };

    return (
        <TextModificationLayout
            title="Underline Text Generator"
            description="Generate underlined text by adding underscores before and after each character."
            transformFunction={underlineTextTransform}
        />
    );
}

export default UnderlineTextGenerator;
