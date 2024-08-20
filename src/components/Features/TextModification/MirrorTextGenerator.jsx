import React from 'react';
import { TextModificationLayout } from '../..';

function MirrorTextGenerator() {
    const mirrorTextTransform = (text) => {
        return text.split('').reverse().join(''); // Reverses the text
    };

    return (
        <TextModificationLayout
            title="Mirror Text Generator"
            description="Transform your text into its mirrored version. Perfect for creating a reversed text effect."
            transformFunction={mirrorTextTransform}
        />
    );
}

export default MirrorTextGenerator;
