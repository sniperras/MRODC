import { type Point } from "../../configuration/utils";
import ScanbotSDK from "../../../scanbot-sdk";
import { DeepPartial, DocumentStraighteningParameters, Image, ParametricFilter, PdfConfiguration, TiffGeneratorParameters } from "../../../core-types";
import { SBPage } from "./sb-page";
import { SBDocumentData } from "./utils/sb-document-data";
import { TiffPageOptions } from "../../../service/tiff-generator";
import { DocumentScanningFlow } from "../../configuration/document/DocumentScanningFlow";
import { DocumentDetectionUIResult } from "./document-detection-ui-result";
export declare class SBDocumentConfig {
    documentId: number | undefined;
    configuration: DocumentScanningFlow;
    get documentImageSizeLimit(): number;
    get cleanSession(): boolean;
    get filters(): ParametricFilter[];
    get straighteningParameters(): DocumentStraighteningParameters | undefined;
    constructor(params?: {
        config: DocumentScanningFlow;
        documentId?: number;
    });
    loadFromStorage(): boolean;
}
export declare class SBDocument {
    private static readonly DOCUMENT_DRAFT_ID;
    /** @internal */
    readonly data: SBDocumentData;
    getData(): SBDocumentData;
    get isDraft(): boolean;
    private constructor();
    private syncPage;
    private readonly _pages;
    get pages(): SBPage[];
    private splicePage;
    sdk(): ScanbotSDK;
    get pageCount(): number;
    pageAtIndex(position: number): SBPage;
    movePage(from: number, to: number): Promise<void>;
    static loadFromStorage(documentId: number): Promise<SBDocument>;
    /** @internal */
    static create(config: SBDocumentConfig): Promise<SBDocument>;
    updateStorageDocument(): Promise<number>;
    delete(): Promise<void>;
    addPage(response: DocumentDetectionUIResult, position?: number): Promise<void>;
    deleteFromPosition(position: number): Promise<void>;
    deletePage(page: SBPage): Promise<void>;
    deleteAllPages(): Promise<void>;
    cropAndRotateAtIndex(index: number, polygon: Point[], rotations: number): Promise<void>;
    cropAndRotatePage(page: SBPage, polygon: Point[], rotations: number): Promise<void>;
    applyCleanupToPage(page: SBPage, cleanedImage: Image): Promise<void>;
    straightenPage(page: SBPage, params?: DeepPartial<DocumentStraighteningParameters>): Promise<Image>;
    apply(page: SBPage, data: {
        rotations?: number;
        filters?: ParametricFilter[];
        polygon?: Point[];
    }): Promise<void>;
    private updateDataProperty;
    /** @internal */
    static _internal_updateProperty(of: any, name: string, value: any): void;
    private deleteId;
    /** @internal */
    convertToFinalVersion(): Promise<SBDocument>;
    private insertRenderedBuffer;
    createPdf(generatorOptions: DeepPartial<PdfConfiguration> & {
        runOcr?: boolean;
    }): Promise<ArrayBuffer>;
    createTiff(generatorOptions?: DeepPartial<TiffGeneratorParameters>, pageOptions?: Omit<TiffPageOptions, "consumeImage">): Promise<ArrayBuffer>;
    loadPdf(): Promise<ArrayBuffer>;
    loadTiff(): Promise<ArrayBuffer>;
    private loadBuffer;
    private saveRenderedPdf;
    private saveRenderedTiff;
    deletePdf(): Promise<boolean>;
    deleteTiff(): Promise<boolean>;
}
