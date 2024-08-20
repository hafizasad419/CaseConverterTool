import React from 'react';
import { TextModificationLayout } from '../..';

function CursedTextTool() {
    const cursedTextTransform = (text) => {
        // Generate cursed text by adding random diacritics
        const diacritics = [
            '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u0309', '\u030A', 
            '\u030B', '\u030C', '\u030D', '\u030E', '\u030F', '\u0310', '\u0311', '\u0312', '\u0313', '\u0314', '\u0315',
            '\u0316', '\u0317', '\u0318', '\u0319', '\u031A', '\u031B', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320',
        ];

        return text.split('').map(char => {
            const randomDiacritics = Array.from({ length: 3 }, () => diacritics[Math.floor(Math.random() * diacritics.length)]);
            return char + randomDiacritics.join('');
        }).join('');
    };

    return <TextModificationLayout
        title="Cursed Text Tool"
        description="Create spooky and glitchy text effects with our cursed text tool. Perfect for adding an eerie and unsettling vibe to your content."
        transformFunction={cursedTextTransform} />;
}

export default CursedTextTool;
