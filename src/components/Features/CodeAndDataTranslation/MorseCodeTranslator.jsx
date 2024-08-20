import React from 'react';
import { TextModificationLayout } from '../..';

function MorseCodeTranslator() {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': ' / '
    };

    const morseCodeTransform = (text) => {
        return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
    };

    return (
        <TextModificationLayout
            title="Morse Code Translator"
            description="Convert your text into Morse code for an old-school communication effect."
            transformFunction={morseCodeTransform}
        />
    );
}

export default MorseCodeTranslator;
