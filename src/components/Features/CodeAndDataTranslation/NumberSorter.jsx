import React from 'react';
import { TextModificationLayout } from '../..';

function NumberSorter() {
    const numberSorterTransform = (text) => {
        const numbers = text.split(/\s+/).map(Number).filter(n => !isNaN(n));
        return numbers.sort((a, b) => a - b).join(' ');
    };

    return (
        <TextModificationLayout
            title="Number Sorter"
            description="Sort numbers in ascending order to help with data organization and analysis."
            transformFunction={numberSorterTransform}
        />
    );
}

export default NumberSorter;
