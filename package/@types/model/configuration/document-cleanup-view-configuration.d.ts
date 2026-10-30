import { BaseConfiguration } from "./base-configuration";
import type { Image } from "../../core-types";
import { DeepPartial } from "../../core-types";
import { DocumentCleanupConfiguration } from "../../core/compiled/DocumentCleanupTypes";
export declare class DocumentCleanupBrushStyle {
    /**
     * The color of the brush stroke overlay drawn on the image.
     * @defaultValue "rgba(255, 0, 0, 0.4)"
     */
    color?: string;
    /**
     * The diameter of the brush in pixels (relative to the displayed image size).
     * @defaultValue 20
     */
    size?: number;
}
export declare class DocumentCleanupViewStyle {
    padding?: number;
    brush?: DocumentCleanupBrushStyle;
}
export declare class DocumentCleanupViewConfiguration extends BaseConfiguration {
    constructor();
    /**
     * The image to apply document cleanup on.
     */
    image: Image;
    /**
     * Configuration passed to the core DocumentCleanup API upon initialization.
     */
    cleanupConfiguration?: DeepPartial<DocumentCleanupConfiguration>;
    /**
     * Called each time a cleanup mask is built and sent to the core API.
     * Receives the full-resolution binary mask Image (white pixels = areas to clean).
     * The Image is valid for the duration of the callback; convert it before returning if you need to retain it.
     * Intended for debugging purposes.
     */
    onMaskApplied?: (mask: Image) => void;
    /**
     * Called when a brush stroke is completed on the cleanup canvas.
     * Use this to trigger apply() and track the resulting image on the caller side.
     */
    onStrokeCompleted?: () => void | Promise<void>;
    /**
     * Called when a two-finger pinch gesture starts on the cleanup view.
     */
    onPinchStart?: () => void;
    /**
     * Called when a two-finger pinch gesture ends on the cleanup view.
     */
    onPinchEnd?: () => void;
    style?: DocumentCleanupViewStyle;
    static fromJson(json: any): DocumentCleanupViewConfiguration;
}
