import { DeepPartial } from "../core-types";
import { CheckScannerViewConfiguration } from "../model/configuration/check-scanner-view-configuration";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface ICheckScannerHandle extends IFinderScannerHandle {
    updateConfiguration(config: DeepPartial<CheckScannerViewConfiguration>): void;
}
