import React from 'react';
import { TextModificationLayout } from '../../';


function BigTextConverter() {
    const bigTextTransform = (text) => {
        const bigTextMap = {
            'a': 'Ａ', 'b': 'Ｂ', 'c': 'Ｃ', 'd': 'Ｄ', 'e': 'Ｅ', 'f': 'Ｆ', 'g': 'Ｇ', 'h': 'Ｈ', 'i': 'Ｉ', 'j': 'Ｊ',
            'k': 'Ｋ', 'l': 'Ｌ', 'm': 'Ｍ', 'n': 'Ｎ', 'o': 'Ｏ', 'p': 'Ｐ', 'q': 'Ｑ', 'r': 'Ｒ', 's': 'Ｓ', 't': 'Ｔ',
            'u': 'Ｕ', 'v': 'Ｖ', 'w': 'Ｗ', 'x': 'Ｘ', 'y': 'Ｙ', 'z': 'Ｚ'
        };
        return text.split('').map(char => bigTextMap[char.toLowerCase()] || char).join('');
    };

    return <TextModificationLayout
        title="Big Text Converter"
        description="Feel the magic of transforming plain text into Big fonts with our big text generator. Elevate your messages, announcements, and designs to new heights by unleashing the creativity and impact of stylish text formatting."
        transformFunction={bigTextTransform} />;
}

export default BigTextConverter;
