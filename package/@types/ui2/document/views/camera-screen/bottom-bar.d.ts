import React from "react";
import { DocumentScanningFlow } from "../../../configuration/document/DocumentScanningFlow";
import { ShutterButtonState } from "./shutter-button";
import type ScanbotSDK from "../../../../scanbot-sdk";
import { DocumentScannerScanResponse } from "../../../../core-types";
import { ToolbarMode } from "../../../configuration/common/ToolbarConfiguration";
/**
 * GRADIENT mode is deprecated and only supported in portrait orientation. When the tool bar is
 * shown in landscape, it falls back to SOLID regardless of the configured mode.
 */
export declare function isSolidToolbar(mode: ToolbarMode, isLandscape: boolean): boolean;
export declare class ButtonBarState {
    importButtonEnabled: boolean;
    snappingModeButtonEnabled: boolean;
    snappingModeState: "auto" | "manual";
    torchButtonEnabled: boolean;
    torchState: "on" | "off";
    reviewButtonCount: number;
    reviewButtonPreviewImageUrl: string | null;
    reviewButtonEnabled: boolean;
    shutterButtonState: ShutterButtonState;
}
declare class Props {
    config: DocumentScanningFlow;
    onFileSelectDialogOpened: () => void;
    /** Note that onFileSelectDialogClosed may not be called in old browsers (see details below). */
    onFileSelectDialogClosed: () => void;
    onFileUploaded: (image: DocumentScannerScanResponse | null) => void;
    snappingModeButtonClick: () => void;
    onTorchButtonClick: () => void;
    onReviewButtonClick: () => void;
    onShutterButtonClick: () => void;
    buttonStates: ButtonBarState;
    sdk: ScanbotSDK;
    scanLimitReached: boolean;
    isLandscape?: boolean;
}
export declare const Height = 112;
export declare const LandscapeBarWidth = 112;
export declare function BottomBar(props: Props): React.JSX.Element;
export {};
