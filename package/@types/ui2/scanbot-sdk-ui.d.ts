import * as Config from "./configuration";
import { BarcodeScannerScreenConfiguration, BarcodeScannerUiResult, DocumentScanningFlow } from "./configuration";
import { DocumentScannerUIResult } from "./configuration/DocumentScannerUIResult";
import { SBDocument } from "./document/model/sb-document";
import { MrzScannerUiResult } from "./configuration/mrz/MRZScannerUIResult";
import { MrzScannerScreenConfiguration } from "./configuration/mrz/MRZScannerScreenConfiguration";
export default class ScanbotSDKUI {
    static SBDocument: typeof SBDocument;
    static readonly Config: typeof Config;
    /** The scannerAbortHandler will be set synchronously when a scanner is created.
     *  This way, the user can immediately call the abortScanner() method after calling a create***Scanner(), even
     *  when the scanner is still being initialized. */
    private static scannerAbortHandler;
    /** Aborts a running scanner. The scanner's promise will be resolved with `null`. */
    static abortScanner(): Promise<void>;
    static createDocumentScanner(config: DocumentScanningFlow, documentId?: number): Promise<DocumentScannerUIResult | null>;
    static createBarcodeScanner(config: BarcodeScannerScreenConfiguration): Promise<BarcodeScannerUiResult | null>;
    static createMrzScanner(config: MrzScannerScreenConfiguration): Promise<MrzScannerUiResult | null>;
    private static createScanner;
    private static checkLicense;
    private static createRoot;
    private static createContainer;
    /**
     * The RTU UI is mounted into its own container, appended as a sibling of the host app's
     * existing DOM (not inside it), and is visually full-screen/on top via `position: fixed` +
     * a high `z-index`. That CSS layering keeps sighted/mouse users out of the host app while
     * the scanner is open, but it does nothing to stop assistive technology: a screen reader's
     * virtual cursor (and Tab-key keyboard navigation) can still reach and activate the host
     * app's now-invisible elements behind the scanner, since they're technically still just as
     * present and interactive in the DOM.
     *
     * To prevent that, we mark every other child of `document.body` as `aria-hidden` and
     * `inert` for as long as the RTU UI container is mounted, and restore each element's
     * original state once it's unmounted. `inert` additionally prevents focus/pointer
     * interaction (not just hiding from assistive tech), and is supported by all evergreen
     * browsers this SDK targets.
     */
    private static hideBackgroundContentFromAssistiveTech;
}
