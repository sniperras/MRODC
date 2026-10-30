import type { DeepPartial } from "../utils";
import { CameraScreenConfiguration } from "./CameraScreenConfiguration";
import { CroppingScreenConfiguration } from "./CroppingScreenConfiguration";
import { DocumentCleanupScreenConfiguration } from "./DocumentCleanupScreenConfiguration";
import { ReviewScreenConfiguration } from "./ReviewScreenConfiguration";
/**
Configuration of the document scanner sub-screens.
*/
export declare class DocumentScannerScreens {
    /**
      Configuration of the screen for scanning the pages with the camera.
      @defaultValue new CameraScreenConfiguration({});
      */
    camera: CameraScreenConfiguration;
    /**
      Configuration of the screen for reviewing the scanned pages.
      @defaultValue new ReviewScreenConfiguration({});
      */
    review: ReviewScreenConfiguration;
    /**
      Configuration of the screen for cleaning up the scanned pages.
      @defaultValue new DocumentCleanupScreenConfiguration({});
      */
    cleanup: DocumentCleanupScreenConfiguration;
    /**
      Configuration of the screen for cropping the scanned pages.
      @defaultValue new CroppingScreenConfiguration({});
      */
    cropping: CroppingScreenConfiguration;
    /** @param source {@displayType `DeepPartial<DocumentScannerScreens>`} */
    constructor(source?: DeepPartial<DocumentScannerScreens>);
}
