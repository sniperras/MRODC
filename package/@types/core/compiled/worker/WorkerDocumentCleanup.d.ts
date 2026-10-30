import type { DocumentCleanupConfiguration } from "../DocumentCleanupTypes";
import type { DocumentCleanupResult } from "../DocumentCleanupTypes";
import type { Image } from "../bridge/image";
import { ObjectId } from "../utils";
/**
   This class is used inside the JS Worker and interacts directly with the WASM.
*/
export declare class WorkerDocumentCleanup {
    private getWasmModule;
    private readonly objectMap;
    constructor(getWasmModule: () => any);
    create(image: Image, configuration: DocumentCleanupConfiguration): Promise<ObjectId<"DocumentCleanup">>;
    run(instanceId: ObjectId<"DocumentCleanup">, mask: Image): Promise<{
        result: DocumentCleanupResult;
        originalMask: Image;
    }>;
    undo(instanceId: ObjectId<"DocumentCleanup">): Promise<Image>;
    redo(instanceId: ObjectId<"DocumentCleanup">): Promise<Image>;
    reset(instanceId: ObjectId<"DocumentCleanup">): Promise<Image>;
    canUndo(instanceId: ObjectId<"DocumentCleanup">): Promise<boolean>;
    canRedo(instanceId: ObjectId<"DocumentCleanup">): Promise<boolean>;
    destroy(instanceId: ObjectId<"DocumentCleanup">): Promise<void>;
    isAvailable(): Promise<boolean>;
    private getWasmComponent;
}
