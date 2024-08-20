import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Import dropdown, hamburger, and close icons
import { motion } from 'framer-motion'; // Import Framer Motion for smooth animations
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

// Array of navbar items with their corresponding services and routes
const navbarItems = [
    {
        name: 'Convert Case',

    },
    {
        name: 'Text Modification/Formatting',
        services: [
            { name: 'Big Text Converter', route: '/convert-case/big-text-converter' },
            { name: 'Bold Text Generator', route: '/convert-case/bold-text-generator' },
            { name: 'Bubble Text Generator', route: '/convert-case/bubble-text-generator' },
            { name: 'Cursed Text Tool', route: '/convert-case/cursed-text-tool' },
            { name: 'Duplicate Line Remover', route: '/convert-case/duplicate-line-remover' },
            { name: 'Facebook Font Generator', route: '/convert-case/facebook-font-generator' },
            { name: 'Invisible Text Generator', route: '/convert-case/invisible-text-generator' },
            { name: 'Italic Text Converter', route: '/convert-case/italic-text-converter' },
            { name: 'Mirror Text Generator', route: '/convert-case/mirror-text-generator' },
            { name: 'Phonetic Spelling Generator', route: '/convert-case/phonetic-spelling-generator' },
            { name: 'Pig Latin Translator', route: '/convert-case/pig-latin-translator' },
            { name: 'Plain Text Converter', route: '/convert-case/plain-text-converter' },
            { name: 'Remove Line Breaks', route: '/convert-case/remove-line-breaks' },
            { name: 'Remove Text Formatting', route: '/convert-case/remove-text-formatting' },
            { name: 'Reverse Text Generator', route: '/convert-case/reverse-text-generator' },
            { name: 'Sentence Case Converter', route: '/convert-case/sentence-case-converter' },
            { name: 'Small Text Generator', route: '/convert-case/small-text-generator' },
            { name: 'Stacked Text Generator', route: '/convert-case/stacked-text-generator' },
            { name: 'Strikethrough Text Generator', route: '/convert-case/strikethrough-text-generator' },
            { name: 'Superscript Generator', route: '/convert-case/superscript-generator' },
            { name: 'Title Case Converter', route: '/convert-case/title-case-converter' },
            { name: 'Underline Text Generator', route: '/convert-case/underline-text-generator' },
            { name: 'Unicode Text Converter', route: '/convert-case/unicode-text-converter' },
            { name: 'Upside Down Text Generator', route: '/convert-case/upside-down-text-generator' },
            { name: 'Whitespace Remover', route: '/convert-case/whitespace-remover' },
            { name: 'Wide Text Generator', route: '/convert-case/wide-text-generator' },
            { name: 'Wingdings Converter', route: '/convert-case/wingdings-converter' },
            { name: 'Zalgo Glitch Text Generator', route: '/convert-case/zalgo-glitch-text-generator' }
        ],
    },
    {
        name: 'Code & Data Translation',
        services: [
            { name: 'Code & Data Translation', route: '/code-data-translation/code-data-translation' },
            { name: 'Binary Code Translator', route: '/code-data-translation/binary-code-translator' },
            { name: 'CSV to JSON Converter', route: '/code-data-translation/csv-to-json-converter' },
            { name: 'Hex to Text Converter', route: '/code-data-translation/hex-to-text-converter' },
            { name: 'JSON Stringify Text Generator', route: '/code-data-translation/json-stringify-text-generator' },
            { name: 'Morse Code Translator', route: '/code-data-translation/morse-code-translator' },
            { name: 'Number Sorter', route: '/code-data-translation/number-sorter' },
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

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [dropdownTimer, setDropdownTimer] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (index) => {
        clearTimeout(dropdownTimer); // Clear the timer if user hovers back quickly
        setActiveDropdown(index);
    };

    const closeDropdownWithDelay = () => {
        const timer = setTimeout(() => {
            setActiveDropdown(null);
        }, 700); // Set a delay before closing the dropdown
        setDropdownTimer(timer);
    };

    useEffect(() => {
        return () => {
            clearTimeout(dropdownTimer); // Clear timer when component unmounts
        };
    }, [dropdownTimer]);

    return (
        <nav className="bg-gradient-to-r from-[#313131] to-[#515151] text-white p-4 flex justify-between md:justify-evenly items-center md:py-8">
            <div className="text-2xl font-bold">
                Syed Alam
            </div>

            {/* Hamburger icon for mobile */}
            <div className="block md:hidden fixed top-4 right-4 z-20">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Navbar items */}
            <div className={`flex-col md:flex-row md:flex gap-4 items-center ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                {navbarItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => toggleDropdown(index)}
                        onMouseLeave={closeDropdownWithDelay}
                    >
                        <button className="flex items-center gap-1 focus:outline-none">
                            {item.name} {item.services && <FaChevronDown size={12} />}
                        </button>
                        {activeDropdown === index && item.services && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 top-full mt-2 bg-white text-black rounded-lg shadow-lg z-10"
                            >
                                <ul className="py-2">
                                    {item.services.map((service, i) => (
                                        <li key={i} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                            <NavLink to={service.route} className="block w-full h-full">
                                                {service.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Header;
