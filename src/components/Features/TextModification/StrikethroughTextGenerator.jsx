import React from 'react';
import { TextModificationLayout } from '../..';

function StrikethroughTextGenerator() {
    const strikethroughTextTransform = (text) => {
        return text.split('').map(char => char === ' ' ? ' ' : `~${char}~`).join('');
    };

    return (
        <TextModificationLayout
            title="Strikethrough Text Generator"
            description="Add strikethrough formatting to your text. Perfect for highlighting text that has been removed or is no longer relevant."
            transformFunction={strikethroughTextTransform}
        />
    );
}

export default StrikethroughTextGenerator;
