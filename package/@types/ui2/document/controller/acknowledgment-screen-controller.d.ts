import React from "react";
import { DocumentScanningFlow } from "../../configuration/document/DocumentScanningFlow";
import { DocumentDetectionResult, DocumentQualityAnalyzerResult } from "../../../core-types";
import { AcknowledgementDocumentQualityWarning, AcknowledgementScreenConfiguration } from "../../configuration/document/AcknowledgementScreenConfiguration";
import { BarButtonConfiguration } from "../../configuration/common/Common";
import ScanbotSDK from "../../../scanbot-sdk";
import { DocumentDetectionUIResult } from "../model/document-detection-ui-result";
export declare class AcknowledgementWarning {
    analysis: DocumentQualityAnalyzerResult;
    banner?: AcknowledgementDocumentQualityWarning;
    button?: BarButtonConfiguration;
    isDocumentDetected(result: DocumentDetectionResult): boolean;
    constructor(config: AcknowledgementScreenConfiguration, analysis: DocumentQualityAnalyzerResult, detectionResult: DocumentDetectionResult);
}
declare class Props {
    croppedDetectionResult: DocumentDetectionUIResult;
    visible: boolean;
    configuration: DocumentScanningFlow;
    sdk: ScanbotSDK;
    onAccept: (detectionResult: DocumentDetectionUIResult) => void;
    onReject: () => void;
    onError: (error: Error) => void;
}
export declare function AcknowledgmentScreenController(props: Props): React.JSX.Element;
export {};
