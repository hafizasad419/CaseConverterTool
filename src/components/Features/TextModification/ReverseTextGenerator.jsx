import React from 'react';
import { TextModificationLayout } from '../..';

function ReverseTextGenerator() {
    const reverseTextTransform = (text) => {
        return text.split('').reverse().join('');
    };

    return (
        <TextModificationLayout
            title="Reverse Text Generator"
            description="Reverse the characters in your text to create a mirrored effect."
            transformFunction={reverseTextTransform}
        />
    );
}

export default ReverseTextGenerator;
