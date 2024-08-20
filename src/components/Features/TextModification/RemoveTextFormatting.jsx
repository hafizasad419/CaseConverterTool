import React from 'react';
import { TextModificationLayout } from '../..';

function RemoveTextFormatting() {
    const removeTextFormattingTransform = (text) => {
        // Remove HTML tags
        let cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
    
        // Remove bullets and list markers (e.g., •, *, -)
        cleanText = cleanText.replace(/•\s*|\*\s*|-\s*/g, '');
    
        // Remove extra whitespace around text
        cleanText = cleanText.replace(/\s+/g, ' ').trim();
    
        return cleanText;
    };
    return (
        <TextModificationLayout
            title="Remove Text Formatting"
            description="Strip out any text formatting or HTML tags to get clean, plain text."
            transformFunction={removeTextFormattingTransform}
        />
    );
}

export default RemoveTextFormatting;
