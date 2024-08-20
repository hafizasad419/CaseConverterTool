import React from 'react';
import { TextModificationLayout } from '../..';

function FacebookFontGenerator() {
    const facebookFontTransform = (text) => {
        const facebookFontMap = {
            'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
            'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
            'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
        };
        return text.split('').map(char => facebookFontMap[char.toLowerCase()] || char).join('');
    };

    return <TextModificationLayout
        title="Facebook Font Generator"
        description="Generate stylish and unique fonts for your Facebook posts and messages. Stand out in your social media presence with this Facebook font generator."
        transformFunction={facebookFontTransform} />;
}

export default FacebookFontGenerator;
