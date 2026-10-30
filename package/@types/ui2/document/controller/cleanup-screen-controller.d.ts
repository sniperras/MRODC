import React from "react";
import { DocumentCleanupScreenConfiguration } from "../../configuration/document/DocumentCleanupScreenConfiguration";
import { DocumentFlowAppearanceConfiguration } from "../../configuration/document/DocumentScanningFlow";
import type ScanbotSDK from "../../../scanbot-sdk";
import { SBPage } from "../model/sb-page";
import { Image } from "../../../core-types";
declare class Props {
    config: DocumentCleanupScreenConfiguration;
    appearance: DocumentFlowAppearanceConfiguration;
    page?: SBPage;
    onCloseButtonClick: () => void;
    onApplyCleanup: (cleanedImage: Image) => Promise<void>;
    sdk: ScanbotSDK;
}
export declare function CleanupScreenController(props: Props): React.JSX.Element;
export {};
