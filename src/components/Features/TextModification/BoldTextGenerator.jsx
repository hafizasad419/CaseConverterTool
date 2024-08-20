import React from 'react';
import { TextModificationLayout } from '../../';

function BoldTextGenerator() {
    const boldTextTransform = (text) => {
        const boldTextMap = {
            'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
            'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
            'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
        };
        return text.split('').map(char => boldTextMap[char.toLowerCase()] || char).join('');
    };

    return <TextModificationLayout
        title="Bold Text Generator"
        description="Use this amazing bold text generator. Simply paste or write the text that you need to be converted into a bold font into the left field, then as you write it, you will see it being converted into bold into the field on the right. Then simply copy it from the bold text converter and paste it where you want it to go."
        transformFunction={boldTextTransform} />;
}

export default BoldTextGenerator;
