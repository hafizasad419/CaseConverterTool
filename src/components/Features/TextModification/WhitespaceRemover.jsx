import React from 'react';
import { TextModificationLayout } from '../..';

function WhitespaceRemover() {
    const whitespaceRemoverTransform = (text) => {
        return text.replace(/\s+/g, ' ').trim();
    };

    return (
        <TextModificationLayout
            title="Whitespace Remover"
            description="Remove unnecessary whitespace from your text, leaving only single spaces between words."
            transformFunction={whitespaceRemoverTransform}
        />
    );
}

export default WhitespaceRemover;
