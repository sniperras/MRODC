import { ViewFinderScannerConfiguration } from "./view-finder-scanner-configuration";
import { CreditCardScannerConfiguration, CreditCardScanningResult, DeepPartial } from "../../core-types";
export declare class CreditCardScannerViewConfiguration extends ViewFinderScannerConfiguration {
    constructor();
    /** {@displayType `DeepPartial<CreditCardScannerConfiguration>`} {@link CreditCardScannerConfiguration}*/
    scannerConfiguration?: DeepPartial<CreditCardScannerConfiguration>;
    onCreditCardDetected?: (e: CreditCardScanningResult) => void;
    static fromJson(json: any): CreditCardScannerViewConfiguration;
}
