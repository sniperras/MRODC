import type { DeepPartial } from "../utils";
import { DocumentStraighteningParameters } from "../DocumentStraightenerTypes";
import { DocumentStraighteningResult } from "../DocumentStraightenerTypes";
import { Image } from "../bridge/image";
import { Point } from "../utils";
import type { WorkerBridge } from "../../bridge/worker-bridge";
import type { ConsumeType } from "../../bridge/utils";
export type DocumentStraightenerRunResponse = {
    result: DocumentStraighteningResult;
    originalImage: Image;
};
/**
Provides functionality to straighten document photos by eliminating
physical deformations and surface warping, such as folds, creases,
wrinkles, crumples, page and geometric bends.

Required licence feature(s): DocumentScanner, ImageProcessing.
*/
export declare class DocumentStraightener {
    private workerBridge;
    private objectId;
    private constructor();
    static create(workerBridge: WorkerBridge): Promise<DocumentStraightener>;
    /**
    Straightens document photos by eliminating physical deformations and
    surface warping, such as folds, creases, wrinkles, crumples, page
    curls, and geometric bends.
    
    @param image The image of the document to straighten.
    @param parameters The parameters to use for straightening.
    @param priorCornersNormalized If it is known where the document corners (e.g. from a prior detection), those can be provided here.
    The enhancer may take them into account to locate the document more accurately.
    As part of the straightening process, it may be necessary to detect the document corners.
    That's why providing them here can speed up the process (given the corners are already available).
    Corners must be provided in the clockwise order: top-left, top-right, bottom-right, bottom-left.
    The coordinates must be normalized to the range [0, 1] relative to the image dimensions.
    For x coordinates, 0 corresponds to the left edge of the image and 1 to the right edge. For y coordinates, 0 corresponds to the top edge of the image and 1 to the bottom edge.
    Note, that when a coordinate is normalized, correct formula for x coordinate is: x_normalized = x_pixel / (image_width - 1), and for y coordinate is: y_normalized = y_pixel / (image_height - 1).
    
    @param consumeImage Controls if the image can still be used after calling this method, or if it will be consumed by the method. See {@link ConsumeType} for more details.
    @returns The detection result.
    */
    run(image: Image, parameters?: DeepPartial<DocumentStraighteningParameters>, priorCornersNormalized?: Point[], consumeImage?: ConsumeType): Promise<DocumentStraightenerRunResponse>;
    /**
        Frees up any resources associated with this object.
        No other methods may be called on this object after destroy has been called.
    */
    destroy(): Promise<void>;
    static isAvailable(workerBridge: WorkerBridge): Promise<boolean>;
}
