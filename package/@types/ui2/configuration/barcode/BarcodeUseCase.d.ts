import type { DeepPartial } from "../utils";
import { FindAndPickScanningMode } from "./FindAndPickScanningModeUseCase";
import { MultipleScanningMode } from "./MultipleScanningModeUseCase";
import { SingleScanningMode } from "./SingleScanningModeUseCase";
/**
Configuration of the barcode scanner screen's behavior.
*/
export type BarcodeUseCase = SingleScanningMode | MultipleScanningMode | FindAndPickScanningMode;
/** @internal */
export declare namespace BarcodeUseCase {
    /** @internal */
    function from(source: DeepPartial<BarcodeUseCase>): BarcodeUseCase;
}
