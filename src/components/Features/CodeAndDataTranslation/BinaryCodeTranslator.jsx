import React from 'react';
import { TextModificationLayout } from '../..';

function BinaryCodeTranslator() {
    const binaryCodeTransform = (text) => {
        return text.split('').map(char => {
            const binary = char.charCodeAt(0).toString(2).padStart(8, '0');
            return binary;
        }).join(' ');
    };

    return (
        <TextModificationLayout
            title="Binary Code Translator"
            description="Convert your text into binary code for a unique digital effect."
            transformFunction={binaryCodeTransform}
        />
    );
}

export default BinaryCodeTranslator;
