import React from 'react';
import { TextModificationLayout } from '../..';

function TitleCaseConverter() {
    const titleCaseTransform = (text) => {
        return text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    return (
        <TextModificationLayout
            title="Title Case Converter"
            description="Convert your text into title case, where the first letter of each word is capitalized."
            transformFunction={titleCaseTransform}
        />
    );
}

export default TitleCaseConverter;
