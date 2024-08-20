import React from 'react';
import { TextModificationLayout } from '../../';


function BubbleTextGenerator() {
    const bubbleTextTransform = (text) => {
        const bubbleTextMap = {
            'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
            'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
            'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
        };
        return text.split('').map(char => bubbleTextMap[char.toLowerCase()] || char).join('');
    };

    return <TextModificationLayout 
    title="Bubble Text Generator"
    description="Want quick online tool that transforms your normal text into a bubble format? Simply write out the text in the left panel and see it get converted into the bubble font."
    transformFunction={bubbleTextTransform} />;
}

export default BubbleTextGenerator;
