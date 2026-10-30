import { DeepPartial } from "../core-types";
import { BarcodeScannerViewConfiguration } from "../model/configuration/barcode-scanner-view-configuration";
import { Size } from "../utils/dto/Size";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface IBarcodeScannerHandle extends IFinderScannerHandle {
    saveExtractedImageData(): void;
    updateTorch(enabled: boolean): void;
    getResolution(): Promise<Size>;
    setRecognitionResolution(resolution: number): void;
    updateConfiguration(config: DeepPartial<BarcodeScannerViewConfiguration>): void;
}
