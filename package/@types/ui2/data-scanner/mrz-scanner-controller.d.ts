import React from 'react';
import { MrzScannerScreenConfiguration } from "../configuration/mrz/MRZScannerScreenConfiguration";
import { MrzScannerUiResult } from "../configuration/mrz/MRZScannerUIResult";
import { Root } from "react-dom/client";
/** The finder view's hole should never be wider than this, regardless of screen/video width. */
export declare const MAX_FINDER_WIDTH = 480;
/**
 * The finder's width roughly equals the video width minus its left/right insets, so widening
 * the insets on large screens caps how wide the finder can grow.
 */
export declare function applyMaxFinderWidth(config: MrzScannerScreenConfiguration, baseInsets: {
    left: number;
    right: number;
}, maxFinderWidth: number): void;
declare class Props {
    root: Root;
    configuration: MrzScannerScreenConfiguration;
    onClose: () => void;
    onSubmit: (result: MrzScannerUiResult) => void;
    onError: (error: Error) => void;
}
export declare function MrzScannerController(props: Props): React.JSX.Element;
export {};
