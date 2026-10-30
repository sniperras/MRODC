import React from "react";
import type ScanbotSDK from './scanbot-sdk';
import { DocumentScannerViewConfiguration, HintTextConfiguration } from "./model/configuration/document-scanner-view-configuration";
import { type DeepPartial } from "./core-types";
import { ScanbotCameraProps, ScanbotCameraState, ScannerView } from "./scanner-view";
import { ShutterButton, ShutterButtonAction } from "./view/shutter-button";
import { DocumentOutline } from "./view/document-outline";
import { PolygonMovementPredicate } from "./utils/predicate/polygon-movement-predicate";
import { Polygon } from "./utils/dto/Polygon";
import { IDocumentScannerHandle } from "./interfaces/i-document-scanner-handle";
import { DocumentScannerRunResponse, DocumentScannerScanResponse } from "./core-types";
import { DocumentScanner } from "./core/compiled/bridge/DocumentScanner";
export declare class DocumentScannerState extends ScanbotCameraState {
    action: ShutterButtonAction;
}
export declare class DocumentScannerProps extends ScanbotCameraProps {
    sdk: ScanbotSDK;
    onStatusStringUpdate?: (status: keyof HintTextConfiguration) => void;
    pauseAR?: boolean;
}
export default class DocumentScannerView extends ScannerView<DocumentScannerProps, DocumentScannerState> implements IDocumentScannerHandle {
    static DETECT_AND_CROP_RESOLUTION: number;
    outline: DocumentOutline | null;
    button: ShutterButton | null;
    polygonMovementPredicate: PolygonMovementPredicate;
    autoCaptureToken: any;
    private _configuration?;
    private _configurationSourceProps?;
    private finder?;
    constructor(props: DocumentScannerProps);
    get defaultAction(): ShutterButtonAction;
    get enabled(): boolean;
    updateConfiguration(configuration: DeepPartial<DocumentScannerViewConfiguration>): void;
    get configuration(): DocumentScannerViewConfiguration;
    componentDidUpdate(prevProps: DocumentScannerProps): void;
    get autoCaptureSensitivity(): number;
    private static root;
    static create(configuration: DocumentScannerViewConfiguration, sdk: ScanbotSDK): Promise<DocumentScannerView>;
    detectAndCrop(): Promise<DocumentScannerScanResponse | null>;
    enableAutoCapture(): void;
    disableAutoCapture(): void;
    updateAutoCapture(enabled: boolean): void;
    isAutoCaptureEnabled(): boolean;
    handle?: DocumentScanner;
    onSdkReady(): Promise<void>;
    private createHandle;
    /**
     * Internal functions
     */
    private readonly updateDimensionsCallback;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    updateDimensions(): void;
    detect(): Promise<void>;
    detectInWebWorker(): Promise<DocumentScannerRunResponse>;
    preventAutoCapture?: boolean;
    handleAutoCapture(statusOk: boolean, polygon?: Polygon): Promise<void>;
    updateButton(action: ShutterButtonAction): void;
    render(): React.JSX.Element;
    defaultCaptureButtonClick: () => Promise<void>;
    private scalePolygonPointsToPixels;
    private runMovementPredicate;
    private getCameraFrameSize;
}
