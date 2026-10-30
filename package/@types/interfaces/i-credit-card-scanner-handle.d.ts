import { DeepPartial } from "../core-types";
import { CreditCardScannerViewConfiguration } from "../model/configuration/credit-card-scanner-view-configuration";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface ICreditCardScannerHandle extends IFinderScannerHandle {
    updateConfiguration(config: DeepPartial<CreditCardScannerViewConfiguration>): void;
}
