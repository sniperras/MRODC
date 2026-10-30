import type { DeepPartial } from "../utils";
import { BarButtonConfiguration } from "../common/Common";
import { ButtonConfiguration } from "../common/Common";
import { DocumentCleanupConfiguration } from "../DocumentCleanupTypes";
import { IconButton } from "../common/Common";
import { ScanbotAlertDialog } from "../common/ScanbotAlertDialog";
import { StyledText } from "../common/Common";
/**
Configuration of the optional stroke-size slider for the clean up screen.
*/
export declare class DocumentCleanupStrokeSizeSlider {
    /**
      Determines whether the stroke-size slider is shown in the toolbar.
      @defaultValue true;
      */
    visible: boolean;
    /**
      Configuration of the caption displayed above the stroke-size slider.
      @defaultValue new StyledText({
          "text": "?documentCleanupStrokeSizeCaption",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      The minimum stroke size available to the user.
      @defaultValue 20;
      */
    minStrokeSize: number;
    /**
      The maximum stroke size available to the user.
      @defaultValue 50;
      */
    maxStrokeSize: number;
    /** @param source {@displayType `DeepPartial<DocumentCleanupStrokeSizeSlider>`} */
    constructor(source?: DeepPartial<DocumentCleanupStrokeSizeSlider>);
}
/**
Configuration of the toolbar for the clean up screen.
*/
export declare class DocumentCleanupToolbarConfiguration {
    /**
      Configuration of the 'undo' button, located in the toolbar.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "text": "?documentCleanupUndoButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupUndoButton",
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
    undoButton: BarButtonConfiguration;
    /**
      Configuration of the 'redo' button, located in the toolbar.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "text": "?documentCleanupRedoButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupRedoButton",
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
    redoButton: BarButtonConfiguration;
    /**
      Configuration of the 'reset' button, located in the toolbar.
      @defaultValue new BarButtonConfiguration({
          "title": new StyledText({
              "text": "?documentCleanupResetButtonTitle",
              "color": "?sbColorOnPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupResetButton",
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
    resetButton: BarButtonConfiguration;
    /**
      Configuration of the optional stroke-size slider, located in the toolbar.
      @defaultValue new DocumentCleanupStrokeSizeSlider({});
      */
    strokeSizeSlider: DocumentCleanupStrokeSizeSlider;
    /**
      Configuration of the button that increases the stroke size, located next to the stroke-size slider.
      @defaultValue new IconButton({
          "color": "?sbColorOnPrimary",
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupIncreaseStrokeSizeButton"
      });
      */
    increaseStrokeSizeButton: IconButton;
    /**
      Configuration of the button that decreases the stroke size, located next to the stroke-size slider.
      @defaultValue new IconButton({
          "color": "?sbColorOnPrimary",
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupDecreaseStrokeSizeButton"
      });
      */
    decreaseStrokeSizeButton: IconButton;
    /** @param source {@displayType `DeepPartial<DocumentCleanupToolbarConfiguration>`} */
    constructor(source?: DeepPartial<DocumentCleanupToolbarConfiguration>);
}
/**
Configuration of the cleanup brush stroke indicator appearance.
*/
export declare class DocumentCleanupStrokeIndicator {
    /**
      The border color of the stroke-size indicator.
      @defaultValue "?sbColorOnPrimary";
      */
    borderColor: string;
    /**
      The opacity of the stroke indicator, from 0.0 (fully transparent) to 1.0 (fully opaque).
      @defaultValue 0.9;
      */
    opacity: number;
    /** @param source {@displayType `DeepPartial<DocumentCleanupStrokeIndicator>`} */
    constructor(source?: DeepPartial<DocumentCleanupStrokeIndicator>);
}
/**
Configuration of the cleanup brush stroke appearance.
*/
export declare class DocumentCleanupStroke {
    /**
      The color of the stroke.
      @defaultValue "?sbColorPositive";
      */
    color: string;
    /**
      The configuration of the stroke-size indicator.
      @defaultValue new DocumentCleanupStrokeIndicator({});
      */
    indicator: DocumentCleanupStrokeIndicator;
    /** @param source {@displayType `DeepPartial<DocumentCleanupStroke>`} */
    constructor(source?: DeepPartial<DocumentCleanupStroke>);
}
/**
The image for an instruction item in the introduction screen for the clean up screen.
*/
export type DocumentCleanupItemImage = DocumentCleanupItemDefaultImage | DocumentCleanupItemCustomImage;
/** @internal */
export declare namespace DocumentCleanupItemImage {
    /** @internal */
    function from(source: DeepPartial<DocumentCleanupItemImage>): DocumentCleanupItemImage;
}
/**
The default image for an instruction item.
*/
export declare class DocumentCleanupItemDefaultImage {
    readonly _type: "DocumentCleanupItemDefaultImage";
    /** @param source {@displayType `DeepPartial<DocumentCleanupItemDefaultImage>`} */
    constructor(source?: DeepPartial<DocumentCleanupItemDefaultImage>);
}
/**
A custom image for an instruction item.
*/
export declare class DocumentCleanupItemCustomImage {
    readonly _type: "DocumentCleanupItemCustomImage";
    /**
      The web or file URI to the image.
      */
    uri: string;
    /** @param source {@displayType `DeepPartial<DocumentCleanupItemCustomImage>`} */
    constructor(source?: DeepPartial<DocumentCleanupItemCustomImage>);
}
/**
Configuration of an instruction item in the introduction screen for the clean up screen.
*/
export declare class DocumentCleanupIntroductionItem {
    /**
      The image for the instruction item.
      @defaultValue new DocumentCleanupItemDefaultImage({});
      */
    image: DocumentCleanupItemImage;
    /**
      The title of the instruction item.
      @defaultValue new StyledText({
          "text": "",
          "color": "?sbColorOnSurface"
      });
      */
    title: StyledText;
    /**
      The description text of the instruction item.
      @defaultValue new StyledText({
          "text": "",
          "color": "?sbColorOnSurface"
      });
      */
    content: StyledText;
    /**
      The background color of the instruction item box.
      @defaultValue "#FBFBFB";
      */
    backgroundColor: string;
    /** @param source {@displayType `DeepPartial<DocumentCleanupIntroductionItem>`} */
    constructor(source?: DeepPartial<DocumentCleanupIntroductionItem>);
}
/**
Configuration of the introduction screen for the clean up screen.
*/
export declare class DocumentCleanupIntroductionScreenConfiguration {
    /**
      The background color of the introduction screen.
      @defaultValue "?sbColorSurface";
      */
    backgroundColor: string;
    /**
      The divider color of the introduction screen.
      @defaultValue "?sbColorOutline";
      */
    dividerColor: string;
    /**
      Determines whether the introduction screen should automatically be shown or not when the clean up screen opens.
      @defaultValue true;
      */
    showAutomatically: boolean;
    /**
      The title of the introduction screen.
      @defaultValue new StyledText({
          "text": "?documentCleanupIntroductionTitle",
          "color": "?sbColorOnSurface"
      });
      */
    title: StyledText;
    /**
      Configuration of the button that closes the introduction screen.
      @defaultValue new ButtonConfiguration({
          "visible": true,
          "text": "?documentCleanupIntroductionCloseButton",
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupIntroductionCloseButton",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "?sbColorPrimary",
              "strokeWidth": 0.0
          }),
          "foreground": new ForegroundStyle({
              "iconVisible": false,
              "color": "?sbColorOnPrimary",
              "useShadow": false
          })
      });
      */
    closeButton: ButtonConfiguration;
    /**
      Configuration of the 'draw to erase' instruction item.
      @defaultValue new DocumentCleanupIntroductionItem({
          "title": new StyledText({
              "text": "?documentCleanupIntroductionDrawTitle",
              "color": "?sbColorOnSurface"
          }),
          "content": new StyledText({
              "text": "?documentCleanupIntroductionDrawContent",
              "color": "?sbColorOnSurface"
          })
      });
      */
    draw: DocumentCleanupIntroductionItem;
    /**
      Configuration of the 'pinch to zoom' instruction item.
      @defaultValue new DocumentCleanupIntroductionItem({
          "title": new StyledText({
              "text": "?documentCleanupIntroductionPinchTitle",
              "color": "?sbColorOnSurface"
          }),
          "content": new StyledText({
              "text": "?documentCleanupIntroductionPinchContent",
              "color": "?sbColorOnSurface"
          })
      });
      */
    pinch: DocumentCleanupIntroductionItem;
    /**
      Configuration of the 'move the page' instruction item.
      @defaultValue new DocumentCleanupIntroductionItem({
          "title": new StyledText({
              "text": "?documentCleanupIntroductionMoveTitle",
              "color": "?sbColorOnSurface"
          }),
          "content": new StyledText({
              "text": "?documentCleanupIntroductionMoveContent",
              "color": "?sbColorOnSurface"
          })
      });
      */
    move: DocumentCleanupIntroductionItem;
    /** @param source {@displayType `DeepPartial<DocumentCleanupIntroductionScreenConfiguration>`} */
    constructor(source?: DeepPartial<DocumentCleanupIntroductionScreenConfiguration>);
}
/**
Configuration of the screen for cleaning up scanned pages.
*/
export declare class DocumentCleanupScreenConfiguration {
    /**
      Configuration of the 'cancel' button, located in the top bar.
      @defaultValue new ButtonConfiguration({
          "visible": true,
          "text": "?documentCleanupTopBarCancelButtonTitle",
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupTopBarCancelButton",
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
      Configuration of the title, located in the top bar.
      @defaultValue new StyledText({
          "text": "?documentCleanupScreenTitle",
          "color": "?sbColorOnPrimary"
      });
      */
    topBarTitle: StyledText;
    /**
      Configuration of the 'confirm' button, located in the top bar.
      @defaultValue new ButtonConfiguration({
          "visible": true,
          "text": "?documentCleanupTopBarConfirmButtonTitle",
          "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupTopBarConfirmButton",
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
    topBarConfirmButton: ButtonConfiguration;
    /**
      The background color of the clean up screen.
      @defaultValue "?sbColorOutline";
      */
    backgroundColor: string;
    /**
      Configuration of the underlying document cleanup engine.
      @defaultValue new DocumentCleanupConfiguration({});
      */
    engineConfiguration: DocumentCleanupConfiguration;
    /**
      Configuration of the toolbar for the clean up screen.
      @defaultValue new DocumentCleanupToolbarConfiguration({});
      */
    toolbar: DocumentCleanupToolbarConfiguration;
    /**
      Configuration of the introduction screen for the clean up screen.
      @defaultValue new DocumentCleanupIntroductionScreenConfiguration({});
      */
    introduction: DocumentCleanupIntroductionScreenConfiguration;
    /**
      Configuration of the stroke indicator and appearance for the clean up screen.
      @defaultValue new DocumentCleanupStroke({});
      */
    stroke: DocumentCleanupStroke;
    /**
      Configuration of the alert dialog displayed when the user tries to reset all cleanup edits.
      @defaultValue new ScanbotAlertDialog({
          "title": new StyledText({
              "text": "?documentCleanupResetAllEditsAlertTitle",
              "color": "?sbColorOnSurface"
          }),
          "subtitle": new StyledText({
              "text": "?documentCleanupResetAllEditsAlertSubtitle",
              "color": "?sbColorOnSurfaceVariant"
          }),
          "okButton": new ButtonConfiguration({
              "text": "?documentCleanupResetAllEditsAlertResetButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupResetAllEditsAlertResetButton",
              "background": new BackgroundStyle({
                  "fillColor": "?sbColorPrimary",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "color": "?sbColorOnPrimary"
              })
          }),
          "actionButton": new ButtonConfiguration({
              "visible": false
          }),
          "cancelButton": new ButtonConfiguration({
              "text": "?documentCleanupResetAllEditsAlertCancelButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupResetAllEditsAlertCancelButton",
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
    resetAllEditsAlertDialog: ScanbotAlertDialog;
    /**
      Configuration of the alert dialog displayed when the erased stroke area is too large to process.
      @defaultValue new ScanbotAlertDialog({
          "title": new StyledText({
              "text": "?documentCleanupAreaTooLargeAlertTitle",
              "color": "?sbColorOnSurface"
          }),
          "subtitle": new StyledText({
              "text": "?documentCleanupAreaTooLargeAlertSubtitle",
              "color": "?sbColorOnSurfaceVariant"
          }),
          "okButton": new ButtonConfiguration({
              "text": "?documentCleanupAreaTooLargeAlertButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupAreaTooLargeAlertButton",
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
    areaTooLargeAlertDialog: ScanbotAlertDialog;
    /**
      Configuration of the alert dialog displayed when the user tries to cancel with unsaved cleanup edits.
      @defaultValue new ScanbotAlertDialog({
          "title": new StyledText({
              "text": "?documentCleanupDiscardChangesAlertTitle",
              "color": "?sbColorOnSurface"
          }),
          "subtitle": new StyledText({
              "text": "?documentCleanupDiscardChangesAlertSubtitle",
              "color": "?sbColorOnSurfaceVariant"
          }),
          "okButton": new ButtonConfiguration({
              "text": "?documentCleanupDiscardChangesAlertConfirmButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupDiscardChangesAlertConfirmButton",
              "background": new BackgroundStyle({
                  "fillColor": "?sbColorPrimary",
                  "strokeWidth": 0.0
              }),
              "foreground": new ForegroundStyle({
                  "color": "?sbColorOnPrimary"
              })
          }),
          "actionButton": new ButtonConfiguration({
              "visible": false
          }),
          "cancelButton": new ButtonConfiguration({
              "text": "?documentCleanupDiscardChangesAlertCancelButtonTitle",
              "accessibilityDescription": "?accessibilityDescriptionDocumentCleanupDiscardChangesAlertCancelButton",
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
    discardChangesAlertDialog: ScanbotAlertDialog;
    /** @param source {@displayType `DeepPartial<DocumentCleanupScreenConfiguration>`} */
    constructor(source?: DeepPartial<DocumentCleanupScreenConfiguration>);
}
