import React from 'react';
import { TextModificationLayout } from '../..';

function ZalgoGlitchTextGenerator() {
    const zalgoGlitchTextTransform = (text) => {
        const zalgoEffect = ['̒', '̓', '̔', '̕', '̖', '̗', '̘', '̙', '̚', '̛', '̜', '̝', '̞', '̟', '̠', '̡', '̢', '̣', '̤', '̥', '̦', '̧', '̨', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̴', '̵', '̶', '̷', '̸', '̹', '̺', '̻', '̼', '̽', '̾', '̿'];
        return text.split('').map(char => `${char}${zalgoEffect[Math.floor(Math.random() * zalgoEffect.length)]}`).join('');
    };

    return (
        <TextModificationLayout
            title="Zalgo Glitch Text Generator"
            description="Create glitchy, distorted text effects with our Zalgo text generator. Perfect for adding a creepy or chaotic touch."
            transformFunction={zalgoGlitchTextTransform}
        />
    );
}

export default ZalgoGlitchTextGenerator;
