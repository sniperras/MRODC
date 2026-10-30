import React from "react";
import BarcodeScannerView from "../../../../barcode-scanner-view";
import type { ActionBarConfiguration } from "../../../configuration/common/ActionBarConfiguration";
import MrzScannerView from "../../../../mrz-scanner-view";
import { ScannerView } from "../../../../scanner-view";
import { CameraFacingMode, CameraInfo } from "../../../../model/camera-info";
export declare class Props {
    capabilities?: ActionButtonCapabilities;
    scanner?: BarcodeScannerView | MrzScannerView;
    /** Action buttons will be positioned at the bottom of the video, with this padding. */
    bottomPadding: number;
    config: ActionBarConfiguration;
    torchEnabledInitially: boolean;
    activeCamera: CameraInfo;
    zoomSteps: number[];
    defaultZoomFactor: number;
    onCameraUpdate: (mode: CameraFacingMode) => void;
    /** When true, action buttons move to the side of the video in landscape orientation, instead of staying at the bottom. Defaults to false. */
    moveToSideInLandscape?: boolean;
}
export declare class ActionButtonCapabilities {
    hasFacingOptions: boolean;
    isTorchAvailable: boolean;
    static setFromScanner(scanner: React.MutableRefObject<ScannerView<any, any>>, setCapabilities: React.Dispatch<React.SetStateAction<ActionButtonCapabilities>>): void;
}
export declare function areAnyActionButtonsVisible(capabilities: ActionButtonCapabilities | undefined, actionBarConfiguration: ActionBarConfiguration): boolean;
export default function ActionButtonContainer(props: Props): React.JSX.Element;
