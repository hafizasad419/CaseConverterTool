import React from 'react';
import { TextModificationLayout } from '../../';

function CsvToJsonConverter() {
    const csvToJsonTransform = (text) => {
        const rows = text.trim().split('\n').map(row => row.split(','));

        // If there's only one row, treat it as a single object
        if (rows.length === 1) {
            const [headers] = rows;
            return JSON.stringify([
                headers.reduce((acc, header, index) => {
                    acc[header || ""] = header; // Map headers to their own values
                    return acc;
                }, {})
            ], null, 2);
        }

        // If there are multiple rows, process as usual
        const [headers, ...data] = rows;

        const json = data.map(row => {
            return headers.reduce((acc, header, index) => {
                acc[header || ""] = row[index] || "";
                return acc;
            }, {});
        });

        return JSON.stringify(json, null, 2);
    };

    return (
        <TextModificationLayout
            title="CSV to JSON Converter"
            description="Convert CSV data into JSON format for easier manipulation and integration."
            transformFunction={csvToJsonTransform}
        />
    );
}

export default CsvToJsonConverter;
