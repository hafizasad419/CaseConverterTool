import React from 'react';
import { TextModificationLayout } from '../..';

function RemoveLineBreaks() {
    const removeLineBreaksTransform = (text) => {
        return text.replace(/\r?\n|\r/g, ' ');
    };

    return (
        <TextModificationLayout
            title="Remove Line Breaks"
            description="Eliminate all line breaks from your text to make it continuous. Useful for formatting text without breaks."
            transformFunction={removeLineBreaksTransform}
        />
    );
}

export default RemoveLineBreaks;
