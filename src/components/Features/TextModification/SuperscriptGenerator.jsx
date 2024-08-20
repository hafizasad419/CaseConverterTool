import React from 'react';
import { TextModificationLayout } from '../..';

function SuperscriptGenerator() {
    const superscriptTextTransform = (text) => {
        const superscriptMap = {
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
            '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
        };
        return text.split('').map(char => superscriptMap[char] || char).join('');
    };

    return (
        <TextModificationLayout
            title="Superscript Generator"
            description="Transform your text into superscript format, ideal for mathematical notations, footnotes, and more."
            transformFunction={superscriptTextTransform}
        />
    );
}

export default SuperscriptGenerator;
