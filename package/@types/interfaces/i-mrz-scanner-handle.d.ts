import { DeepPartial } from "../core-types";
import { MrzScannerViewConfiguration } from "../model/configuration/mrz-scanner-view-configuration";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface IMrzScannerHandle extends IFinderScannerHandle {
    updateConfiguration(config: DeepPartial<MrzScannerViewConfiguration>): void;
}
