import React from "react";
import { DocumentCleanupScreenConfiguration } from "../../../configuration/document/DocumentCleanupScreenConfiguration";
export declare const LandscapeButtonsBarWidth = 80;
export declare const LandscapeSliderBarWidth = 60;
export declare const LandscapeBarWidth: number;
interface Props {
    config: DocumentCleanupScreenConfiguration;
    barColor: string;
    isLandscape: boolean;
    /**
     * Merges undo/redo, the slider, and reset into a single bar/column instead of splitting them
     * into two bars/sections. In landscape this decides whether the sidebar is "combined" (one
     * column) or "separate" (buttons column + slider column side by side); in portrait it decides
     * whether the bottom area is a single row or a buttons row stacked above a slider row.
     */
    isCombinedLayout: boolean;
    brushSize: number;
    canUndo: boolean;
    canRedo: boolean;
    disabled: boolean;
    onBrushSizeChange: (size: number) => void;
    onUndoClick: () => void;
    onRedoClick: () => void;
    onResetClick: () => void;
}
/**
 * Renders the cleanup screen's undo/redo/slider/reset controls, adapting between:
 * - Landscape "separate": two vertical sidebar sections side by side on the right (buttons + slider).
 * - Landscape "combined": a single vertical sidebar column with undo/redo, slider, and reset.
 * - Portrait "combined": a single horizontal bar with undo/redo, slider, and reset.
 * - Portrait "separate" (default): a buttons row stacked above a slider row.
 */
export declare function CleanupToolbar(props: Props): React.JSX.Element;
export {};
