import React from 'react';
import { NavLink } from 'react-router-dom';


//footerDataArray
const footerData = [
  {
    name: 'Text Tools',
    services: [
      { name: 'Big Text Converter', route: '/convert-case/big-text-converter' },
      { name: 'Bold Text Generator', route: '/convert-case/bold-text-generator' },
      { name: 'Bubble Text Generator', route: '/convert-case/bubble-text-generator' },
      { name: 'Cursed Text Tool', route: '/convert-case/cursed-text-tool' },
      { name: 'Facebook Font Generator', route: '/convert-case/facebook-font-generator' },
      { name: 'Phonetic Spelling Generator', route: '/convert-case/phonetic-spelling-generator' },
      { name: 'Superscript Generator', route: '/convert-case/superscript-generator' },
      { name: 'Title Case Converter', route: '/convert-case/title-case-converter' },
      { name: 'Underline Text Generator', route: '/convert-case/underline-text-generator' },
      { name: 'Unicode Text Converter', route: '/convert-case/unicode-text-converter' },
      { name: 'Upside Down Text Generator', route: '/convert-case/upside-down-text-generator' },
      { name: 'Whitespace Remover', route: '/convert-case/whitespace-remover' },

    ],
  },
  {
    name: 'Code & Data Translation',
    services: [
      { name: 'Binary Code Translator', route: '/code-data-translation/binary-code-translator' },
      { name: 'CSV to JSON Converter', route: '/code-data-translation/csv-to-json-converter' },
      { name: 'ROT13 Encoder/Decoder', route: '/code-data-translation/rot13-encoder-decoder' },
      { name: 'Slugify URL Generator', route: '/code-data-translation/slugify-url-generator' },
      { name: 'URL Encode and Decode', route: '/code-data-translation/url-encode-and-decode' },
      { name: 'UTF-8 Encoder/Decoder', route: '/code-data-translation/utf-8-encoder-decoder' },
      { name: 'UTM Builder Generator', route: '/code-data-translation/utm-builder-generator' }
    ],
  },
  {
    name: 'Image Tools',
    services: [
      { name: 'Ascii Art Generator', route: '/image-tools/ascii-art-generator' },
      { name: 'Image to Text Converter', route: '/image-tools/image-to-text-converter' },
      { name: 'JPG to PNG Converter', route: '/image-tools/jpg-to-png-converter' },
      { name: 'JPG to WebP Converter', route: '/image-tools/jpg-to-webp-converter' },
      { name: 'PNG to JPG Converter', route: '/image-tools/png-to-jpg-converter' },
      { name: 'PNG to WebP Converter', route: '/image-tools/png-to-webp-converter' },
      { name: 'SVG to PNG Converter', route: '/image-tools/svg-to-png-converter' },
      { name: 'WebP to JPG Converter', route: '/image-tools/webp-to-jpg-converter' },
      { name: 'WebP to PNG Converter', route: '/image-tools/webp-to-png-converter' }
    ],
  },
  {
    name: 'Random Generators',
    services: [
      { name: 'Random Choice Generator', route: '/random-generators/random-choice-generator' },
      { name: 'Random Date Generator', route: '/random-generators/random-date-generator' },
      { name: 'Random IP Address Generator', route: '/random-generators/random-ip-address-generator' },
      { name: 'Random Letter Generator', route: '/random-generators/random-letter-generator' },
      { name: 'Random Month Generator', route: '/random-generators/random-month-generator' },
      { name: 'Random Number Generator', route: '/random-generators/random-number-generator' },
      { name: 'Strong Password Generator', route: '/random-generators/strong-password-generator' }
    ],
  },
  {
    name: 'Misc. Tools',
    services: [
      { name: 'NATO Phonetic Alphabet Translator', route: '/misc-tools/nato-phonetic-alphabet-translator' },
      { name: 'Online Notepad', route: '/misc-tools/online-notepad' },
      { name: 'Online Sentence Counter', route: '/misc-tools/online-sentence-counter' },
      { name: 'Repeat Text Generator', route: '/misc-tools/repeat-text-generator' },
      { name: 'Roman Numeral Date Converter', route: '/misc-tools/roman-numeral-date-converter' },
      { name: 'Sort Words Alphabetically', route: '/misc-tools/sort-words-alphabetically' },
      { name: 'Text Replacement Tool', route: '/misc-tools/text-replacement-tool' }
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#313131] to-[#515151] text-white py-8 md:px-0 px-2 mt-48">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
      {/* Left Side */}
      <div className="flex flex-col md:w-1/3">
        <h2 className="text-2xl font-extrabold">Convert Text Pro</h2>
        <p className="text-sm">
          Made With ❤ by{' '}
          <a href="https://www.upwork.com/freelancers/~01636165d98c3a5679" target="_blank" rel="noopener noreferrer" className="underline">
            Asad Riaz
          </a>
        </p>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full md:w-2/3">
        {footerData.map((category, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="font-bold mb-2">{category.name}</h3>
            <ul className="space-y-1">
              {category.services.map((service, i) => (
                <li key={i}>
                  <NavLink to={service.route} className="hover:underline">
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8 text-center">
      <p className="text-sm">© 2024 Convert Text Pro. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
