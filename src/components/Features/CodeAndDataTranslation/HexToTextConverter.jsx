import React from 'react';
import { TextModificationLayout } from '../../';

function HexToTextConverter() {
    const hexToTextTransform = (text) => {
        // Remove any non-hexadecimal characters (like spaces or commas)
        const cleanHex = text.replace(/[^0-9A-Fa-f]/g, '');

        // Convert the cleaned hexadecimal string to text
        let output = '';
        for (let i = 0; i < cleanHex.length; i += 2) {
            const hexPair = cleanHex.slice(i, i + 2);
            const charCode = parseInt(hexPair, 16);
            if (!isNaN(charCode)) {
                output += String.fromCharCode(charCode);
            }
        }
        return output;
    };

    return (
        <TextModificationLayout
            title="Hex to Text Converter"
            description="Convert hexadecimal values to human-readable text."
            transformFunction={hexToTextTransform}
        />
    );
}

export default HexToTextConverter;
