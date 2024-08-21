import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Layout from "./Layout/Layout";
import LandingPage from "./Home/LandingPage/LandingPage";

import TextModificationLayout from "./Features/TextModification/TextModificationLayout";
import BigTextConverter from "./Features/TextModification/BigTextConverter";
import BubbleTextGenerator from "./Features/TextModification/BubbleTextGenerator";
import BoldTextGenerator from "./Features/TextModification/BoldTextGenerator";
import CursedTextTool from "./Features/TextModification/CursedTextTool";
import FacebookFontGenerator from "./Features/TextModification/FacebookFontGenerator";
import DuplicateLineRemover from "./Features/TextModification/DuplicateLineRemover";
import MirrorTextGenerator from "./Features/TextModification/MirrorTextGenerator";
import ItalicTextConverter from "./Features/TextModification/ItalicTextConverter";
import InvisibleTextGenerator from "./Features/TextModification/InvisibleTextGenerator";
import PhoneticSpellingGenerator from "./Features/TextModification/PhoneticSpellingGenerator";
import PigLatinTranslator from "./Features/TextModification/PigLatinTranslator";
import PlainTextConverter from "./Features/TextModification/PlainTextConverter";
import RemoveTextFormatting from "./Features/TextModification/RemoveTextFormatting";
import ReverseTextGenerator from "./Features/TextModification/ReverseTextGenerator";
import SentenceCaseConverter from "./Features/TextModification/SentenceCaseConverter";
import SmallTextGenerator from "./Features/TextModification/SmallTextGenerator";
import StackedTextGenerator from "./Features/TextModification/StackedTextGenerator";
import RemoveLineBreaks from "./Features/TextModification/RemoveLineBreaks";
import StrikethroughTextGenerator from "./Features/TextModification/StrikethroughTextGenerator";
import SuperscriptGenerator from "./Features/TextModification/SuperscriptGenerator";
import TitleCaseConverter from "./Features/TextModification/TitleCaseConverter";
import UnderlineTextGenerator from "./Features/TextModification/UnderlineTextGenerator";
import UnicodeTextConverter from "./Features/TextModification/UnicodeTextConverter";
import UpsideDownTextGenerator from "./Features/TextModification/UpsideDownTextGenerator";
import WhitespaceRemover from "./Features/TextModification/WhitespaceRemover";
import WideTextGenerator from "./Features/TextModification/WideTextGenerator";
import WingdingsConverter from "./Features/TextModification/WingdingsConverter";
import ZalgoGlitchTextGenerator from "./Features/TextModification/ZalgoGlitchTextGenerator";
import BinaryCodeTranslator from "./Features/CodeAndDataTranslation/BinaryCodeTranslator";
import CsvToJsonConverter from "./Features/CodeAndDataTranslation/CsvToJsonConverter";
import HexToTextConverter from "./Features/CodeAndDataTranslation/HexToTextConverter";
import JsonStringifyTextGenerator from "./Features/CodeAndDataTranslation/JsonStringifyTextGenerator";
import MorseCodeTranslator from "./Features/CodeAndDataTranslation/MorseCodeTranslator";
import NumberSorter from "./Features/CodeAndDataTranslation/NumberSorter";
import ROT13EncoderDecoder from "./Features/CodeAndDataTranslation/ROT13EncoderDecoder";
import SlugifyURLGenerator from "./Features/CodeAndDataTranslation/SlugifyURLGenerator";
import URLEncodeDecode from "./Features/CodeAndDataTranslation/URLEncodeDecode";
import UTF8EncoderDecoder from "./Features/CodeAndDataTranslation/UTF8EncoderDecoder";
import UTMBuilderGenerator from "./Features/CodeAndDataTranslation/UTMBuilderGenerator";


import ImageToolsLayout from "./Features/ImageTools/ImageToolsLayout";
import AsciiArtGenerator from "./Features/ImageTools/AsciiArtGenerator";
import ImageToTextConverter from "./Features/ImageTools/ImageToTextConverter";
import JPGToPNGConverter from "./Features/ImageTools/JPGToPNGConverter";
import JPGToWebPConverter from "./Features/ImageTools/JPGToWebPConverter";
import PNGToJPGConverter from "./Features/ImageTools/PNGToJPGConverter";
import PNGToWebPConverter from "./Features/ImageTools/PNGToWebPConverter"
import SVGToPNGConverter from "./Features/ImageTools/SVGToPNGConverter";
import WebPToJPGConverter from "./Features/ImageTools/WebPToJPGConverter";
import WebPToPNGConverter from "./Features/ImageTools/WebPToPNGConverter";
import RandomChoiceGenerator from "./Features/RandomGenerators/RandomChoiceGenerator";
import RandomDateGenerator from "./Features/RandomGenerators/RandomDateGenerator";
import RandomIPGenerator from "./Features/RandomGenerators/RandomIPGenerator";
import RandomNumberGenerator from "./Features/RandomGenerators/RandomNumberGenerator";
import RandomMonthGenerator from "./Features/RandomGenerators/RandomMonthGenerator";
import RandomLetterGenerator from "./Features/RandomGenerators/RandomLetterGenerator";
import StrongPasswordGenerator from "./Features/RandomGenerators/StrongPasswordGenerator";
import NATOPhoneticAlphabetTranslator from "./Features/MiscTools/NATOPhoneticAlphabetTranslator";
import OnlineSentenceCounter from "./Features/MiscTools/OnlineSentenceCounter";
import RepeatTextGenerator from "./Features/MiscTools/RepeatTextGenerator";
import RomanNumeralDateConverter from "./Features/MiscTools/RomanNumeralDateConverter";
import SortWordsAlphabetically from "./Features/MiscTools/SortWordsAlphabetically";
import TextReplacementTool from "./Features/MiscTools/TextReplacementTool";
export {
    Home,
    Header,
    Footer,
    Layout,
    LandingPage,



    // text modification
    TextModificationLayout,
    BubbleTextGenerator,
    BoldTextGenerator,
    BigTextConverter,
    CursedTextTool,
    FacebookFontGenerator,
    DuplicateLineRemover,
    MirrorTextGenerator,
    ItalicTextConverter,
    InvisibleTextGenerator,
    PlainTextConverter,
    PhoneticSpellingGenerator,
    PigLatinTranslator,
    RemoveLineBreaks,
    RemoveTextFormatting,
    ReverseTextGenerator,
    SentenceCaseConverter,
    SmallTextGenerator,
    StackedTextGenerator,
    UpsideDownTextGenerator,
    UnicodeTextConverter,
    UnderlineTextGenerator,
    TitleCaseConverter,
    SuperscriptGenerator,
    StrikethroughTextGenerator,
    WhitespaceRemover,
    WideTextGenerator,
    WingdingsConverter,
    ZalgoGlitchTextGenerator,


    // code and data translation
    BinaryCodeTranslator,
    CsvToJsonConverter,
    HexToTextConverter,
    JsonStringifyTextGenerator,
    NumberSorter,
    MorseCodeTranslator,
    ROT13EncoderDecoder,
    URLEncodeDecode,
    SlugifyURLGenerator,
    UTMBuilderGenerator,
    UTF8EncoderDecoder,


    // image tools
    ImageToolsLayout,
    AsciiArtGenerator,
    ImageToTextConverter,
    JPGToPNGConverter,
    JPGToWebPConverter,
    PNGToJPGConverter,
    PNGToWebPConverter,
    SVGToPNGConverter,
    WebPToJPGConverter,
    WebPToPNGConverter,


    // Random Generators
    RandomChoiceGenerator,
    RandomDateGenerator,
    RandomIPGenerator,
    RandomNumberGenerator,
    RandomMonthGenerator,
    RandomLetterGenerator,
    StrongPasswordGenerator,


    // Misc Tools
    NATOPhoneticAlphabetTranslator,
    OnlineSentenceCounter,
    RepeatTextGenerator,
    RomanNumeralDateConverter,
    SortWordsAlphabetically,
    TextReplacementTool,
    
    
}
