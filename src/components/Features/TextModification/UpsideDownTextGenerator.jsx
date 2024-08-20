import React from 'react';
import { TextModificationLayout } from '../..';

function UpsideDownTextGenerator() {
    const upsideDownTextMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'ʎ', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z', ' ': ' '
    };
    const upsideDownTextTransform = (text) => {
        return text.split('').map(char => upsideDownTextMap[char] || char).join('');
    };

    return (
        <TextModificationLayout
            title="Upside Down Text Generator"
            description="Generate upside-down text. Perfect for adding a quirky or fun twist to your text."
            transformFunction={upsideDownTextTransform}
        />
    );
}

export default UpsideDownTextGenerator;
