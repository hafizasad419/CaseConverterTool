import React from 'react';
import { TextModificationLayout } from '../..';

function UTF8EncoderDecoder() {
    const utf8EncodeDecodeTransform = (text) => {
        try {
            return unescape(encodeURIComponent(text));
        } catch (e) {
            return decodeURIComponent(escape(text));
        }
    };

    return (
        <TextModificationLayout
            title="UTF-8 Encoder/Decoder"
            description="Encode or decode text into UTF-8 format for accurate representation in different systems."
            transformFunction={utf8EncodeDecodeTransform}
        />
    );
}

export default UTF8EncoderDecoder;
