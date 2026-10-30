import type { DeepPartial } from "./utils";
import { Rectangle } from "./utils";
/**
Grammar of pattern matching.

- `WILDCARD`:
   Simple pattern matching where # stands for any digit and ? stands for any character.
   All other characters represent themselves.
- `REGEX`:
   Regular expression pattern matching. Uses ECMAScript grammar.
*/
export type PatternGrammar = 
/**
Simple pattern matching where # stands for any digit and ? stands for any character.
All other characters represent themselves.
*/
"WILDCARD" | 
/**
Regular expression pattern matching. Uses ECMAScript grammar.
*/
"REGEX";
/** @hidden */
export declare const PatternGrammarValues: ReadonlyArray<PatternGrammar>;
/**
Structure containing recognized word text and bounds.
*/
export declare class WordBox {
    /**
    Recognized word text
    */
    readonly text: string;
    /**
    Bounding rectangle of the recognized word
    */
    readonly boundingRect: Rectangle;
    /**
    Confidence of the recognition.
    @defaultValue 0.0;
    */
    readonly recognitionConfidence: number;
    /** @param source {@displayType `DeepPartial<WordBox>`} */
    constructor(source?: DeepPartial<WordBox>);
}
/**
Structure containing recognized symbol text and bounds.
*/
export declare class SymbolBox {
    /**
    Recognized symbol text
    */
    readonly symbol: string;
    /**
    Bounding rectangle of the recognized symbol
    */
    readonly boundingRect: Rectangle;
    /**
    Confidence of the recognition
    */
    readonly recognitionConfidence: number;
    /** @param source {@displayType `DeepPartial<SymbolBox>`} */
    constructor(source?: DeepPartial<SymbolBox>);
}
/**
The result of the text line recognition.
*/
export declare class TextPatternScannerResult {
    /**
    Raw recognized string
    */
    readonly rawText: string;
    /**
    Boxes for each recognized word
    */
    readonly wordBoxes: WordBox[];
    /**
    Boxes for each recognized symbol
    */
    readonly symbolBoxes: SymbolBox[];
    /**
    Confidence of the recognition.
    @defaultValue 0.0;
    */
    readonly confidence: number;
    /**
    True if both the configured validator (if any) and the configured frame accumulation criteria were satisfied.
    @defaultValue false;
    */
    readonly validationSuccessful: boolean;
    /** @param source {@displayType `DeepPartial<TextPatternScannerResult>`} */
    constructor(source?: DeepPartial<TextPatternScannerResult>);
}
/**
Base class for content validators.
*/
export type ContentValidator = DefaultContentValidator | PatternContentValidator;
/** @internal */
export declare namespace ContentValidator {
    /** @internal */
    function from(source: DeepPartial<ContentValidator>): ContentValidator;
}
/**
Default content validator. Accepts only non-empty strings.
*/
export declare class DefaultContentValidator {
    readonly _type: "DefaultContentValidator";
    /**
    OCR whitelist. Empty string means no restriction.
    Only characters that are present in the allowedCharacters string will be accepted.
    For example, if allowedCharacters is set to "ab", the result may only contain characters 'a' and 'b'.
    @defaultValue "";
    */
    allowedCharacters: string;
    /** @param source {@displayType `DeepPartial<DefaultContentValidator>`} */
    constructor(source?: DeepPartial<DefaultContentValidator>);
}
/**
Pattern content validator.
*/
export declare class PatternContentValidator {
    readonly _type: "PatternContentValidator";
    /**
    OCR whitelist. Empty string means no restriction.
    Only characters that are present in the allowedCharacters string will be accepted.
    For example, if allowedCharacters is set to "ab", the result may only contain characters 'a' and 'b'.
    @defaultValue "";
    */
    allowedCharacters: string;
    /**
    Pattern to match. It can be a simple pattern or a regular expression.
    */
    pattern: string;
    /**
    Whether the pattern should match the whole string or just a substring.
    @defaultValue false;
    */
    matchSubstring: boolean;
    /**
    Grammar of pattern matching.
    @defaultValue "WILDCARD";
    */
    patternGrammar: PatternGrammar;
    /** @param source {@displayType `DeepPartial<PatternContentValidator>`} */
    constructor(source?: DeepPartial<PatternContentValidator>);
}
/**
Configuration for the text pattern scanner.
*/
export declare class TextPatternScannerConfiguration {
    /**
    The option will be ignored if `inputHeightLimit` is not 0.
    Maximum image size (height or width) for OCR process. 0 - do not rescale.
    @defaultValue 0;
    @deprecated Replaced by {@link TextPatternScannerConfiguration#inputHeightLimit}.
    */
    ocrResolutionLimit: number;
    /**
    Maximum image height for OCR processing. 0 - do not rescale.
    @defaultValue 120;
    */
    inputHeightLimit: number;
    /**
    Maximum number of accumulated frames to inspect before actual result is returned.
    @defaultValue 3;
    */
    maximumNumberOfAccumulatedFrames: number;
    /**
    Minimum number of accumulated frames that have equal result.
    @defaultValue 2;
    */
    minimumNumberOfRequiredFramesWithEqualScanningResult: number;
    /**
    Optimize for scanning a single line or a single word. Enable this option when scanning a single line or single word that are hard to scan reliably.
    @defaultValue false;
    */
    optimizeSingleLine: boolean;
    /**
    Content validator.
    @defaultValue new DefaultContentValidator({});
    */
    validator: ContentValidator;
    /** @param source {@displayType `DeepPartial<TextPatternScannerConfiguration>`} */
    constructor(source?: DeepPartial<TextPatternScannerConfiguration>);
}
