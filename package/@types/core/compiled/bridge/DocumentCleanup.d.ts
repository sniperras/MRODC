import type { DeepPartial } from "../utils";
import { DocumentCleanupConfiguration } from "../DocumentCleanupTypes";
import { DocumentCleanupResult } from "../DocumentCleanupTypes";
import { Image } from "../bridge/image";
import type { WorkerBridge } from "../../bridge/worker-bridge";
import type { ConsumeType } from "../../bridge/utils";
export type DocumentCleanupRunResponse = {
    result: DocumentCleanupResult;
    originalMask: Image;
};
/**
API for document cleanup.

Required licence feature(s): ImageProcessing.
*/
export declare class DocumentCleanup {
    private workerBridge;
    private objectId;
    private constructor();
    static create(workerBridge: WorkerBridge, image: Image, configuration?: DeepPartial<DocumentCleanupConfiguration>): Promise<DocumentCleanup>;
    /**
    cleans the masked areas up.
    @param mask Specifies the regions to clean up. Non-zero pixels indicate the region to be cleaned up.
    @param consumeImage Controls if the image can still be used after calling this method, or if it will be consumed by the method. See {@link ConsumeType} for more details.
    @returns Cleanup result with status and the cleaned up image.
    */
    run(mask: Image, consumeImage?: ConsumeType): Promise<DocumentCleanupRunResponse>;
    /**
    Reverts the last cleanup operation.
    If no operations are available to undo, returns the current image unchanged.
    The number of available undo operations is limited by maxUndoRedoStackSize.
    When the operation limit is exceeded, the oldest operations cannot be undone.
    @returns Image with last operation reverted, or current image if no operations to undo.
    */
    undo(): Promise<Image>;
    /**
    Re-applies the last undone cleanup operation.
    If no operations are available to redo, returns the current image unchanged.
    Performing a new cleanup operation after undo will clear the redo history.
    @returns Image with last undone operation re-applied, or current image if no operations to redo.
    */
    redo(): Promise<Image>;
    /**
    Restores the original image, and clears the undo/redo history.
    After reset, both canUndo and canRedo return false.
    @returns The original, unmodified image.
    */
    reset(): Promise<Image>;
    /**
    Returns whether an undo operation is currently available.
    This is true when at least one cleanup operation has been performed and not yet fully undone.
    @returns True if undo is available, false otherwise.
    */
    canUndo(): Promise<boolean>;
    /**
    Returns whether a redo operation is currently available.
    This is true when at least one undo operation has been performed and not yet overwritten by a new cleanup.
    @returns True if redo is available, false otherwise.
    */
    canRedo(): Promise<boolean>;
    /**
        Frees up any resources associated with this object.
        No other methods may be called on this object after destroy has been called.
    */
    destroy(): Promise<void>;
    static isAvailable(workerBridge: WorkerBridge): Promise<boolean>;
}
