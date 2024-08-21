import React, { useCallback } from 'react';
import {TextModificationLayout} from '../../'; 

const sortWordsAlphabetically = (text) => {
    return text
        .split(/\s+/)
        .sort((a, b) => a.localeCompare(b))
        .join(' ');
};

const SortWordsAlphabetically = () => {
    const transformFunction = useCallback((text) => sortWordsAlphabetically(text), []);

    return (
        <TextModificationLayout
            transformFunction={transformFunction}
            title="Sort Words Alphabetically"
            description="Sort the words in your text alphabetically."
            style={{ backgroundColor: '#f5f5f5' }} // Custom style if needed
        />
    );
}

export default SortWordsAlphabetically;
