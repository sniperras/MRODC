import { BarcodeDocumentFormat } from "../BarcodeDocumentTypes";
import { BarcodeScannerConfiguration } from "../BarcodeScannerTypes";
import { CheckScannerConfiguration } from "../CheckScannerTypes";
import { CreditCardScannerConfiguration } from "../CreditCardTypes";
import { DocumentCleanupConfiguration } from "../DocumentCleanupTypes";
import { DocumentDataExtractorConfiguration } from "../DocumentDataExtractorTypes";
import { DocumentQualityAnalyzerConfiguration } from "../DocumentQualityAnalyzerTypes";
import { DocumentScannerConfiguration } from "../DocumentScannerTypes";
import { DocumentStraighteningMode } from "../DocumentStraightenerTypes";
import { Image } from "../bridge/image";
import { MrzParserConfiguration } from "../MrzTypes";
import { MrzScannerConfiguration } from "../MrzTypes";
import { TextPatternScannerConfiguration } from "../TextPatternScannerTypes";
import { VinScannerConfiguration } from "../VinScannerTypes";
import { BarcodeDocumentParser } from "../bridge/BarcodeDocumentParser";
import { BarcodeScanner } from "../bridge/BarcodeScanner";
import { CheckScanner } from "../bridge/CheckScanner";
import { CreditCardScanner } from "../bridge/CreditCardScanner";
import { DocumentCleanup } from "../bridge/DocumentCleanup";
import { DocumentDataExtractor } from "../bridge/DocumentDataExtractor";
import { DocumentQualityAnalyzer } from "../bridge/DocumentQualityAnalyzer";
import { DocumentScanner } from "../bridge/DocumentScanner";
import { DocumentStraightener } from "../bridge/DocumentStraightener";
import { ImageManipulator } from "../bridge/ImageManipulator";
import { ImageProcessor } from "../bridge/ImageProcessor";
import { MrzScanner } from "../bridge/MrzScanner";
import { MrzParser } from "../bridge/MrzScanner";
import { OcrEngine } from "../bridge/OcrEngine";
import { TextPatternScanner } from "../bridge/TextPatternScanner";
import { VinScanner } from "../bridge/VinScanner";
import type { WorkerBridge } from "../../bridge/worker-bridge";
import type { DeepPartial } from "../utils";
export declare class BridgeApiEntrypoint {
    private workerBridge;
    constructor(workerBridge: WorkerBridge);
    readonly BarcodeDocumentParser: {
        /**
            Initialize the barcode document parser.
            @param acceptedFormats The configuration to use for the barcode document parser.
        */
        create: (acceptedFormats?: BarcodeDocumentFormat[]) => Promise<BarcodeDocumentParser>;
        /**
            Checks if the BarcodeDocumentParser API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly BarcodeScanner: {
        /**
            Initialize the barcode scanner.
            @param configuration The configuration to use for the barcode scanner.
        */
        create: (configuration?: DeepPartial<BarcodeScannerConfiguration>) => Promise<BarcodeScanner>;
        /**
            Checks if the BarcodeScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly CheckScanner: {
        /**
            Initialize the check scanner.
            @param configuration The configuration to use for the check scanner.
        */
        create: (configuration?: DeepPartial<CheckScannerConfiguration>) => Promise<CheckScanner>;
        /**
            Checks if the CheckScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly CreditCardScanner: {
        /**
            Initialize the credit card scanner.
            @param configuration The configuration to use for the scanner.
        */
        create: (configuration?: DeepPartial<CreditCardScannerConfiguration>) => Promise<CreditCardScanner>;
        /**
            Checks if the CreditCardScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly DocumentCleanup: {
        /**
            Initializes the document cleanup.
When the keepText option is enabled (see DocumentCleanupConfiguration), text detection will be run, which can be time-consuming.
For better user experience, consider running the document cleanup constructor asynchronously.

            @param image The image to process.
            @param configuration The document cleanup configuration.
        */
        create: (image: Image, configuration?: DeepPartial<DocumentCleanupConfiguration>) => Promise<DocumentCleanup>;
        /**
            Checks if the DocumentCleanup API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly DocumentDataExtractor: {
        /**
            Initialize the document data extractor.
            @param configuration The configuration to use for the recognizer.
        */
        create: (configuration?: DeepPartial<DocumentDataExtractorConfiguration>) => Promise<DocumentDataExtractor>;
        /**
            Checks if the DocumentDataExtractor API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly DocumentQualityAnalyzer: {
        /**
            Initialize the document quality analyzer.
            @param configuration The configuration to use for the document quality analyzer.
        */
        create: (configuration?: DeepPartial<DocumentQualityAnalyzerConfiguration>) => Promise<DocumentQualityAnalyzer>;
        /**
            Checks if the DocumentQualityAnalyzer API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly DocumentScanner: {
        /**
            Initialize the document detector.
            @param configuration The configuration for the document detector.
        */
        create: (configuration?: DeepPartial<DocumentScannerConfiguration>) => Promise<DocumentScanner>;
        /**
            Checks if the DocumentScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly DocumentStraightener: {
        /**
            Initialize the document enhancer.
        */
        create: () => Promise<DocumentStraightener>;
        /**
            Check if the specified straightening mode is available (i.e. required assets are present).
            @param mode The straightening mode to check.
            @returns True if the straightening mode is available, false otherwise.
        */
        isStraighteningModeAvailable: (mode: DocumentStraighteningMode) => Promise<boolean>;
        /**
            Checks if the DocumentStraightener API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly ImageManipulator: {
        /**
            Initialize the image processor.
        */
        create: () => Promise<ImageManipulator>;
        /**
            Checks if the ImageManipulator API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly ImageProcessor: {
        /**
            Initialize the image processor.
        */
        create: () => Promise<ImageProcessor>;
        /**
            Checks if the ImageProcessor API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly MrzScanner: {
        /**
            Initialize the MRZ scanner.
            @param configuration The configuration to use for the scanner.
        */
        create: (configuration?: DeepPartial<MrzScannerConfiguration>) => Promise<MrzScanner>;
        /**
            Checks if the MrzScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly MrzParser: {
        /**
            Initialize the MRZ parser.
            @param configuration The configuration to use for the parser.
        */
        create: (configuration?: DeepPartial<MrzParserConfiguration>) => Promise<MrzParser>;
        /**
            Checks if the MrzParser API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly OcrEngine: {
        /**
            Initialize the recognizer.
        */
        create: () => Promise<OcrEngine>;
        /**
            Checks if the OcrEngine API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly TextPatternScanner: {
        /**
            Initialize the generic text line scanner.
            @param configuration The configuration to use for the generic text line scanner.
        */
        create: (configuration?: DeepPartial<TextPatternScannerConfiguration>) => Promise<TextPatternScanner>;
        /**
            Checks if the TextPatternScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
    readonly VinScanner: {
        /**
            Initialize the VIN scanner.
            @param configuration The configuration to use for the VIN scanner.
        */
        create: (configuration?: DeepPartial<VinScannerConfiguration>) => Promise<VinScanner>;
        /**
            Checks if the VinScanner API is available in the current WASM flavor.
            If this returns false, attempting to use any other method on this API will result in an error being thrown.
            In this case, adjust the `enginePath` parameter during initialization to point to a WASM flavor that supports this API.
            For more information see Web SDK initialization section on https://docs.scanbot.io
        */
        isAvailable: () => Promise<boolean>;
    };
}
