import type { DeepPartial } from "../utils";
import { BackgroundStyle } from "../common/Common";
import { BarButtonConfiguration } from "../common/Common";
import { IconStyle } from "../common/Common";
import { StyledText } from "../common/Common";
/**
Determines, after each page is snapped, whether the acknowledgment screen should be displayed or not.

- `UNACCEPTABLE_QUALITY`:
   The acknowledgement screen will only be shown when the quality of a scanned page is unacceptable. The quality threshold is determined by the document quality analyzer parameters.
- `ALWAYS`:
   The acknowledgement screen will always be shown after each snap, regardless of the scanned page's quality.
- `NONE`:
   The acknowledgement screen will be disabled, in effect never shown.
*/
export type AcknowledgementMode = 
/**
  The acknowledgement screen will only be shown when the quality of a scanned page is unacceptable. The quality threshold is determined by the document quality analyzer parameters.
  */
"UNACCEPTABLE_QUALITY"
/**
  The acknowledgement screen will always be shown after each snap, regardless of the scanned page's quality.
  */
 | "ALWAYS"
/**
  The acknowledgement screen will be disabled, in effect never shown.
  */
 | "NONE";
/** @hidden */
export declare const AcknowledgementModeValues: ReadonlyArray<AcknowledgementMode>;
/**
Configuration for proceed anyway button in different quality scenarios.
*/
export declare class AcknowledgementProceedAnywayButton {
    /**
      Whether the proceed anyway button is visible.
      @defaultValue true;
      */
    visible: boolean;
    /**
      Text shown when document is not found.
      @defaultValue new BarButtonConfiguration({
          "visible": true,
          "title": new StyledText({
              "text": "?proceedAnywayButtonDocumentNotFound"
          }),
          "accessibilityDescription": "?accessibilityDescriptionProceedAnywayButtonDocumentNotFound",
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
    documentNotFound: BarButtonConfiguration;
    /**
      Text shown when document quality is unacceptable.
      @defaultValue new BarButtonConfiguration({
          "visible": false,
          "title": new StyledText({
              "text": "?proceedAnywayButtonUnacceptableQuality",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionProceedAnywayButtonUnacceptableQuality",
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
    unacceptableQuality: BarButtonConfiguration;
    /**
      Text shown when document quality is uncertain.
      @defaultValue new BarButtonConfiguration({
          "visible": true,
          "title": new StyledText({
              "text": "?proceedAnywayButtonUncertainQuality",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionProceedAnywayButtonUncertainQuality",
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
    uncertainQuality: BarButtonConfiguration;
    /** @param source {@displayType `DeepPartial<AcknowledgementProceedAnywayButton>`} */
    constructor(source?: DeepPartial<AcknowledgementProceedAnywayButton>);
}
/**
Configuration for warning display in different quality scenarios.
*/
export declare class AcknowledgementDocumentQualityWarning {
    /**
      Whether the warning is visible.
      @defaultValue false;
      */
    visible: boolean;
    /**
      Text configuration for the warning.
      @defaultValue new StyledText({
          "text": "?acknowledgementWarning",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      Background color for the warning.
      @defaultValue new BackgroundStyle({});
      */
    background: BackgroundStyle;
    /**
      Configuration of the icon appearance.
      @defaultValue new IconStyle({});
      */
    icon: IconStyle;
    /** @param source {@displayType `DeepPartial<AcknowledgementDocumentQualityWarning>`} */
    constructor(source?: DeepPartial<AcknowledgementDocumentQualityWarning>);
}
/**
Configuration of the toolbar for the acknowledgement screen.
*/
export declare class AcknowledgementToolbar {
    /**
      Configuration of the 'retake' button.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "text": "?acknowledgementRetakeButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionAcknowledgementRetakeButton",
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
    retakeButton: BarButtonConfiguration;
    /**
      Configuration of the 'accept' button, when the quality of the scanned page is acceptable.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "text": "?acknowledgementAcceptButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionAcknowledgementAcceptButton",
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
    acceptWhenAcceptableButton: BarButtonConfiguration;
    /**
      Configuration of proceed anyway button for different quality scenarios.
      @defaultValue new AcknowledgementProceedAnywayButton({});
      */
    proceedAnywayButton: AcknowledgementProceedAnywayButton;
    /** @param source {@displayType `DeepPartial<AcknowledgementToolbar>`} */
    constructor(source?: DeepPartial<AcknowledgementToolbar>);
}
/**
Configuration of the acknowledgement screen.
*/
export declare class AcknowledgementScreenConfiguration {
    /**
      Configuration of the title, located in the top bar.
      @defaultValue new StyledText({
          "visible": false,
          "text": "?acknowledgementTitle",
          "color": "?sbColorOnPrimary"
      });
      */
    topBarTitle: StyledText;
    /**
      Determines, after each page is snapped, whether the acknowledgment screen should be displayed or not.
      @defaultValue "ALWAYS";
      */
    acknowledgementMode: AcknowledgementMode;
    /**
      The background color of the acknowledgement screen.
      @defaultValue "?sbColorOutline";
      */
    backgroundColor: string;
    /**
      Configuration of the toolbar for the acknowledgement screen.
      @defaultValue new AcknowledgementToolbar({});
      */
    toolbar: AcknowledgementToolbar;
    /**
      Configuration for warning display when document is not found.
      @defaultValue new AcknowledgementDocumentQualityWarning({
          "visible": true,
          "title": new StyledText({
              "text": "?acknowledgementWarningDocumentNotFound"
          }),
          "background": new BackgroundStyle({
              "strokeColor": "?sbColorNegative",
              "fillColor": "?sbColorNegative",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    documentNotFoundWarning: AcknowledgementDocumentQualityWarning;
    /**
      Configuration for warning display when document quality is unacceptable.
      @defaultValue new AcknowledgementDocumentQualityWarning({
          "visible": true,
          "title": new StyledText({
              "text": "?acknowledgementWarningUnacceptableQuality"
          }),
          "background": new BackgroundStyle({
              "strokeColor": "?sbColorNegative",
              "fillColor": "?sbColorNegative",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    unacceptableQualityWarning: AcknowledgementDocumentQualityWarning;
    /**
      Configuration for warning display when document quality is uncertain.
      @defaultValue new AcknowledgementDocumentQualityWarning({
          "visible": true,
          "title": new StyledText({
              "text": "?acknowledgementWarningUncertainQuality"
          }),
          "background": new BackgroundStyle({
              "strokeColor": "?sbColorNegative",
              "fillColor": "?sbColorNegative",
              "strokeWidth": 0.0
          }),
          "icon": new IconStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    uncertainQualityWarning: AcknowledgementDocumentQualityWarning;
    /** @param source {@displayType `DeepPartial<AcknowledgementScreenConfiguration>`} */
    constructor(source?: DeepPartial<AcknowledgementScreenConfiguration>);
}
