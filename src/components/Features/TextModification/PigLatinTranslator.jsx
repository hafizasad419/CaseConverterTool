import React from 'react';
import { TextModificationLayout } from '../..';

function PigLatinTranslator() {
    const pigLatinTransform = (text) => {
        return text.split(' ').map(word => {
            const firstLetter = word.charAt(0);
            return word.slice(1) + firstLetter + 'ay';
        }).join(' ');
    };

    return (
        <TextModificationLayout
            title="Pig Latin Translator"
            description="Translate your text into Pig Latin. A fun way to play with language and create coded messages."
            transformFunction={pigLatinTransform}
        />
    );
}

export default PigLatinTranslator;
