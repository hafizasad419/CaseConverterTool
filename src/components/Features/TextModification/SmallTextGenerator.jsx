import React from 'react';
import { TextModificationLayout } from '../..';

function SmallTextGenerator() {
    const smallTextTransform = (text) => {
        const smallTextMap = {
            'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
            'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
            'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
        };
        return text.split('').map(char => smallTextMap[char.toLowerCase()] || char).join('');
    };

    return (
        <TextModificationLayout
            title="Small Text Generator"
            description="Transform your text into smaller, stylish fonts with this generator."
            transformFunction={smallTextTransform}
        />
    );
}

export default SmallTextGenerator;
