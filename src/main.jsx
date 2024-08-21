import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import {
  Home, Layout,

  // text modification tools
  BigTextConverter, BubbleTextGenerator, BoldTextGenerator, FacebookFontGenerator, DuplicateLineRemover, CursedTextTool, MirrorTextGenerator, ItalicTextConverter, InvisibleTextGenerator, PhoneticSpellingGenerator, PigLatinTranslator, PlainTextConverter, RemoveLineBreaks,
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

  // Image tools
  AsciiArtGenerator,
  ImageToTextConverter,
  JPGToPNGConverter,
  JPGToWebPConverter,
  PNGToJPGConverter,
  PNGToWebPConverter,
  SVGToPNGConverter,
  WebPToJPGConverter,
  WebPToPNGConverter,


  // Random generators

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
  OnlineNotepad,
} from './components'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />



      {/* Text Modification Routes */}
      <Route path="/convert-case/big-text-converter"
        element={<BigTextConverter />} />
      <Route path="/convert-case/bold-text-generator"
        element={<BoldTextGenerator />} />
      <Route path="/convert-case/bubble-text-generator"
        element={<BubbleTextGenerator />} />
      <Route path="/convert-case/cursed-text-tool" element={<CursedTextTool />} />
      <Route path="/convert-case/duplicate-line-remover" element={<DuplicateLineRemover />} />
      <Route path="/convert-case/facebook-font-generator" element={<FacebookFontGenerator />} />
      <Route path="/convert-case/invisible-text-generator" element={<InvisibleTextGenerator />} />
      <Route path="/convert-case/italic-text-converter" element={<ItalicTextConverter />} />
      <Route path="/convert-case/mirror-text-generator" element={<MirrorTextGenerator />} />
      <Route path="/convert-case/phonetic-spelling-generator" element={<PhoneticSpellingGenerator />} />
      <Route path="/convert-case/pig-latin-translator" element={<PigLatinTranslator />} />
      <Route path="/convert-case/plain-text-converter" element={<PlainTextConverter />} />
      <Route path="/convert-case/remove-line-breaks" element={<RemoveLineBreaks />} />
      <Route path="/convert-case/remove-text-formatting" element={<RemoveTextFormatting />} />
      <Route path="/convert-case/reverse-text-generator" element={<ReverseTextGenerator />} />
      <Route path="/convert-case/sentence-case-converter" element={<SentenceCaseConverter />} />
      <Route path="/convert-case/small-text-generator" element={<SmallTextGenerator />} />
      <Route path="/convert-case/stacked-text-generator" element={<StackedTextGenerator />} />
      <Route path="/convert-case/strikethrough-text-generator" element={<StrikethroughTextGenerator />} />
      <Route path="/convert-case/superscript-generator" element={<SuperscriptGenerator />} />
      <Route path="/convert-case/title-case-converter" element={<TitleCaseConverter />} />
      <Route path="/convert-case/underline-text-generator" element={<UnderlineTextGenerator />} />
      <Route path="/convert-case/unicode-text-converter" element={<UnicodeTextConverter />} />
      <Route path="/convert-case/upside-down-text-generator" element={<UpsideDownTextGenerator />} />
      <Route path="/convert-case/whitespace-remover" element={<WhitespaceRemover />} />
      <Route path="/convert-case/wide-text-generator" element={<WideTextGenerator />} />
      <Route path="/convert-case/wingdings-converter" element={<WingdingsConverter />} />
      <Route path="/convert-case/zalgo-glitch-text-generator" element={<ZalgoGlitchTextGenerator />} />


      {/* code and data translation routes */}
      <Route path="/code-data-translation/binary-code-translator" element={<BinaryCodeTranslator />} />
      <Route path="/code-data-translation/csv-to-json-converter" element={<CsvToJsonConverter />} />
      <Route path="/code-data-translation/hex-to-text-converter" element={<HexToTextConverter />} />
      <Route path="/code-data-translation/json-stringify-text-generator" element={<JsonStringifyTextGenerator />} />
      <Route path="/code-data-translation/morse-code-translator" element={<MorseCodeTranslator />} />
      <Route path="/code-data-translation/number-sorter" element={<NumberSorter />} />
      <Route path="/code-data-translation/rot13-encoder-decoder" element={<ROT13EncoderDecoder />} />
      <Route path="/code-data-translation/slugify-url-generator" element={<SlugifyURLGenerator />} />
      <Route path="/code-data-translation/url-encode-and-decode" element={<URLEncodeDecode />} />
      <Route path="/code-data-translation/utf-8-encoder-decoder" element={<UTF8EncoderDecoder />} />
      <Route path="/code-data-translation/utm-builder-generator" element={<UTMBuilderGenerator />} />

      {/* Image Tools */}

      <Route path="/image-tools/ascii-art-generator" element={<AsciiArtGenerator />} />
      <Route path="/image-tools/image-to-text-converter" element={<ImageToTextConverter />} />
      <Route path="/image-tools/jpg-to-png-converter" element={<JPGToPNGConverter />} />
      <Route path="/image-tools/jpg-to-webp-converter" element={<JPGToWebPConverter />} />
      <Route path="/image-tools/png-to-jpg-converter" element={<PNGToJPGConverter />} />
      <Route path="/image-tools/png-to-webp-converter" element={<PNGToWebPConverter />} />
      <Route path="/image-tools/svg-to-png-converter" element={<SVGToPNGConverter />} />
      <Route path="/image-tools/webp-to-jpg-converter" element={<WebPToJPGConverter />} />
      <Route path="/image-tools/webp-to-png-converter" element={<WebPToPNGConverter />} />


      {/* Random Generators */}
      <Route path="/random-generators/random-choice-generator" element={<RandomChoiceGenerator />} />

      <Route path="/random-generators/random-date-generator" element={<RandomDateGenerator />} />
      <Route path="/random-generators/random-ip-address-generator" element={<RandomIPGenerator />} />
      <Route path="/random-generators/random-letter-generator" element={<RandomLetterGenerator />} />
      <Route path="/random-generators/random-month-generator" element={<RandomMonthGenerator />} />
      <Route path="/random-generators/random-number-generator" element={<RandomNumberGenerator />} />
      <Route path="/random-generators/strong-password-generator" element={<StrongPasswordGenerator />} />




      {/* Misc Tools */}
      <Route path="misc-tools/nato-phonetic-alphabet-translator" element={<NATOPhoneticAlphabetTranslator />} />
      <Route path="misc-tools/online-sentence-counter" element={<OnlineSentenceCounter />} />
      <Route path="misc-tools/repeat-text-generator" element={<RepeatTextGenerator />} />
      <Route path="misc-tools/roman-numeral-date-converter" element={<RomanNumeralDateConverter />} />
      <Route path="misc-tools/sort-words-alphabetically" element={<SortWordsAlphabetically />} />
      <Route path="misc-tools/text-replacement-tool" element={<TextReplacementTool />} />
      <Route path="misc-tools/online-notepad" element={<OnlineNotepad />} />
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
