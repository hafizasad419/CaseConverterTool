import React from 'react';
import { TextModificationLayout } from '../..';

function ROT13EncoderDecoder() {
    const rot13Transform = (text) => {
        return text.replace(/[A-Za-z]/g, (char) => {
            const base = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
        });
    };

    return (
        <TextModificationLayout
            title="ROT13 Encoder/Decoder"
            description="Encode or decode text using the ROT13 cipher, a simple letter substitution that shifts characters by 13 places."
            transformFunction={rot13Transform}
        />
    );
}

export default ROT13EncoderDecoder;
