import React from "react";
import FinderScannerView, { FinderScannerProps, FinderScannerState } from "./finder-scanner-view";
import { type DeepPartial } from "./core-types";
import type ScanbotSDK from "./scanbot-sdk";
import { CreditCardScannerViewConfiguration } from "./model/configuration/credit-card-scanner-view-configuration";
import { ICreditCardScannerHandle } from "./interfaces/i-credit-card-scanner-handle";
export declare class CreditCardScannerProps extends FinderScannerProps {
    configuration: CreditCardScannerViewConfiguration;
}
export default class CreditCardScannerView extends FinderScannerView<CreditCardScannerProps, FinderScannerState> implements ICreditCardScannerHandle {
    private handle;
    private configuration;
    constructor(props: CreditCardScannerProps);
    private static root;
    static create(sdk: ScanbotSDK, configuration: CreditCardScannerViewConfiguration): Promise<ICreditCardScannerHandle>;
    updateConfiguration(configuration: DeepPartial<CreditCardScannerViewConfiguration>): void;
    onSdkReady(): Promise<void>;
    componentWillUnmount(): void;
    get enabled(): boolean;
    detect(): Promise<void>;
    render(): React.ReactNode;
}
