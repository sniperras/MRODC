import React from "react";
import { BarcodeScannerScreenConfiguration, BarcodeScannerUiResult } from "../../configuration";
import { IBarcodeMapper } from "../utils/barcode-mapper/i-barcode-mapper";
import { Root } from "react-dom/client";
import { NavigationBarSize } from "../../document/views/camera-screen/top-bar";
import BarcodeScannerView from "../../../barcode-scanner-view";
import { CameraFacingMode, CameraInfo } from "../../../model/camera-info";
declare class Props {
    root: Root;
    configuration: BarcodeScannerScreenConfiguration;
    activeCamera: CameraInfo | null;
    onClose: () => void;
    onSdkReady: (scanner: BarcodeScannerView | null) => void;
    onSubmit: (barcodeScannerUIResult: BarcodeScannerUiResult) => void;
    onError: (error?: Error) => void;
    onCameraPermissionDenied: () => void;
    scanningEnabled: React.MutableRefObject<boolean>;
    barcodeMapper: IBarcodeMapper;
    navigationBarSize: NavigationBarSize;
    onCameraUpdate: (mode: CameraFacingMode) => void;
}
export declare function SingleScanningModeController(props: Props): React.JSX.Element;
export {};
