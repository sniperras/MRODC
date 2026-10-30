import type { DeepPartial } from "./utils";
import { AspectRatio } from "./Geometry";
import { Image } from "./bridge/image";
/**
Type of document straightening to apply.

- `NONE`:
   Assume that the document is already straight and crop it based on the estimated perspective distortion. Very fast.
- `STRAIGHTEN`:
   In addition to perspective correction, remove paper deformations such as creases, curl, folds and crinkles.
   This does not apply any filtering to enhance the image, such as shadow removal or contrast enhancement - it only straightens the geometry of the document.
   Requires the `docstraighten` asset to be present at runtime (on platforms where assets can be optional). Will fail if the asset is not available.
*/
export type DocumentStraighteningMode = 
/**
Assume that the document is already straight and crop it based on the estimated perspective distortion. Very fast.
*/
"NONE" | 
/**
In addition to perspective correction, remove paper deformations such as creases, curl, folds and crinkles.
This does not apply any filtering to enhance the image, such as shadow removal or contrast enhancement - it only straightens the geometry of the document.
Requires the `docstraighten` asset to be present at runtime (on platforms where assets can be optional). Will fail if the asset is not available.
*/
"STRAIGHTEN";
/** @hidden */
export declare const DocumentStraighteningModeValues: ReadonlyArray<DocumentStraighteningMode>;
/**
Configuration for document straightening.
*/
export declare class DocumentStraighteningParameters {
    /**
    Type of document straightening to apply.
    @defaultValue "STRAIGHTEN";
    */
    straighteningMode: DocumentStraighteningMode;
    /**
    By default, aspect ratio of the straightened document is automatically determined based on the detected document corners.
    If the document is significantly deformed, the estimated aspect ratio may be inaccurate.
    In such cases, providing a list of expected aspect ratios may help improve the accuracy of the straightening.
    The closest matching aspect ratio from the list will be used.
    Note, that if for a given paper format you want to support both portrait and landscape orientations, you need to provide both aspect ratios (e.g. 1:√2 and √2:1 for A series papers).
    @defaultValue [];
    */
    aspectRatios: AspectRatio[];
    /** @param source {@displayType `DeepPartial<DocumentStraighteningParameters>`} */
    constructor(source?: DeepPartial<DocumentStraighteningParameters>);
}
/**
Result of the document straightening.
*/
export declare class DocumentStraighteningResult {
    /**
    The straightened document image. Can be null if no document was detected.
    @defaultValue null;
    */
    readonly straightenedImage: Image | null;
    /** @param source {@displayType `DeepPartial<DocumentStraighteningResult>`} */
    constructor(source?: DeepPartial<DocumentStraighteningResult>);
}
