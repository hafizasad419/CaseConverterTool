import React from 'react';
import { TextModificationLayout } from '../..';

function WingdingsConverter() {
    const wingdingsMap = {
        'a': '', 'b': '', 'c': '', 'd': '', 'e': '', 'f': '', 'g': '', 'h': '', 'i': '', 'j': '',
        'k': '', 'l': '', 'm': '', 'n': '', 'o': '', 'p': '', 'q': '', 'r': '', 's': '', 't': '',
        'u': '', 'v': '', 'w': '', 'x': '', 'y': '', 'z': '',
        'A': '', 'B': '', 'C': '', 'D': '', 'E': '', 'F': '', 'G': '', 'H': '', 'I': '', 'J': '',
        'K': '', 'L': '', 'M': '', 'N': '', 'O': '', 'P': '', 'Q': '', 'R': '', 'S': '', 'T': '',
        'U': '', 'V': '', 'W': '', 'X': '', 'Y': '', 'Z': ''
    };
    const wingdingsTransform = (text) => {
        return text.split('').map(char => wingdingsMap[char] || char).join('');
    };

    return (
        <TextModificationLayout
            title="Wingdings Converter"
            description="Convert your text into Wingdings symbols for a unique typographic effect."
            transformFunction={wingdingsTransform}
        />
    );
}

export default WingdingsConverter;
