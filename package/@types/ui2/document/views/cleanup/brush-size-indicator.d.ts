import React from "react";
import { DocumentCleanupStrokeIndicator, DocumentCleanupStrokeSizeSlider } from "../../../configuration/document/DocumentCleanupScreenConfiguration";
interface Props {
    visible: boolean;
    brushSize: number;
    config: DocumentCleanupStrokeSizeSlider;
    /** The actual brush/stroke color, used to fill the preview circle so it matches what will be drawn. */
    strokeColor: string;
    indicatorConfig: DocumentCleanupStrokeIndicator;
}
/**
 * Displays a circle preview of the current brush size. Shown transiently on pinch or stroke-size
 * change, always centered within the cleanup container view (i.e. the area between the top bar
 * and the toolbar), regardless of orientation or toolbar layout.
 */
export declare function BrushSizeIndicator({ visible, brushSize, config, strokeColor, indicatorConfig }: Props): React.JSX.Element;
export {};
