import type { PageImageSource } from "../../configuration/native/PageImageSource";
import { DocumentQualityAnalyzerConfiguration, DocumentQualityAnalyzerResult, DocumentScannerScanResponse, Image } from "../../../core-types";
import ScanbotSDK from "../../../scanbot-sdk";
export declare class DocumentDetectionUIResult {
    value: DocumentScannerScanResponse;
    source: PageImageSource;
    analysis: DocumentQualityAnalyzerResult | null;
    static create(value: DocumentScannerScanResponse, source: PageImageSource): DocumentDetectionUIResult;
    updateOriginalImage(image: Image): void;
    updatedCroppedImage(result: Image): void;
    setAnalysis(result: DocumentQualityAnalyzerResult): void;
    runAnalysis(sdk: ScanbotSDK, config: DocumentQualityAnalyzerConfiguration): Promise<void>;
    getImage(): Image;
    private rotatePolygon;
}
