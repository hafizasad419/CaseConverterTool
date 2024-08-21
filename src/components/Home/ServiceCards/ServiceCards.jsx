import React from 'react';
import { ServiceCardLayout } from '../..';

const services = [
    { title: 'Random Date Generator', description: 'Generate random dates.', route: '/random-generators/random-date-generator' },
    { title: 'Image to Text Converter', description: 'Extract text from images.', route: '/image-tools/image-to-text-converter' },
    { title: 'Slugify URL Generator', description: 'Create slug-friendly URLs.', route: '/code-data-translation/slugify-url-generator' },
    { title: 'PNG to WebP Converter', description: 'Convert PNG images to WebP format.', route: '/image-tools/png-to-webp-converter' },
    { title: 'Bubble Text Generator', description: 'Generate bubble-styled text.', route: '/convert-case/bubble-text-generator' },
    { title: 'Random Number Generator', description: 'Generate random numbers.', route: '/random-generators/random-number-generator' },
    { title: 'Sentence Counter', description: 'Count sentences in text.', route: '/misc-tools/online-sentence-counter' },
    { title: 'UTF-8 Encoder/Decoder', description: 'Encode or decode UTF-8 text.', route: '/code-data-translation/utf-8-encoder-decoder' },
    { title: 'Random Letter Generator', description: 'Generate random letters.', route: '/random-generators/random-letter-generator' },
    { title: 'Mirror Text Generator', description: 'Create mirror-style text.', route: '/convert-case/mirror-text-generator' },
    { title: 'JPG to WebP Converter', description: 'Convert JPG images to WebP format.', route: '/image-tools/jpg-to-webp-converter' },
    { title: 'Random Choice Generator', description: 'Generate random choices.', route: '/random-generators/random-choice-generator' },
    { title: 'Reverse Text Generator', description: 'Reverse the order of text.', route: '/convert-case/reverse-text-generator' },
    { title: 'Binary Code Translator', description: 'Translate text to binary code.', route: '/code-data-translation/binary-code-translator' },
    { title: 'Roman Numeral Date Converter', description: 'Convert dates to Roman numerals.', route: '/misc-tools/roman-numeral-date-converter' },
    { title: 'Text Replacement Tool', description: 'Replace text quickly and easily.', route: '/misc-tools/text-replacement-tool' },
    { title: 'Italic Text Converter', description: 'Italicize your text quickly.', route: '/convert-case/italic-text-converter' },
    { title: 'NATO Phonetic Alphabet', description: 'Translate text to NATO phonetic alphabet.', route: '/misc-tools/nato-phonetic-alphabet-translator' },
    { title: 'Online Notepad', description: 'Use a simple online notepad.', route: '/misc-tools/online-notepad' },
    { title: 'WebP to JPG Converter', description: 'Convert WebP images to JPG.', route: '/image-tools/webp-to-jpg-converter' },
    { title: 'Number Sorter', description: 'Sort numbers easily.', route: '/code-data-translation/number-sorter' },
    { title: 'Strong Password Generator', description: 'Generate strong passwords.', route: '/random-generators/strong-password-generator' },
    { title: 'Remove Text Formatting', description: 'Remove text formatting from text.', route: '/convert-case/remove-text-formatting' },
    { title: 'Duplicate Line Remover', description: 'Remove duplicate lines from text.', route: '/convert-case/duplicate-line-remover' },
    { title: 'Random Month Generator', description: 'Generate random months.', route: '/random-generators/random-month-generator' },
    { title: 'URL Encode/Decode', description: 'Encode or decode URLs.', route: '/code-data-translation/url-encode-and-decode' },
    { title: 'PNG to JPG Converter', description: 'Convert PNG images to JPG.', route: '/image-tools/png-to-jpg-converter' },
    { title: 'Repeat Text Generator', description: 'Generate repeated text patterns.', route: '/misc-tools/repeat-text-generator' },
    { title: 'CSV to JSON Converter', description: 'Convert CSV data to JSON format.', route: '/code-data-translation/csv-to-json-converter' },
    { title: 'Invisible Text Generator', description: 'Create invisible text.', route: '/convert-case/invisible-text-generator' },
    { title: 'ROT13 Encoder/Decoder', description: 'Encode and decode ROT13 text.', route: '/code-data-translation/rot13-encoder-decoder' },
    { title: 'Hex to Text Converter', description: 'Convert hex code to text.', route: '/code-data-translation/hex-to-text-converter' },
    { title: 'Random IP Generator', description: 'Generate random IP addresses.', route: '/random-generators/random-ip-address-generator' },
    { title: 'WebP to PNG Converter', description: 'Convert WebP images to PNG.', route: '/image-tools/webp-to-png-converter' },
    { title: 'Sort Words Alphabetically', description: 'Sort words in alphabetical order.', route: '/misc-tools/sort-words-alphabetically' },
    { title: 'Facebook Font Generator', description: 'Generate stylish fonts for Facebook.', route: '/convert-case/facebook-font-generator' },
    { title: 'Big Text Converter', description: 'Convert text to big letters.', route: '/convert-case/big-text-converter' },
    { title: 'ASCII Art Generator', description: 'Generate ASCII art from images.', route: '/image-tools/ascii-art-generator' },
    { title: 'JSON Stringify Generator', description: 'Generate JSON stringify text.', route: '/code-data-translation/json-stringify-text-generator' },
    { title: 'Cursed Text Tool', description: 'Create cursed text for fun.', route: '/convert-case/cursed-text-tool' },
    { title: 'SVG to PNG Converter', description: 'Convert SVG images to PNG.', route: '/image-tools/svg-to-png-converter' },
    { title: 'JPG to PNG Converter', description: 'Convert JPG images to PNG.', route: '/image-tools/jpg-to-png-converter' }
  ];
  

const ServiceCards = () => {
    return (
        <div className="my-8 px-4">
            <h1 className="text-center text-4xl my-4 md:text-6xl text-customGray font-bold">Explore Our Tools</h1>
            <p className="text-center text-sm md:text-lg mb-6">Discover the most popular and frequently used services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <ServiceCardLayout key={index} title={service.title} description={service.description} route={service.route} />
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
