import React, { useCallback } from 'react';
import {TextModificationLayout} from '../../'; // Adjust the import path as needed

const NATO_ALPHABET = {
    A: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot',
    G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima',
    M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo',
    S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray',
    Y: 'Yankee', Z: 'Zulu', '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three',
    '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
};

const transformToNATO = (text) => {
    return text.toUpperCase().split('').map(char => NATO_ALPHABET[char] || char).join(' ');
};

const NATOPhoneticAlphabetTranslator = () => {
    return (
        <TextModificationLayout
            transformFunction={useCallback(transformToNATO, [])}
            title="NATO Phonetic Alphabet Translator"
            description="Translate your text to NATO phonetic alphabet."
            style={{ backgroundColor: '#f5f5f5' }} // Custom style if needed
        />
    );
}

export default NATOPhoneticAlphabetTranslator;
