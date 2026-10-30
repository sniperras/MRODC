import React from "react";
import MrzScannerView from "../../../mrz-scanner-view";
import { MrzScannerScreenConfiguration } from "../../configuration/mrz/MRZScannerScreenConfiguration";
import { MrzScannerResult } from "../../../core-types";
import { Root } from "react-dom/client";
import { NavigationBarSize } from "../../document/views/camera-screen/top-bar";
import { CameraFacingMode, CameraInfo } from "../../../model/camera-info";
export type MrzResultCallback = (result: MrzScannerResult) => void;
declare class Props {
    root: Root;
    visible?: boolean;
    config: MrzScannerScreenConfiguration;
    onCameraPermissionDenied: (err: Error) => void;
    onMrzDetected: MrzResultCallback;
    onSdkReady: (scanner: MrzScannerView) => void;
    onError: any;
    navigationBarSize: NavigationBarSize;
    onCameraUpdate: (mode: CameraFacingMode) => void;
    activeCamera: CameraInfo | null;
}
export declare function MrzScannerBox(props: Props): React.JSX.Element;
export {};
