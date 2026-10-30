import React from "react";
import { ScanbotCameraProps, ScanbotCameraState } from "./scanner-view";
import { IMrzScannerHandle } from "./interfaces/i-mrz-scanner-handle";
import { MrzScannerViewConfiguration } from "./model/configuration/mrz-scanner-view-configuration";
import { MrzScanner } from "./core/compiled/bridge/MrzScanner";
import { type DeepPartial } from "./core-types";
import FinderScannerView from "./finder-scanner-view";
export declare class MrzScannerProps extends ScanbotCameraProps {
}
export declare class MrzScannerState extends ScanbotCameraState {
}
export default class MrzScannerView extends FinderScannerView<MrzScannerProps, MrzScannerState> implements IMrzScannerHandle {
    static FRAME_RESOLUTION: number;
    shouldComputeSize: boolean;
    private _configuration?;
    constructor(props: MrzScannerProps);
    get configuration(): MrzScannerViewConfiguration;
    get enabled(): boolean;
    private static root;
    static create(configuration: MrzScannerViewConfiguration): Promise<MrzScannerView>;
    updateConfiguration(configuration: DeepPartial<MrzScannerViewConfiguration>): void;
    private readonly updateDimensionsCallback;
    handle?: MrzScanner;
    onSdkReady(): Promise<void>;
    /**
     * React Overrides
     */
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    updateDimensions(): Promise<void>;
    pauseDetection(): void;
    detect(): Promise<void>;
    saveExtractedImageData(): void;
    render(): React.ReactNode;
}
