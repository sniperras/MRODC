import type { DeepPartial } from "./utils";
import { Image } from "./bridge/image";
/**
Status of the document cleanup operation.

- `OK`:
   Cleanup completed.
- `OK_BUT_REDUCED_QUALITY`:
   Cleanup completed, but the configured maxCleanupResolution forced
   internal downscaling of the cleanup region, so the result quality
   near the cleanup boundary may be reduced compared to a full-resolution run.
   If result is not good enough, run undo and try applying cleanup on smaller areas.
- `ERROR_MASK_TOO_LARGE`:
   Cleanup was not performed because the axis-aligned bounding box of the
   non-zero mask pixels exceeded the configured maxMaskBoundingBoxArea limit.
   The returned image is the current (unchanged) image and the undo/redo
   history is left untouched. Retry with a smaller mask or increase
   maxMaskBoundingBoxArea.
*/
export type DocumentCleanupStatus = 
/**
Cleanup completed.
*/
"OK" | 
/**
Cleanup completed, but the configured maxCleanupResolution forced
internal downscaling of the cleanup region, so the result quality
near the cleanup boundary may be reduced compared to a full-resolution run.
If result is not good enough, run undo and try applying cleanup on smaller areas.
*/
"OK_BUT_REDUCED_QUALITY" | 
/**
Cleanup was not performed because the axis-aligned bounding box of the
non-zero mask pixels exceeded the configured maxMaskBoundingBoxArea limit.
The returned image is the current (unchanged) image and the undo/redo
history is left untouched. Retry with a smaller mask or increase
maxMaskBoundingBoxArea.
*/
"ERROR_MASK_TOO_LARGE";
/** @hidden */
export declare const DocumentCleanupStatusValues: ReadonlyArray<DocumentCleanupStatus>;
/**
Result of a document cleanup run.
*/
export declare class DocumentCleanupResult {
    /**
    Status of the cleanup operation.
    @defaultValue "OK";
    */
    readonly status: DocumentCleanupStatus;
    /**
    Cleaned up image.
    */
    readonly image: Image;
    /** @param source {@displayType `DeepPartial<DocumentCleanupResult>`} */
    constructor(source?: DeepPartial<DocumentCleanupResult>);
}
/**
The document cleanup configuration.
*/
export declare class DocumentCleanupConfiguration {
    /**
    If true, detected text is preserved.
    When enabled, text detection is run, which can be time-consuming.
    For a better user experience, consider constructing the document cleanup asynchronously.
    @defaultValue true;
    */
    keepText: boolean;
    /**
    Maximum number of undo/redo operations to keep in memory.
    Must be non-negative. If 0, undo/redo operations are unavailable.
    When the number of operations exceeds this limit, the oldest entries can no longer be undone.
    @defaultValue 3;
    */
    maxUndoRedoStackSize: number;
    /**
    Maximum area (width × height) of the axis-aligned cleanup-region crop.
    If the mask's bounding rectangle exceeds this limit, the input image is downscaled
    before cleanup is applied. The cleaned result is then upscaled and written back
    into the original-resolution image.
    Use this option to limit peak memory consumption.
    Memory consumption depends on both the input image resolution and the cleanup area size.
    Set to 0 to disable the limit.
    For example, setting it to 1200000 uses approximately 0.5 GB for a 12 MP input image.
    Whenever possible, prefer running DocumentCleanup on smaller areas instead of relying on this option,
    as it reduces cleanup quality.
    @defaultValue 0;
    */
    maxCleanupResolution: number;
    /**
    Maximum allowed area (width × height, in pixels) of the axis-aligned bounding
    box enclosing all non-zero pixels of the mask passed to run().
    If the mask's bounding box area exceeds this limit, cleanup is not performed:
    run() returns the current (unchanged) image with status ERROR_MASK_TOO_LARGE
    and the undo/redo history is left untouched.
    Use this option as a hard guard against unintentionally large cleanup regions
    that would take a long time to process. Execution time of a single cleanup
    call grows roughly with the mask's bounding-box area, so capping it bounds
    the worst-case latency of run().
    Note the difference from maxCleanupResolution: maxCleanupResolution silently
    reduces quality by internal downscaling to bound peak memory, whereas
    maxMaskBoundingBoxArea rejects oversized masks outright so the caller can
    react (e.g. ask the user to select a smaller area).
    The default of 600000 (approximately 0.6 MP) is a good fit for typical
    interactive cleanup on a single object or text block.
    Set to 0 to disable the limit.
    @defaultValue 600000;
    */
    maxMaskBoundingBoxArea: number;
    /** @param source {@displayType `DeepPartial<DocumentCleanupConfiguration>`} */
    constructor(source?: DeepPartial<DocumentCleanupConfiguration>);
}
