/**
Optimizations applied when cropping physical documents from a larger photo.

- `NONE`:
   Crops the exact quad with no additional processing.
- `OPTIMIZE_QUAD`:
   Crops the quad and trims a slight margin to reduce surrounding background noise, yielding a cleaner document image.
*/
export type DocumentCropOptimization = 
/**
Crops the exact quad with no additional processing.
*/
"NONE" | 
/**
Crops the quad and trims a slight margin to reduce surrounding background noise, yielding a cleaner document image.
*/
"OPTIMIZE_QUAD";
/** @hidden */
export declare const DocumentCropOptimizationValues: ReadonlyArray<DocumentCropOptimization>;
