import React from "react";
import { ICheckScannerHandle } from "./interfaces/i-check-scanner-handle";
import FinderScannerView, { FinderScannerProps, FinderScannerState } from "./finder-scanner-view";
import { CheckScannerViewConfiguration } from "./model/configuration/check-scanner-view-configuration";
import { type DeepPartial } from "./core-types";
import type ScanbotSDK from "./scanbot-sdk";
export declare class CheckScannerProps extends FinderScannerProps {
    configuration: CheckScannerViewConfiguration;
}
export default class CheckScannerView extends FinderScannerView<CheckScannerProps, FinderScannerState> implements ICheckScannerHandle {
    private handle;
    private configuration;
    constructor(props: CheckScannerProps);
    private static root;
    static create(sdk: ScanbotSDK, configuration: CheckScannerViewConfiguration): Promise<ICheckScannerHandle>;
    updateConfiguration(configuration: DeepPartial<CheckScannerViewConfiguration>): void;
    onSdkReady(): Promise<void>;
    componentWillUnmount(): void;
    get enabled(): boolean;
    detect(): Promise<void>;
    render(): React.ReactNode;
}
