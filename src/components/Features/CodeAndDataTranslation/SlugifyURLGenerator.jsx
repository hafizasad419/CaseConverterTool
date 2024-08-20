import React from 'react';
import { TextModificationLayout } from '../..';

function SlugifyURLGenerator() {
    const slugifyTransform = (text) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
    };

    return (
        <TextModificationLayout
            title="Slugify URL Generator"
            description="Generate URL-friendly slugs from your text, perfect for SEO and clean URL structures."
            transformFunction={slugifyTransform}
        />
    );
}

export default SlugifyURLGenerator;
