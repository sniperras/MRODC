import { type DeepPartial } from "../core-types";
import { DocumentCleanupResult } from "../core-types";
import { DocumentCleanupViewConfiguration } from "../model/configuration/document-cleanup-view-configuration";
import { Image } from "../core-types";
export interface IDocumentCleanupViewHandle {
    /**
     * Deep-merges the provided partial configuration into the active configuration.
     * Re-renders the view to reflect any visual changes (e.g. brush size, color).
     */
    updateConfiguration(config: DeepPartial<DocumentCleanupViewConfiguration>): void;
    /**
     * Applies the current brush strokes as a cleanup mask and returns the cleaned image.
     * Clears the brush strokes from the canvas after applying.
     */
    apply(): Promise<DocumentCleanupResult>;
    /**
     * Reverts the last cleanup operation using the DocumentCleanup undo API.
     * Updates the displayed image and returns it.
     */
    undo(): Promise<Image>;
    /**
     * Re-applies the last undone cleanup operation using the DocumentCleanup redo API.
     * Updates the displayed image and returns it.
     */
    redo(): Promise<Image>;
    /**
     * Clears all brush strokes and resets the displayed image back to the original,
     * discarding all applied cleanup operations. Returns the original image.
     */
    reset(): Promise<Image>;
    /**
     * Returns whether an undo operation is currently available.
     * This is true when at least one cleanup operation has been performed and not yet fully undone.
     */
    canUndo(): Promise<boolean>;
    /**
     * Returns whether a redo operation is currently available.
     * This is true when at least one undo operation has been performed and not yet overwritten by a new cleanup.
     */
    canRedo(): Promise<boolean>;
    /**
     * Clears all current brush strokes from the canvas without applying cleanup.
     */
    clearBrushStrokes(): void;
    dispose(): void;
}
