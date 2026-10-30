import type { DeepPartial } from "../utils";
import { AcknowledgementScreenConfiguration } from "./AcknowledgementScreenConfiguration";
import { BackgroundStyle } from "../common/Common";
import { BadgeStyle } from "../common/Common";
import { BarButtonConfiguration } from "../common/Common";
import { ButtonConfiguration } from "../common/Common";
import { CameraPermissionScreen } from "../common/CameraPermission";
import { DocumentQualityAnalyzerConfiguration } from "../DocumentQualityAnalyzerTypes";
import { DocumentScannerCameraConfiguration } from "./DocumentScannerCameraConfiguration";
import { DocumentScannerParameters } from "../DocumentScannerTypes";
import { DocumentScannerUserGuidance } from "./DocumentScannerUserGuidance";
import { IconButton } from "../common/Common";
import { IntroductionScreenConfiguration } from "./IntroductionScreenConfiguration";
import { PolygonStyle } from "../common/Common";
import { ScanbotAlertDialog } from "../common/ScanbotAlertDialog";
import { SelectCameraMenu } from "../common/SelectCameraMenu";
import { StyledText } from "../common/Common";
import { Timeouts } from "../common/Common";
import { ToolbarMode } from "../common/ToolbarConfiguration";
import { UserGuidanceConfiguration } from "../common/UserGuidanceConfiguration";
import { UserGuidanceVisibility } from "./DocumentScannerGuidanceVisibility";
import { Vibration } from "../common/Common";
import { ViewFinderConfiguration } from "../common/ViewFinderConfiguration";
/**
Configuration of the 'shutter' button.
*/
export declare class ShutterButton {
    /**
      Determines if the 'shutter' button can be tapped to manually snap a document when 'auto snapping mode' is active.
      @defaultValue true;
      */
    enabledInAutoSnappingMode: boolean;
    /**
      The text to be read when the 'shutter' button is selected via the accessibility mode.
      @defaultValue "?accessibilityDescriptionCameraShutterButton";
      */
    accessibilityDescription: string;
    /**
      The text to be read via the accessibility mode to announce that the 'shutter' button is in automatic scanning mode.
      @defaultValue "?accessibilityDescriptionShutterButtonAutomaticScanningMode";
      */
    accessibilityDescriptionAutomaticScanningMode: string;
    /**
      The text to be read via the accessibility mode to announce that the 'shutter' button is in manual scanning mode.
      @defaultValue "?accessibilityDescriptionShutterButtonManualScanningMode";
      */
    accessibilityDescriptionManualScanningMode: string;
    /**
      The text to be read via the accessibility mode to announce that the 'shutter' button is processing the scanned document.
      @defaultValue "?accessibilityDescriptionShutterButtonProcessingDocument";
      */
    accessibilityDescriptionProcessingDocument: string;
    /**
      The outer color of the 'shutter' button.
      @defaultValue "?sbColorOnPrimary";
      */
    outerColor: string;
    /**
      The inner color of the 'shutter' button.
      @defaultValue "?sbColorOnPrimary";
      */
    innerColor: string;
    /** @param source {@displayType `DeepPartial<ShutterButton>`} */
    constructor(source?: DeepPartial<ShutterButton>);
}
/**
Configuration of the 'preview' button.
*/
export type PreviewButton = PagePreviewMode | TextButtonMode | TextWithBadgeButtonMode | NoButtonMode;
/** @internal */
export declare namespace PreviewButton {
    /** @internal */
    function from(source: DeepPartial<PreviewButton>): PreviewButton;
}
/**
Configuration of the scan assistance overlay.
*/
export declare class ScanAssistanceOverlay {
    /**
      Determines whether the scan assistance overlay is visible or not. If the viewfinder is enabled, this flag is ignored and the scan assistance overlay is not displayed.
      @defaultValue true;
      */
    visible: boolean;
    /**
      The background color of the scan assistance overlay.
      @defaultValue "?sbColorModalOverlay";
      */
    backgroundColor: string;
    /**
      The foreground color of the scan assistance overlay image.
      @defaultValue "?sbColorSurface";
      */
    foregroundColor: string;
    /** @param source {@displayType `DeepPartial<ScanAssistanceOverlay>`} */
    constructor(source?: DeepPartial<ScanAssistanceOverlay>);
}
/**
Configuration of the 'preview' button in 'page preview mode'.
*/
export declare class PagePreviewMode {
    readonly _type: "PagePreviewMode";
    /**
      The text to be read when the 'preview' button is selected via the accessibility mode.
      @defaultValue "?accessibilityDescriptionCameraPreviewButton";
      */
    accessibilityDescription: string;
    /**
      The color of the image placeholder.
      @defaultValue "?sbColorOnSurfaceVariant";
      */
    imagePlaceholderColor: string;
    /**
      Configuration of the page counter icon.
      @defaultValue new BadgeStyle({
          "visible": true,
          "background": new BackgroundStyle({
              "strokeColor": "?sbColorSurface",
              "fillColor": "?sbColorSurface"
          }),
          "foregroundColor": "?sbColorPrimary"
      });
      */
    pageCounter: BadgeStyle;
    /** @param source {@displayType `DeepPartial<PagePreviewMode>`} */
    constructor(source?: DeepPartial<PagePreviewMode>);
}
/**
Configuration of the 'preview' button in 'text button mode'.
*/
export declare class TextButtonMode {
    readonly _type: "TextButtonMode";
    /**
      The text to be read when the 'preview' button is selected via the accessibility mode.
      @defaultValue "?accessibilityDescriptionCameraPreviewButton";
      */
    accessibilityDescription: string;
    /**
      Configuration of the text style for the 'preview' button.
      @defaultValue new StyledText({
          "text": "?cameraPreviewButtonTitle",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      Configuration of the background appearance for the button.
      @defaultValue new BackgroundStyle({
          "strokeColor": "#00000000",
          "fillColor": "#00000000",
          "strokeWidth": 0.0
      });
      */
    background: BackgroundStyle;
    /** @param source {@displayType `DeepPartial<TextButtonMode>`} */
    constructor(source?: DeepPartial<TextButtonMode>);
}
/**
Configuration of the 'preview' button in 'text with badge button mode'.
*/
export declare class TextWithBadgeButtonMode {
    readonly _type: "TextWithBadgeButtonMode";
    /**
      The text to be read when the 'preview' button is selected via the accessibility mode.
      @defaultValue "?accessibilityDescriptionCameraPreviewButton";
      */
    accessibilityDescription: string;
    /**
      Configuration of the text style for the 'preview' button.
      @defaultValue new StyledText({
          "text": "?cameraBadgedPreviewButtonTitle",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      Configuration of the background appearance for the button.
      @defaultValue new BackgroundStyle({
          "strokeColor": "#00000000",
          "fillColor": "#00000000",
          "strokeWidth": 0.0
      });
      */
    background: BackgroundStyle;
    /**
      Configuration of the badge icon.
      @defaultValue new BadgeStyle({
          "visible": true,
          "background": new BackgroundStyle({
              "strokeColor": "?sbColorSurface",
              "fillColor": "?sbColorSurface"
          }),
          "foregroundColor": "?sbColorPrimary"
      });
      */
    pageCounter: BadgeStyle;
    /** @param source {@displayType `DeepPartial<TextWithBadgeButtonMode>`} */
    constructor(source?: DeepPartial<TextWithBadgeButtonMode>);
}
/**
Configuration of the 'preview' button in 'no button mode'.
*/
export declare class NoButtonMode {
    readonly _type: "NoButtonMode";
    /**
      Whether the button is visible.
      @defaultValue false;
      */
    readonly visible: boolean;
    /** @param source {@displayType `DeepPartial<NoButtonMode>`} */
    constructor(source?: DeepPartial<NoButtonMode>);
}
/**
Configuration of the toolbar for the camera screen.
*/
export declare class CameraToolbar {
    /**
      The visual mode used for the toolbar.
      @defaultValue "SOLID";
      */
    toolbarMode: ToolbarMode;
    /**
      Configuration of the 'import' button.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "visible": false,
              "text": "?cameraImportButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraImportButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    importButton: BarButtonConfiguration;
    /**
      Configuration of the 'auto snapping mode' button.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "visible": false,
              "text": "?cameraAutoSnapButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraAutoSnapButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    autoSnappingModeButton: BarButtonConfiguration;
    /**
      Configuration of the 'manual snapping mode' button.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "visible": false,
              "text": "?cameraManualSnapButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraManualSnapButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    manualSnappingModeButton: BarButtonConfiguration;
    /**
      Configuration of the 'shutter' button.
      @defaultValue new ShutterButton({
          "accessibilityDescription": "?accessibilityDescriptionCameraShutterButton",
          "accessibilityDescriptionAutomaticScanningMode": "?accessibilityDescriptionShutterButtonAutomaticScanningMode",
          "accessibilityDescriptionManualScanningMode": "?accessibilityDescriptionShutterButtonManualScanningMode",
          "accessibilityDescriptionProcessingDocument": "?accessibilityDescriptionShutterButtonProcessingDocument"
      });
      */
    shutterButton: ShutterButton;
    /**
      Configuration of the 'flashlight' button when in the 'on' state.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "visible": false,
              "text": "?cameraTorchOnButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraTorchOnButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    torchOnButton: BarButtonConfiguration;
    /**
      Configuration of the 'flashlight' button when in the 'off' state.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "visible": false,
              "text": "?cameraTorchOffButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraTorchOffButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    torchOffButton: BarButtonConfiguration;
    /**
      Configuration of the 'preview' button.
      @defaultValue new PagePreviewMode({});
      */
    previewButton: PreviewButton;
    /** @param source {@displayType `DeepPartial<CameraToolbar>`} */
    constructor(source?: DeepPartial<CameraToolbar>);
}
/**
The type of animation to display after snapping a page.
*/
export type PageSnapFeedbackMode = PageSnapFunnelAnimation | PageSnapCheckMarkAnimation | PageSnapFeedbackNone;
/** @internal */
export declare namespace PageSnapFeedbackMode {
    /** @internal */
    function from(source: DeepPartial<PageSnapFeedbackMode>): PageSnapFeedbackMode;
}
/**
Configuration of the funnel animation.
*/
export declare class PageSnapFunnelAnimation {
    readonly _type: "PageSnapFunnelAnimation";
    /**
      The overlay color for the funnel animation.
      @defaultValue "?sbColorModalOverlay";
      */
    overlayColor: string;
    /** @param source {@displayType `DeepPartial<PageSnapFunnelAnimation>`} */
    constructor(source?: DeepPartial<PageSnapFunnelAnimation>);
}
/**
Configuration of the check mark animation.
*/
export declare class PageSnapCheckMarkAnimation {
    readonly _type: "PageSnapCheckMarkAnimation";
    /**
      The overlay color for the check mark animation.
      @defaultValue "?sbColorModalOverlay";
      */
    overlayColor: string;
    /**
      The background color for the check mark animation.
      @defaultValue "?sbColorOutline";
      */
    checkMarkBackgroundColor: string;
    /**
      The check mark color for the check mark animation.
      @defaultValue "#00000000";
      */
    checkMarkColor: string;
    /** @param source {@displayType `DeepPartial<PageSnapCheckMarkAnimation>`} */
    constructor(source?: DeepPartial<PageSnapCheckMarkAnimation>);
}
/**
To not use a snap animation.
*/
export declare class PageSnapFeedbackNone {
    readonly _type: "PageSnapFeedbackNone";
    /** @param source {@displayType `DeepPartial<PageSnapFeedbackNone>`} */
    constructor(source?: DeepPartial<PageSnapFeedbackNone>);
}
/**
Configuration of the feedback shown after snapping a page.
*/
export declare class CaptureFeedback {
    /**
      Whether the camera preview should blink or not after snapping a page.
      @defaultValue true;
      */
    cameraBlinkEnabled: boolean;
    /**
      The type of animation to display after snapping a page.
      @defaultValue new PageSnapFunnelAnimation({});
      */
    snapFeedbackMode: PageSnapFeedbackMode;
    /** @param source {@displayType `DeepPartial<CaptureFeedback>`} */
    constructor(source?: DeepPartial<CaptureFeedback>);
}
/**
Configuration of the document contour detection polygon.
*/
export declare class DocumentPolygonConfiguration {
    /**
      Determines the visibility mode for the polygon.
      @defaultValue "ENABLED";
      */
    visibility: UserGuidanceVisibility;
    /**
      Configuration of the polygon when the detected document status is 'OK'.
      @defaultValue new PolygonStyle({
          "strokeColor": "?sbColorPositive",
          "fillColor": "#00000000",
          "strokeWidth": 2.0
      });
      */
    documentOk: PolygonStyle;
    /**
      Configuration of the polygon when the detected document status is 'not OK'.
      @defaultValue new PolygonStyle({
          "strokeColor": "?sbColorNegative",
          "fillColor": "#00000000",
          "strokeWidth": 2.0
      });
      */
    documentNotOk: PolygonStyle;
    /**
      Configuration of the animated polygon when the document is being scanned for capturing in 'auto snapping mode'.
      @defaultValue new PolygonStyle({
          "strokeColor": "#40A9FF",
          "fillColor": "#00000000",
          "strokeWidth": 2.0
      });
      */
    autoSnapProgress: PolygonStyle;
    /** @param source {@displayType `DeepPartial<DocumentPolygonConfiguration>`} */
    constructor(source?: DeepPartial<DocumentPolygonConfiguration>);
}
/**
Configuration of the screen for scanning the pages with the camera.
*/
export declare class CameraScreenConfiguration {
    /**
      Configuration of the acknowledgement screen.
      @defaultValue new AcknowledgementScreenConfiguration({});
      */
    acknowledgement: AcknowledgementScreenConfiguration;
    /**
      Configuration of the document scanner introduction screen.
      @defaultValue new IntroductionScreenConfiguration({});
      */
    introduction: IntroductionScreenConfiguration;
    /**
      Configuration of the scan assistance overlay.
      @defaultValue new ScanAssistanceOverlay({});
      */
    scanAssistanceOverlay: ScanAssistanceOverlay;
    /**
      Configuration of the camera permission screen.
      @defaultValue new CameraPermissionScreen({
          "background": "?sbColorSurface",
          "iconBackground": "?sbColorOutline",
          "icon": new IconStyle({
              "visible": true,
              "color": "?sbColorOnSurface"
          }),
          "closeButton": new ButtonConfiguration({
              "visible": true,
              "text": "?cameraPermissionCloseButton",
              "accessibilityDescription": "?accessibilityDescriptionCameraPermissionCloseButton",
              "background": new BackgroundStyle({
                  "strokeColor": "?sbColorPrimary",
                  "fillColor": "?sbColorPrimary",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "iconVisible": true,
                  "color": "?sbColorOnPrimary",
                  "useShadow": false
              })
          }),
          "enableCameraTitle": new StyledText({
              "text": "?cameraPermissionEnableCameraTitle",
              "color": "?sbColorOnSurface"
          }),
          "enableCameraExplanation": new StyledText({
              "text": "?cameraPermissionEnableCameraExplanation",
              "color": "?sbColorOnSurfaceVariant"
          })
      });
      */
    cameraPermission: CameraPermissionScreen;
    /**
      Configuration of the title, located in the top bar.
      @defaultValue new StyledText({
          "text": "?cameraTopBarTitle",
          "color": "?sbColorOnPrimary"
      });
      */
    topBarTitle: StyledText;
    /**
      Configuration of the 'introduction' button, located in the top bar.
      @defaultValue new IconButton({
          "color": "?sbColorOnPrimary",
          "accessibilityDescription": "?accessibilityDescriptionCameraTopBarIntroButton"
      });
      */
    topBarIntroButton: IconButton;
    /**
      Configuration of the 'cancel' button, located in the top bar.
      @defaultValue new ButtonConfiguration({
          "visible": true,
          "text": "?cameraTopBarCancelButtonTitle",
          "accessibilityDescription": "?accessibilityDescriptionCameraTopBarCancelButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "foreground": new ForegroundStyle({
              "iconVisible": true,
              "color": "?sbColorOnPrimary",
              "useShadow": false
          })
      });
      */
    topBarBackButton: ButtonConfiguration;
    /**
      Configuration of the 'select camera' button, located in the top bar.
      @defaultValue new SelectCameraMenu({});
      */
    topBarCameraSelect: SelectCameraMenu;
    /**
      Configuration of the static user guidance, located just below the top bar.
      @defaultValue new UserGuidanceConfiguration({
          "title": new StyledText({
              "text": "?cameraTopGuidance",
              "color": "?sbColorOnPrimary"
          })
      });
      */
    topUserGuidance: UserGuidanceConfiguration;
    /**
      Configuration of the hints guiding users through the scanning process.
      @defaultValue new DocumentScannerUserGuidance({});
      */
    userGuidance: DocumentScannerUserGuidance;
    /**
      The background color of the camera screen.
      @defaultValue "#000000FF";
      */
    backgroundColor: string;
    /**
      If set to true, images captured by the camera or imported from the gallery or photo library will be analyzed and automatically rotated to correct their orientation.
      @defaultValue true;
      */
    autoRotateImages: boolean;
    /**
      If set to true, the review screen will be shown after each added page.
      @defaultValue false;
      */
    openReviewAfterEachScan: boolean;
    /**
      Configuration of the camera behavior.
      @defaultValue new DocumentScannerCameraConfiguration({});
      */
    cameraConfiguration: DocumentScannerCameraConfiguration;
    /**
      The parameters of the document scanner.
      @defaultValue new DocumentScannerParameters({});
      */
    scannerParameters: DocumentScannerParameters;
    /**
      Configuration of the document contour detection polygon.
      @defaultValue new DocumentPolygonConfiguration({});
      */
    polygon: DocumentPolygonConfiguration;
    /**
      Configuration of the toolbar for the camera screen.
      @defaultValue new CameraToolbar({});
      */
    toolbar: CameraToolbar;
    /**
      Configuration of the viewfinder.
      @defaultValue new ViewFinderConfiguration({
          "aspectRatio": new AspectRatio({
              "width": 21.0,
              "height": 29.0
          }),
          "visible": false
      });
      */
    viewFinder: ViewFinderConfiguration;
    /**
      Configuration of the feedback shown after snapping a page.
      @defaultValue new CaptureFeedback({});
      */
    captureFeedback: CaptureFeedback;
    /**
      Configuration of the scan confirmation vibration.
      @defaultValue new Vibration({
          "enabled": true
      });
      */
    vibration: Vibration;
    /**
      Configuration of timeouts.
      @defaultValue new Timeouts({
          "autoCancelTimeout": 0,
          "initialScanDelay": 0
      });
      */
    timeouts: Timeouts;
    /**
      Configuration of the alert dialog displayed when the scan limit is reached.
      @defaultValue new ScanbotAlertDialog({
          "title": new StyledText({
              "text": "?cameraLimitReachedAlertTitle",
              "color": "?sbColorOnSurface"
          }),
          "subtitle": new StyledText({
              "text": "?cameraLimitReachedAlertSubtitle",
              "color": "?sbColorOnSurfaceVariant"
          }),
          "okButton": new ButtonConfiguration({
              "text": "?cameraLimitReachedOkButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionCameraLimitReachedOkButton",
              "background": new BackgroundStyle({
                  "fillColor": "?sbColorPrimary",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "color": "?sbColorOnPrimary"
              })
          }),
          "cancelButton": new ButtonConfiguration({
              "visible": false
          })
      });
      */
    limitReachedAlertDialog: ScanbotAlertDialog;
    /**
      Configuration of the alert dialog displayed when the 'cancel' button is pressed.
      @defaultValue new ScanbotAlertDialog({
          "title": new StyledText({
              "text": "?cameraCancelAlertTitle",
              "color": "?sbColorOnSurface"
          }),
          "subtitle": new StyledText({
              "text": "?cameraCancelAlertSubtitle",
              "color": "?sbColorOnSurfaceVariant"
          }),
          "okButton": new ButtonConfiguration({
              "text": "?cameraCancelYesButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionCameraCancelYesButton",
              "background": new BackgroundStyle({
                  "fillColor": "?sbColorPrimary",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "color": "?sbColorOnPrimary"
              })
          }),
          "cancelButton": new ButtonConfiguration({
              "text": "?cameraCancelNoButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionCameraCancelNoButton",
              "background": new BackgroundStyle({
                  "fillColor": "#00000000",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "color": "?sbColorPrimary"
              })
          })
      });
      */
    cancelAlertDialog: ScanbotAlertDialog;
    /**
      Configuration of the document quality analyzer.
      @defaultValue new DocumentQualityAnalyzerConfiguration({});
      */
    documentQualityAnalyzerConfiguration: DocumentQualityAnalyzerConfiguration;
    /** @param source {@displayType `DeepPartial<CameraScreenConfiguration>`} */
    constructor(source?: DeepPartial<CameraScreenConfiguration>);
}
