import React from 'react';
import { TextModificationLayout } from '../../';

function InvisibleTextGenerator() {
    const invisibleTextTransform = (text) => {
        // Using a zero-width space and zero-width non-joiner to make text "invisible"
        return text.split('').map(char => `${char}\u200B\u200C`).join('');
    };

    return (
        <TextModificationLayout
            title="Invisible Text Generator"
            description="Transform your text into invisible text with zero-width characters. Ideal for creating text that is visually hidden but still selectable."
            transformFunction={invisibleTextTransform}
        />
    );
}

export default InvisibleTextGenerator;
