import { DeepPartial } from "../core-types";
import { DocumentDataExtractorViewConfiguration } from "../model/configuration/document-data-extractor-view-configuration";
import { IFinderScannerHandle } from "./base/i-finder-scanner-handle";
export interface IDocumentDataExtractorHandle extends IFinderScannerHandle {
    updateConfiguration(config: DeepPartial<DocumentDataExtractorViewConfiguration>): void;
}
