import type { DeepPartial } from "../utils";
import { DocumentDetectionStatus } from "../DocumentScannerTypes";
import { DocumentQualityAssessment } from "../DocumentQualityAnalyzerTypes";
import { DocumentQuality } from "../DocumentQualityAnalyzerTypes";
import { DocumentStraighteningParameters } from "../DocumentStraightenerTypes";
import { PageImageSource } from "./PageImageSource";
import { ParametricFilter } from "../ParametricFilters";
import { Point } from "../utils";
/**
The result of the health insurance card recognition.
*/
export declare class PageData {
    /**
      The list of filters applied to the page.
      @defaultValue null;
      */
    readonly filters: ParametricFilter[] | null;
    /**
      The polygon of the page.
      @defaultValue [];
      */
    readonly polygon: Point[];
    /**
      The detection status of the page.
      @defaultValue null;
      */
    readonly documentDetectionStatus: DocumentDetectionStatus | null;
    /**
      The deprecated quality score of the page.
      @defaultValue null;
      */
    readonly documentQuality: DocumentQuality | null;
    /**
      The quality score of the page.
      @defaultValue null;
      */
    readonly documentQualityAssessment: DocumentQualityAssessment | null;
    /**
      The document straightening parameters applied to the page.
      @defaultValue null;
      */
    readonly straighteningParameters: DocumentStraighteningParameters | null;
    /**
      Indicates whether cleanup has been applied to the page.
      @defaultValue false;
      */
    readonly cleanupApplied: boolean;
    /**
      The source of the page image.
      @defaultValue null;
      */
    readonly source: PageImageSource | null;
    /**
      The unique identifier of the document.
      @defaultValue null;
      */
    readonly id: number | null;
    /**
      The database identifier of the original image.
      @defaultValue null;
      */
    readonly originalImageId: number | null;
    /**
      The unique identifier of the document image.
      @defaultValue null;
      */
    readonly documentImageId: number | null;
    /** @param source {@displayType `DeepPartial<PageData>`} */
    constructor(source?: DeepPartial<PageData>);
}
