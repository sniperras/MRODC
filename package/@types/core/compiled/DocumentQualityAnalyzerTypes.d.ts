import type { DeepPartial } from "./utils";
import { Image } from "./bridge/image";
import { Point } from "./utils";
/**
Result of document quality analysis.

- `VERY_POOR`:
   Very poor quality.
- `POOR`:
   Poor quality.
- `REASONABLE`:
   Reasonable quality.
- `GOOD`:
   Good quality.
- `EXCELLENT`:
   Excellent quality.
@deprecated Replaced by {@link DocumentQualityAssessment}.
*/
export type DocumentQuality = 
/**
Very poor quality.
*/
"VERY_POOR" | 
/**
Poor quality.
*/
"POOR" | 
/**
Reasonable quality.
*/
"REASONABLE" | 
/**
Good quality.
*/
"GOOD" | 
/**
Excellent quality.
*/
"EXCELLENT";
/** @hidden */
export declare const DocumentQualityValues: ReadonlyArray<DocumentQuality>;
/**
Result of document quality analysis.

- `ACCEPTABLE`:
   Document meets the quality requirements of the given quality analysis model.
- `UNACCEPTABLE`:
   Document does not meet the quality requirements of the given quality analysis model.
- `UNCERTAIN`:
   Document quality is uncertain.
   See `qualityAcceptableUncertainThreshold` and `qualityUnacceptableUncertainThreshold` in `DocumentQualityAnalyzerConfiguration` for more details.
*/
export type DocumentQualityAssessment = 
/**
Document meets the quality requirements of the given quality analysis model.
*/
"ACCEPTABLE" | 
/**
Document does not meet the quality requirements of the given quality analysis model.
*/
"UNACCEPTABLE" | 
/**
Document quality is uncertain.
See `qualityAcceptableUncertainThreshold` and `qualityUnacceptableUncertainThreshold` in `DocumentQualityAnalyzerConfiguration` for more details.
*/
"UNCERTAIN";
/** @hidden */
export declare const DocumentQualityAssessmentValues: ReadonlyArray<DocumentQualityAssessment>;
/**
Point in the quality-number of symbols space to separate quality levels.
*/
export declare class DocumentQualityThreshold {
    /**
    Symbol quality
    */
    readonly symbolQuality: number;
    /**
    Symbol ratio
    */
    readonly symbolRatio: number;
    /** @param source {@displayType `DeepPartial<DocumentQualityThreshold>`} */
    constructor(source?: DeepPartial<DocumentQualityThreshold>);
}
/**
Configuration for processing image by tiles.
This can be used to make the document quality analyzer processing faster with lower memory consumption,
but prediction can be less accurate.
*/
export declare class ProcessByTileConfiguration {
    /**
    Enable processing by tiles.
    @defaultValue true;
    */
    enabled: boolean;
    /**
    At least this fraction of the image will be processed, range is from 0 to 1.
    Decreasing this value below 1.0 can lead to faster processing but may result in
    less accurate prediction, as only a subset of the image tiles will be analyzed.
    @defaultValue 1.0;
    */
    minProcessedFraction: number;
    /**
    At most this fraction of the image will be processed, range is from 0 to 1.
    Decreasing this value below 1.0 can lead to faster processing but may result in
    less accurate prediction, as only a subset of the image tiles will be analyzed.
    @defaultValue 1.0;
    */
    maxProcessedFraction: number;
    /**
    If this number of symbols is found and minProcessedFraction of the image is processed, the processing stops.
    @defaultValue 100;
    */
    minNumberOfRequiredSymbols: number;
    /**
    Image will be processed in tiles of this size; will be ignored if image is small.
    @defaultValue 300;
    */
    tileSize: number;
    /** @param source {@displayType `DeepPartial<ProcessByTileConfiguration>`} */
    constructor(source?: DeepPartial<ProcessByTileConfiguration>);
}
/**
Compatibility mode for the Document Quality Analyzer.
In this mode, the analyzer will return results that are identical to older versions of the SDK.

- `V8`:
   Compatible with version 8 of the Scanbot SDK.
*/
export type DocumentQualityAnalyzerCompatibilityMode = 
/**
Compatible with version 8 of the Scanbot SDK.
*/
"V8";
/** @hidden */
export declare const DocumentQualityAnalyzerCompatibilityModeValues: ReadonlyArray<DocumentQualityAnalyzerCompatibilityMode>;
/**
Configuration for the compatibility mode of the Document Quality Analyzer.
In this mode, the analyzer will return results that are identical to older versions of the SDK.
*/
export declare class DocumentQualityAnalyzerCompatibilityModeConfiguration {
    /**
    Compatibility mode to use.
    @defaultValue "V8";
    */
    readonly mode: DocumentQualityAnalyzerCompatibilityMode;
    /**
    This setting describes how the Document Quality Analyzer in v8 compatibility mode will behave.
    Minimum compatibility-mode quality that gets converted to DocumentQualityAssessment.ACCEPTABLE.
    Compatibility-mode quality levels equal to or higher than `minimumAcceptableQuality` result in an ACCEPTABLE quality assessment.
    @defaultValue "REASONABLE";
    */
    minimumAcceptableQuality: DocumentQuality;
    /**
    Minimum compatibility-mode quality that gets converted to DocumentQualityAssessment.UNCERTAIN.
    Compatibility-mode quality levels between `minimumUncertainQuality` (inclusive) and `minimumAcceptableQuality` (exclusive) result in an UNCERTAIN quality assessment.
    @defaultValue "POOR";
    */
    minimumUncertainQuality: DocumentQuality;
    /**
    Inspect small text (typically less than 12 pixels height) when analyzing the document quality.
    If true, processing will be slower, but when the quality issue with a document is the low resolution of the text,
    then the issue will be caught.
    @defaultValue false;
    */
    inspectSmallText: boolean;
    /** @param source {@displayType `DeepPartial<DocumentQualityAnalyzerCompatibilityModeConfiguration>`} */
    constructor(source?: DeepPartial<DocumentQualityAnalyzerCompatibilityModeConfiguration>);
}
/**
Document Quality Analyzer configuration

The document quality analysis of a document can be slow on low end devices.
To speed up the analysis, only parts of the the document can be analyzed.
This can yield faster results but may result in less accurate predictions.
The configuration parameters `minProcessedFraction` and `maxProcessedFraction` define a range of the image that will be analyzed.
In that range, `minNumberOfRequiredSymbols` and `minRequiredOrientationConfidence` define under which conditions the analysis will stop early.
*/
export declare class DocumentQualityAnalyzerConfiguration {
    /**
    Document quality analysis model to use.
    If empty, the built-in model is used which provides reasonable quality estimates for a wide variety of documents.
    If the built-in model is not a good fit for your use case, consider creating a model based on your own documents and use case.
    
    To create a fine-tuned quality analysis model, follow the documentation of our DoQA model configurator tool.
    You can find it here: https://github.com/doo/scanbot-sdk-doqa-configurator.
    @defaultValue "";
    */
    qualityAnalysisModel: string;
    /**
    There are documents for which the quality analysis model is uncertain, meaning that the model is not sure if the document is acceptable or not.
    E.g., the model may report a document quality to be `ACCEPTABLE` with 60% confidence.
    Depending on the value of this threshold, the document in this case will be reported as `ACCEPTABLE` or `UNCERTAIN`.
    The default value of 0.5 will typically lead to a good balance between the number of documents reported as `ACCEPTABLE` and `UNCERTAIN`.
    A lower value will lead to fewer UNCERTAIN documents, but unacceptable documents will more often be reported as `ACCEPTABLE` (false positives).
    A higher value will lead to more borderline documents being reported as UNCERTAIN, but unacceptable documents will be reported as `ACCEPTABLE` less often.
    If 0, no documents with a predicted quality of `ACCEPTABLE` will be reported as `UNCERTAIN`, regardless of the model's confidence, unless the document has very few symbols (see `minEstimatedNumberOfSymbolsForDocument`).
    If 1, almost all documents with a predicted quality of `ACCEPTABLE` will be reported as `UNCERTAIN`.
    Must be in the range of [0, 1].
    @defaultValue 0.5;
    */
    qualityAcceptableUncertainThreshold: number;
    /**
    Same as `qualityAcceptableUncertainThreshold`, but for documents that are predicted to be `UNACCEPTABLE` by the model.
    @defaultValue 0.5;
    */
    qualityUnacceptableUncertainThreshold: number;
    /**
    Quality thresholds to separate quality levels.
    @defaultValue [new DocumentQualityThreshold({
        "symbolQuality": 0.5,
        "symbolRatio": 0.5
    }), new DocumentQualityThreshold({
        "symbolQuality": 0.7,
        "symbolRatio": 0.3
    }), new DocumentQualityThreshold({
        "symbolQuality": 0.85,
        "symbolRatio": 0.3
    }), new DocumentQualityThreshold({
        "symbolQuality": 0.9,
        "symbolRatio": 0.1
    })];
    @deprecated Replaced by {@link DocumentQualityAnalyzerConfiguration#qualityAnalysisModel}.
    */
    qualityLevelThresholds: DocumentQualityThreshold[];
    /**
    Quality levels.
    @defaultValue ["VERY_POOR", "POOR", "REASONABLE", "GOOD", "EXCELLENT"];
    @deprecated Replaced by {@link DocumentQualityAnalyzerConfiguration#qualityAnalysisModel}.
    */
    qualityLevelIndices: DocumentQuality[];
    /**
    Runs the Document Quality Analyzer on the listed inputScales. Only the best result will be returned.
    Typical range of the text height, which model can work with, is 5-40 pixels.
    10 pixels height is recommended.
    Use this option if documents with smaller or bigger texts are expected.
    For example, if 80 pixels text height is expected, scale should be 1/8.
    Not compatible with maxImageSize. If not [1] maxImageSize should be less or equal 0.
    @defaultValue [1.0];
    */
    inputScales: number[];
    /**
    If inputScale from inputScales is smaller or equal than the threshold minProcessedFraction and maxProcessedFraction will be ignored, and the entire image will be processed.
    @defaultValue 0.25;
    */
    inputScaleThresholdToProcessEntireImage: number;
    /**
    Maximum image size in pixels, if image is bigger, it will be resized. If less or equal 0 will be ignored.
    @defaultValue 2000;
    */
    maxImageSize: number;
    /**
    If a document's estimated number of symbols is less than this value, document quality will be reported as `UNCERTAIN`.
    In that case, the deprecated result fields `documentFound` and`qualityLevel` will be set to false and empty, respectively.
    @defaultValue 20;
    */
    minEstimatedNumberOfSymbolsForDocument: number;
    /**
    Configuration for processing image by tiles.
    @defaultValue new ProcessByTileConfiguration({});
    */
    processByTileConfiguration: ProcessByTileConfiguration;
    /**
    If minNumberOfRequiredSymbols is found, and orientationConfidence is bigger than this threshold, the processing stops.
    If the maxProcessedFraction part of the image is processed and orientationConfidence is lower than the threshold, the returned orientation will be 0.
    @defaultValue 0.9;
    */
    minRequiredOrientationConfidence: number;
    /**
    If true, will return the quality heatmap as a part of the result.
    In this case, the entire image will be processed and the minProcessedFraction will be ignored.
    Useful for debugging situations where the returned quality doesn't appear to match the perceived quality.
    @defaultValue false;
    */
    returnQualityHeatmap: boolean;
    /**
    Compatibility mode for the Document Quality Analyzer.
    If set, the analyzer will return results that are identical to older versions of the SDK.
    @defaultValue null;
    */
    compatibilityMode: DocumentQualityAnalyzerCompatibilityModeConfiguration | null;
    /** @param source {@displayType `DeepPartial<DocumentQualityAnalyzerConfiguration>`} */
    constructor(source?: DeepPartial<DocumentQualityAnalyzerConfiguration>);
}
/**
Character level annotation, contains information about the quality of a character in the document.
*/
export declare class CharacterLevelAnnotation {
    /**
    Coordinates of the character's center in the image.
    The coordinates are in pixels, with (0, 0) being the top-left corner of the image.
    The rectangle described by the `plotCenter`, `plotWidth`, and `plotHeight` fields serve as a rough estimate of the position of the character in the input image, intended for plotting.
    */
    readonly plotCenter: Point;
    /**
    Width of the character in pixels
    */
    readonly plotWidth: number;
    /**
    Height of the character in pixels
    */
    readonly plotHeight: number;
    /**
    Estimated OCRability of the character, in the range of [0, 1], where 0 means not readable and 1 means perfect readability
    */
    readonly ocrability: number;
    /**
    Estimated contrast of the character, in the range of [0, 1], where 0 means no contrast and 1 means perfect contrast
    */
    readonly contrast: number;
    /**
    Estimated height of the character in pixels
    */
    readonly fontSize: number;
    /**
    Orientation of the character in degrees counter-clockwise, where 0 means straight, and the value is in the range of [-180, 180]
    */
    readonly orientation: number;
    /**
    Same as `orientation`, but takes into account surrounding characters to smooth the orientation values of characters in a line.
    */
    readonly orientationNormalized: number;
    /**
    Deviation of the character's normalized orientation from dominant orientation of the line, in degrees.
    */
    readonly orientationDeviation: number;
    /** @param source {@displayType `DeepPartial<CharacterLevelAnnotation>`} */
    constructor(source?: DeepPartial<CharacterLevelAnnotation>);
}
/**
Character level annotations, contains information about each character in the document.
*/
export declare class CharacterLevelAnnotations {
    /**
    List of character level annotations
    */
    readonly annotations: CharacterLevelAnnotation[];
    /**
    Version of the model and code used to generate the annotations
    */
    readonly apiVersion: string;
    /** @param source {@displayType `DeepPartial<CharacterLevelAnnotations>`} */
    constructor(source?: DeepPartial<CharacterLevelAnnotations>);
}
/**
Result of document quality analysis. It can be used to determine, e.g., if a document is good enough to be used for OCR processing.
*/
export declare class DocumentQualityAnalyzerResult {
    /**
    Document quality as estimated from the given quality analysis model.
    */
    readonly quality: DocumentQualityAssessment;
    /**
    True if a document was found.
    @deprecated Replaced by {@link DocumentQualityAnalyzerResult#quality}, because it provides a more reliable result.
    */
    readonly documentFound: boolean;
    /**
    Quality of the document, if found.
    The exact behavior of this value can be configured with the `qualityThresholds` and `qualityIndices` parameters.
    @deprecated Replaced by {@link DocumentQualityAnalyzerResult#quality}, because it provides a more reliable result.
    */
    readonly qualityLevel: DocumentQuality | null;
    /**
    Dominant orientation of the document, if found.
    The value is in degrees counter-clockwise, where 0 corresponds to the document
    being straight, and the value is in the range of [-180, 180].
    To rotate the document to be straight, rotate the image clockwise by this value.
    */
    readonly orientation: number;
    /**
    Confidence that the reported orientation of the document is correct.
    The value is in the range of [0, 1].
    Possible reasons for low confidence are:
      * Document contains text with multiple orientations.
      * Text on the document is poorly readable.
      * Text on the document is on the edge of detectable text range (text is too small or too big).
      * Insufficient statistics because only part of the image was processed. See ProcessByTileConfiguration options in the DocumentQualityAnalyzerConfiguration.
    */
    readonly orientationConfidence: number;
    /**
    Cumulative histogram where every entry is equal to the number of symbols with quality equal or lower than N percent, where N is the index of the entry in the array.
    */
    readonly cumulativeQualityHistogram: number[];
    /**
    Quality heatmap.
    Black marks areas of no detected text. Colors represent the quality of detected text,
    with red meaning the lowest quality and yellow and green meaning progressively higher quality.
    @defaultValue null;
    */
    readonly qualityHeatmap: Image | null;
    /**
    Returns the best inputScale whose results are used (see inputScales configuration option).
    */
    readonly bestInputScale: number;
    /** @param source {@displayType `DeepPartial<DocumentQualityAnalyzerResult>`} */
    constructor(source?: DeepPartial<DocumentQualityAnalyzerResult>);
}
