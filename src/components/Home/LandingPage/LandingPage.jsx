import React, { useState } from 'react'
import { Clear, CopyToClipboard, DownloadText, PrimaryButton } from '../../../utils'



function LandingPage() {
    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const transformText = (transformType) => {
        let newText = '';
        switch (transformType) {
            case 'sentence':
                newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
                break;
            case 'lower':
                newText = text.toLowerCase();
                break;
            case 'upper':
                newText = text.toUpperCase();
                break;
            case 'capitalized':
                newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
                break;
            case 'alternating':
                newText = text.split('').map((char, index) =>
                    index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            case 'title':
                newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
                break;
            case 'inverse':
                newText = text.split('').map(char =>
                    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
                ).join('');
                break;
            default:
                newText = text;
        }
        setText(newText);
    };


    return (
        <div>

            <h1 className='text center text-2xl my-4 md:text-5xl text-customGray text-center font-bold'>Convert, Whatever❤!</h1>

            <div className="flex flex-col items-center p-4">
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    className="w-full lg:w-[80vw] h-32 p-2 mb-4 border border-gray-300 rounded-lg resize-none"
                    placeholder="Type or paste your text here..."
                />
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <PrimaryButton onClick={() => transformText('sentence')}>Sentence case</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('lower')}>lower case</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('upper')}>UPPER CASE</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('capitalized')}>Capitalized Case</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('alternating')}>aLtErNaTiNg cAsE</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('title')}>Title Case</PrimaryButton>
                    <PrimaryButton onClick={() => transformText('inverse')}>InVeRsE CaSe</PrimaryButton>
                    <DownloadText text={text}/>
                    <CopyToClipboard text={text} />
                    <Clear setText={setText} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage