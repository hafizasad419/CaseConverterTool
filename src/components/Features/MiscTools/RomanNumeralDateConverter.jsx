import React, { useCallback } from 'react';
import {TextModificationLayout} from '../../'; 

const toRoman = (num) => {
    const romanNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
        ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9],
        ['V', 5], ['IV', 4], ['I', 1]
    ];
    let roman = '';
    for (const [letter, value] of romanNumerals) {
        while (num >= value) {
            roman += letter;
            num -= value;
        }
    }
    return roman;
};

const formatDateToRoman = (date) => {
    const d = new Date(date);
    const day = toRoman(d.getDate());
    const month = toRoman(d.getMonth() + 1);
    const year = toRoman(d.getFullYear());
    return `${day}/${month}/${year}`;
};

const RomanNumeralDateConverter = () => {
    const transformFunction = useCallback((text) => formatDateToRoman(text), []);

    return (
        <TextModificationLayout
            transformFunction={transformFunction}
            title="Roman Numeral Date Converter"
            description="Convert your date to Roman numeral format."
            style={{ backgroundColor: '#f5f5f5' }} // Custom style if needed
        />
    );
}

export default RomanNumeralDateConverter;
