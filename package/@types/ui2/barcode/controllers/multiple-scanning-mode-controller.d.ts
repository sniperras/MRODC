import React from "react";
import { BarcodeScannerUiResult, BarcodeScannerScreenConfiguration } from "../../configuration";
import { IBarcodeMapper } from "../utils/barcode-mapper/i-barcode-mapper";
import { Root } from "react-dom/client";
import { NavigationBarSize } from "../../document/views/camera-screen/top-bar";
import BarcodeScannerView from "../../../barcode-scanner-view";
import { CameraFacingMode, CameraInfo } from "../../../model/camera-info";
declare class Props {
    root: Root;
    configuration: BarcodeScannerScreenConfiguration;
    activeCamera: CameraInfo | null;
    onCameraPermissionDenied: () => void;
    onSdkReady: (scanner: BarcodeScannerView | null) => void;
    onSubmit: (barcodeScannerResult: BarcodeScannerUiResult) => void;
    onError: (error?: Error) => void;
    scanningEnabled: React.MutableRefObject<boolean>;
    barcodeMapper: IBarcodeMapper;
    navigationBarSize: NavigationBarSize;
    onCameraUpdate: (mode: CameraFacingMode) => void;
}
export declare function MultipleScanningModeController(props: Props): React.JSX.Element;
export {};
