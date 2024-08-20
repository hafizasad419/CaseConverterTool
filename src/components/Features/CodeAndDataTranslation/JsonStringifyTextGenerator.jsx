import React from 'react';
import { TextModificationLayout } from '../..';

function JsonStringifyTextGenerator() {
    const jsonStringifyTransform = (text) => {
        try {
            const parsed = JSON.parse(text);
            return JSON.stringify(parsed, null, 2);
        } catch (error) {
            return "Invalid JSON input";
        }
    };

    return (
        <TextModificationLayout
            title="JSON Stringify Text Generator"
            description="Format your JSON text into a readable, indented format."
            transformFunction={jsonStringifyTransform}
        />
    );
}

export default JsonStringifyTextGenerator;
