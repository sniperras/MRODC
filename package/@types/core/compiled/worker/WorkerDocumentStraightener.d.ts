import type { DocumentStraighteningMode } from "../DocumentStraightenerTypes";
import type { DocumentStraighteningParameters } from "../DocumentStraightenerTypes";
import type { DocumentStraighteningResult } from "../DocumentStraightenerTypes";
import type { Image } from "../bridge/image";
import type { Point } from "../utils";
import { ObjectId } from "../utils";
/**
   This class is used inside the JS Worker and interacts directly with the WASM.
*/
export declare class WorkerDocumentStraightener {
    private getWasmModule;
    private readonly objectMap;
    constructor(getWasmModule: () => any);
    create(): Promise<ObjectId<"DocumentStraightener">>;
    run(instanceId: ObjectId<"DocumentStraightener">, image: Image, parameters: DocumentStraighteningParameters, priorCornersNormalized: Point[]): Promise<{
        result: DocumentStraighteningResult;
        originalImage: Image;
    }>;
    isStraighteningModeAvailable(mode: DocumentStraighteningMode): Promise<boolean>;
    destroy(instanceId: ObjectId<"DocumentStraightener">): Promise<void>;
    isAvailable(): Promise<boolean>;
    private getWasmComponent;
}
