import React from 'react';
import { TextModificationLayout } from '../..';

function URLEncodeDecode() {
    const urlEncodeDecodeTransform = (text) => {
        try {
            return encodeURIComponent(text);
        } catch (e) {
            return decodeURIComponent(text);
        }
    };

    return (
        <TextModificationLayout
            title="URL Encode and Decode"
            description="Easily encode or decode URLs to ensure they are correctly formatted for use in web addresses."
            transformFunction={urlEncodeDecodeTransform}
        />
    );
}

export default URLEncodeDecode;
