import type { DeepPartial } from "./utils";
import { BarcodeDocumentFormat } from "./BarcodeDocumentTypes";
import { BarcodeFormatConfigurationBase } from "./BarcodeConfigurationTypes";
import { BarcodeFormat } from "./BarcodeTypes";
import { GenericDocument } from "./GenericDocument";
import { Image } from "./bridge/image";
import { Point } from "./utils";
import { ProcessingMode } from "./CommonTypes";
import { RangeEncoding } from "./BarcodeTypes";
import { StructuredAppendInfo } from "./BarcodeTypes";
/**
A single barcode found in the input image. Barcodes with the same content but different locations in the image are considered separate barcodes.
*/
export declare class BarcodeItem {
    /**
    Barcode format.
    @defaultValue "NONE";
    */
    readonly format: BarcodeFormat;
    /**
    Text contained in the barcode. Binary data is returned in the rawBytes field only.
    */
    readonly text: string;
    /**
    Raw bytes of barcode contents.
    Some barcode formats are able to encode binary data. If a barcode contains binary data, it's provided as a list of bytes in the rawBytes field.
    Some barcode formats additionally allow pieces of the data within to have different encodings - UTF-8, ASCII, binary, etc.
    The rawBytesEncodings field lists the encoding of each range in the rawBytes array.
    For barcode formats that contain a GS1 message (e.g. GS1 Composite), we recommend to use a GS1Handling and extract the GS1 message from the text.
    */
    readonly rawBytes: Uint8Array;
    /**
    Encoding information for the rawBytes field. Each element of this list covers some portion of the rawBytes array.
    Taken together, the elements of the list cover the entirety of the rawBytes array without overlap and without holes.
    The elements are ordered in increasing order of the start and end indices.
    */
    readonly rawBytesEncodings: RangeEncoding[];
    /**
    If this barcode is part of a structured append sequence, this field contains information about the sequence.
    */
    readonly structuredAppendInfo: StructuredAppendInfo | null;
    /**
    The four corners of the barcode in the input image, in clockwise order starting from the top left, in image coordinates.
    */
    readonly quad: Point[];
    /**
    The four corners of the barcode in the input image, in clockwise order starting from the top left, normalized to the range [0, 1].
    */
    readonly quadNormalized: Point[];
    /**
    As quad, but extended to appropriate height for oned barcodes.
    */
    readonly extendedQuad: Point[];
    /**
    As quadNormalized, but extended to appropriate height for oned barcodes.
    */
    readonly extendedQuadNormalized: Point[];
    /**
    True if this is a 1D barcode that is printed upside-down, that is, the barcode was scanned right-to-left.
    @defaultValue false;
    */
    readonly isUpsideDown: boolean;
    /**
    A crop from the input image containing the barcode.
    @defaultValue null;
    */
    readonly sourceImage: Image | null;
    /**
    If this is a UPC/EAN barcode that has an EAN-2 or EAN-5 extension, this field contains the extension value. Requires the UPC_EAN_EXTENSION format to be enabled in the decoding options.
    */
    readonly upcEanExtension: string;
    /**
    True if the barcode contains a GS1 message. Requires GS1 handling to be enabled in the decoding option.
    @defaultValue false;
    */
    readonly isGS1Message: boolean;
    /**
    True if this result is the 2D part of a GS1 Composite barcode.
    Can only happen if GS1_COMPOSITE scanning is disabled and a part of the composite (1D) or (2D) is scanned separately.
    When GS1_COMPOSITE scanning is enabled, parts of the composite barcode are never returned separately, even if their respective
    format is enabled in the decoding options.
    @defaultValue false;
    */
    readonly isGS1CompositePart: boolean;
    /**
    The number of 1D stacks in the barcode. Applies only to DATABAR and DATABAR_EXPANDED barcodes.
    @defaultValue 1;
    */
    readonly dataBarStackSize: number;
    /**
    The size score is a floating point value between 0 and 1 that represents the relative size of the barcode in the input image.
    Barcodes taking up a small portion of the input image will have a score close to 0, while barcodes that take a large portion will have a score close to 1.
    @defaultValue 0.0;
    */
    readonly sizeScore: number;
    /**
    The parsed known document format (if parsed successfully).
    */
    readonly extractedDocument: GenericDocument | null;
    /**
    The index of the barcode to uniquely identify it.
    In case of frame accumulation, the index remains the same across frames.
    @defaultValue -1;
    */
    readonly globalIndex: number;
    /** @param source {@displayType `DeepPartial<BarcodeItem>`} */
    constructor(source?: DeepPartial<BarcodeItem>);
}
/**
The engine mode for barcode scanning.

- `LEGACY`:
   Legacy mode. Very fast, significantly less accurate. Doesn't support all barcode types.
- `NEXT_GEN_LOW_POWER`:
   A faster version of the main engine mode, for use with low-power devices.
- `NEXT_GEN`:
   Main engine mode for high-power devices. Supports all barcodes types.
- `NEXT_GEN_LOW_POWER_FAR_DISTANCE`:
   Similar to NEXT_GEN_LOW_POWER, but optimized for scanning from far distances.
- `NEXT_GEN_FAR_DISTANCE`:
   Similar to NEXT_GEN, but optimized for scanning from far distances.
   In single‑shot mode, performance can be slow and may require significant memory depending on input resolution.
- `NEXT_GEN_MAX_DISTANCE`:
   Similar to NEXT_GEN_FAR_DISTANCE, but optimized for scanning from far distances on very high power devices.
   In single‑shot mode, performance can be very slow and may require significant memory depending on input resolution.
*/
export type BarcodeScannerEngineMode = 
/**
Legacy mode. Very fast, significantly less accurate. Doesn't support all barcode types.
*/
"LEGACY" | 
/**
A faster version of the main engine mode, for use with low-power devices.
*/
"NEXT_GEN_LOW_POWER" | 
/**
Main engine mode for high-power devices. Supports all barcodes types.
*/
"NEXT_GEN" | 
/**
Similar to NEXT_GEN_LOW_POWER, but optimized for scanning from far distances.
*/
"NEXT_GEN_LOW_POWER_FAR_DISTANCE" | 
/**
Similar to NEXT_GEN, but optimized for scanning from far distances.
In single‑shot mode, performance can be slow and may require significant memory depending on input resolution.
*/
"NEXT_GEN_FAR_DISTANCE" | 
/**
Similar to NEXT_GEN_FAR_DISTANCE, but optimized for scanning from far distances on very high power devices.
In single‑shot mode, performance can be very slow and may require significant memory depending on input resolution.
*/
"NEXT_GEN_MAX_DISTANCE";
/** @hidden */
export declare const BarcodeScannerEngineModeValues: ReadonlyArray<BarcodeScannerEngineMode>;
/**
The method how to display barcodes from previous frames.

- `LAST_VISIBLE`:
   The quad of a barcode is simply given as the last quad when it was detected.
- `INTERPOLATE_BY_CAMERA`:
   The quad of barcode is interpolated by the camera movement. This option is recommended when the camera is moving, but the scanned object is not.
*/
export type BarcodeAccumulationMethod = 
/**
The quad of a barcode is simply given as the last quad when it was detected.
*/
"LAST_VISIBLE" | 
/**
The quad of barcode is interpolated by the camera movement. This option is recommended when the camera is moving, but the scanned object is not.
*/
"INTERPOLATE_BY_CAMERA";
/** @hidden */
export declare const BarcodeAccumulationMethodValues: ReadonlyArray<BarcodeAccumulationMethod>;
/**
Configuration for how to accumulate results. Frame accumulation is only applied in live mode and when BarcodeSelectionMethod is ALL.
*/
export declare class BarcodeAccumulationConfiguration {
    /**
    The time in milliseconds to accumulate barcodes across multiple frames.
    @defaultValue 500;
    */
    accumulationTime: number;
    /**
    If true, the results from previous frames that are not connected to results on the current frame will be removed.
    This is should be enabled when large camera movements are expected.
    For small camera movements, the option can be disabled.
    @defaultValue true;
    */
    removeUnconnectedResults: boolean;
    /**
    The method how to display barcodes from previous frames.
    @defaultValue "INTERPOLATE_BY_CAMERA";
    */
    method: BarcodeAccumulationMethod;
    /** @param source {@displayType `DeepPartial<BarcodeAccumulationConfiguration>`} */
    constructor(source?: DeepPartial<BarcodeAccumulationConfiguration>);
}
/**
The method used to select barcodes.

- `ALL`:
   All detected barcodes are returned.
- `CENTER`:
   Only the single barcode touching the center of the frame is returned. Selecting this option disables frame accumulation.
- `CENTER_CLOSEST`:
   Only the barcode closest to the center of the frame is returned. Selecting this option disables frame accumulation.
*/
export type BarcodeSelectionMethod = 
/**
All detected barcodes are returned.
*/
"ALL" | 
/**
Only the single barcode touching the center of the frame is returned. Selecting this option disables frame accumulation.
*/
"CENTER" | 
/**
Only the barcode closest to the center of the frame is returned. Selecting this option disables frame accumulation.
*/
"CENTER_CLOSEST";
/** @hidden */
export declare const BarcodeSelectionMethodValues: ReadonlyArray<BarcodeSelectionMethod>;
/**
Configuration for how to select barcode results.
*/
export declare class BarcodeSelectionConfiguration {
    /**
    The method used to select barcodes.
    @defaultValue "ALL";
    */
    selectionMethod: BarcodeSelectionMethod;
    /**
    The normalized x‑coordinate of the image center, expressed in the range [0,1].
    Only used when selectionMethod is CENTER or CENTER_CLOSEST.
    The default is the center of the image, but can be set to other coordinates for use cases where the center of the frame may not be the point of interest.
    @defaultValue 0.5;
    */
    centerCoordX: number;
    /**
    The normalized y‑coordinate of the image center, expressed in the range [0,1].
    Only used when selectionMethod is CENTER or CENTER_CLOSEST.
    The default is the center of the image, but can be set to other coordinates for use cases where the center of the frame may not be the point of interest.
    @defaultValue 0.5;
    */
    centerCoordY: number;
    /**
    The maximum allowed distance from centerCoord at which a barcode may still be selected when selectionMethod is CENTER.
    If multiple barcodes are within the tolerance, the closest one will be selected.
    The value is expressed in terms of the image size, where 1.0 means the maximum distance which is equal to the diagonal of the image.
    The default value is 0, which means that barcodes must touch the center of the frame to be selected.
    Increasing this value can help with selecting barcodes that are close to the center but not touching it.
    @defaultValue 0.0;
    */
    centerDistanceTolerance: number;
    /** @param source {@displayType `DeepPartial<BarcodeSelectionConfiguration>`} */
    constructor(source?: DeepPartial<BarcodeSelectionConfiguration>);
}
/**
Configuration for the barcode scanner.
*/
export declare class BarcodeScannerConfiguration {
    /**
    Options for barcode decoding.
    @defaultValue [new BarcodeFormatCommonConfiguration({})];
    */
    barcodeFormatConfigurations: BarcodeFormatConfigurationBase[];
    /**
    List of document formats to be extracted.
    Barcodes that decode to one of the extracted document formats will have extractedDocument field in BarcodeItem populated with the parsed document.
    By default all supported barcode document formats are accepted.
    If empty, no barcodes will be parsed into documents.
    To only accept the document formats listed in extractedDocumentFormats, the property onlyAcceptDocuments must be true.
    @defaultValue ["AAMVA", "BOARDING_PASS", "DE_MEDICAL_PLAN", "MEDICAL_CERTIFICATE", "ID_CARD_PDF_417", "SEPA", "SWISS_QR", "VCARD", "GS1", "HIBC", "BRITISH_COLUMBIA_DRIVER_LICENSE"];
    */
    extractedDocumentFormats: BarcodeDocumentFormat[];
    /**
    If true and extractedDocumentFormats is not empty, then barcodes that don't decode to one of the extracted document formats will be ignored.
    @defaultValue false;
    */
    onlyAcceptDocuments: boolean;
    /**
    If true, the barcode image will be returned in the BarcodeItem.
    @defaultValue false;
    */
    returnBarcodeImage: boolean;
    /**
    Configuration to accumulate barcodes across multiple frames in live mode.
    @defaultValue new BarcodeAccumulationConfiguration({});
    */
    accumulationConfig: BarcodeAccumulationConfiguration;
    /**
    Configuration used to select barcodes.
    @defaultValue new BarcodeSelectionConfiguration({});
    */
    selectionConfig: BarcodeSelectionConfiguration;
    /**
    If true, the quads of linear (1D) barcodes will be further refined to more closely match the barcode's outline in the input image.
    This will also produce stabler barcode outlines across frames for use cases such as AR.
    @defaultValue false;
    */
    optimizedForOverlays: boolean;
    /**
    In single-shot mode, if the combined area of detected barcodes exceeds this fraction of the input image, the scanner returns the result immediately.
    Further scanning is skipped, even if more barcodes may be present.
    This can be used to accelerate scanning when barcode sizes are known in advance.
    To disable this behaviour, the value must be set to 1.0.
    @defaultValue 0.8;
    */
    directAcceptanceAreaFraction: number;
    /**
    The engine mode for barcode scanning.
    @defaultValue "NEXT_GEN_LOW_POWER";
    */
    engineMode: BarcodeScannerEngineMode;
    /**
    Scanners typically can produce better results from a single image if they are allowed to spend a longer time analyzing it.
    
    On the other hand, scanners can produce even better results if they can analyze multiple images of the same subject and cross-check and combine the results.
    The processing mode tells the scanner whether to optimize for single or multiple images of a subject.
    @defaultValue "AUTO";
    */
    processingMode: ProcessingMode;
    /** @param source {@displayType `DeepPartial<BarcodeScannerConfiguration>`} */
    constructor(source?: DeepPartial<BarcodeScannerConfiguration>);
}
/**
The result of barcode scanning.
*/
export declare class BarcodeScannerResult {
    /**
    List of found barcodes
    */
    readonly barcodes: BarcodeItem[];
    /**
    True if any barcodes were found
    */
    readonly success: boolean;
    /** @param source {@displayType `DeepPartial<BarcodeScannerResult>`} */
    constructor(source?: DeepPartial<BarcodeScannerResult>);
}
