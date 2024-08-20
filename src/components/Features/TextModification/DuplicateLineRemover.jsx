import React from 'react';
import { TextModificationLayout } from '../..';

function DuplicateLineRemover() {
    const removeDuplicateLines = (text) => {
        const lines = text.split(/\r?\n/);
        const uniqueLines = [...new Set(lines)];
        return uniqueLines.join('\n');
    };

    return <TextModificationLayout
        title="Duplicate Line Remover"
        description="Easily remove duplicate lines from your text. Perfect for cleaning up lists, removing redundant information, and ensuring unique entries."
        transformFunction={removeDuplicateLines} />;
}

export default DuplicateLineRemover;
