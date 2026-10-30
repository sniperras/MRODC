import { DeepPartial } from "../core-types";
import { TextPatternScannerViewConfiguration } from "../model/configuration/text-pattern-scanner-view-configuration";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface ITextPatternScannerHandle extends IFinderScannerHandle {
    updateConfiguration(config: DeepPartial<TextPatternScannerViewConfiguration>): void;
}
