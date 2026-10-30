import React from "react";
import BarcodeScannerView from "../../../barcode-scanner-view";
import { ArOverlayFindAndPickConfiguration, ArOverlayGeneralConfiguration } from "../../configuration/barcode/ArTrackingOverlayConfiguration";
import type { ActionBarConfiguration } from "../../configuration/common/ActionBarConfiguration";
import { BarcodeScannerViewConfiguration as BarcodeScannerViewConfig } from "../../../model/configuration/barcode-scanner-view-configuration";
import { BarcodePolygon } from "../../../view/barcode-polygon/barocode-polygon";
import { BarcodePolygonLabel } from "../../../view/barcode-polygon/barcode-polygon-label";
import type { CameraConfiguration } from "../../configuration/common/CameraConfiguration";
import type { BarcodeItem } from "../../configuration";
import { Root } from "react-dom/client";
import { CameraFacingMode, CameraInfo } from "../../../model/camera-info";
export declare class Props {
    root: Root;
    cameraConfiguration: CameraConfiguration;
    arOverlay: ArOverlayGeneralConfiguration | ArOverlayFindAndPickConfiguration;
    actionBarConfig: ActionBarConfiguration;
    actionBarBottomPadding: number;
    activeCamera: CameraInfo | null;
    arOnBarcodeEnter: (code: BarcodeItem, polygon: BarcodePolygon, label: BarcodePolygonLabel) => void;
    arOnBarcodeClick: (barcode: BarcodeItem) => void;
    scanningPaused: boolean;
    barcodeScannerViewConfig: BarcodeScannerViewConfig;
    containerId: string;
    onCameraPermissionDenied: () => void;
    setActionButtonsVisible: (visible: boolean) => void;
    onLicenseError?: () => void;
    onSdkReady: (scanner: BarcodeScannerView | null) => void;
    onCameraUpdate: (mode: CameraFacingMode) => void;
    /** When true, action buttons move to the side of the video in landscape orientation, instead of staying at the bottom. Defaults to false. */
    moveToSideInLandscape?: boolean;
}
export declare function BarcodeScanner(props: Props): React.JSX.Element;
