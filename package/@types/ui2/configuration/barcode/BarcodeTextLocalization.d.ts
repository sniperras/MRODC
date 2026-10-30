import type { DeepPartial } from "../utils";
/**
Configuration of the all strings for barcode scanner.
*/
export declare class BarcodeTextLocalization {
    /**
      Cancel button text for the top bar.
      @defaultValue "Cancel";
      */
    topBarCancelButton: string;
    /**
      Title for the top bar.
      @defaultValue "Scan Item";
      */
    topBarTitle: string;
    /**
      User guidance text.
      @defaultValue "Move the finder over a barcode";
      */
    userGuidance: string;
    /**
      Loading message for barcode info mapping.
      @defaultValue "Loading details...";
      */
    barcodeInfoMappingLoadingMessage: string;
    /**
      Title for the barcode info mapping error state.
      @defaultValue "Connection Error!";
      */
    barcodeInfoMappingErrorStateTitle: string;
    /**
      Subtitle for the barcode info mapping error state.
      @defaultValue "There was an issue and the data requested was not fetched. You could try again or discard this result to start a new scan.";
      */
    barcodeInfoMappingErrorStateSubtitle: string;
    /**
      Retry button text for the barcode info mapping error state.
      @defaultValue "Retry";
      */
    barcodeInfoMappingErrorStateRetryButton: string;
    /**
      Cancel button text for the barcode info mapping error state.
      @defaultValue "Cancel";
      */
    barcodeInfoMappingErrorStateCancelButton: string;
    /**
      Title for the manual count edit dialog.
      @defaultValue "Update count";
      */
    manualCountEditDialogTitle: string;
    /**
      Info for the manual count edit dialog.
      @defaultValue "Adjust the number of items you scanned.";
      */
    manualCountEditDialogInfo: string;
    /**
      Update button text for the manual count edit dialog.
      @defaultValue "Update";
      */
    manualCountEditDialogUpdateButton: string;
    /**
      Cancel button text for the manual count edit dialog.
      @defaultValue "Cancel";
      */
    manualCountEditDialogCancelButton: string;
    /**
      Accessibility description for the close button in the manual count edit dialog.
      @defaultValue "Clear count";
      */
    accessibilityDescriptionManualCountEditDialogClearTextButton: string;
    /**
      Accessibility description for the edit field in the manual count edit dialog.
      @defaultValue "Update count";
      */
    accessibilityDescriptionManualCountEditDialogEditField: string;
    /**
      Reset button text for the barcode sheet.
      @defaultValue "Reset";
      */
    sheetResetButton: string;
    /**
      Clear all button text for the barcode sheet.
      @defaultValue "Clear all";
      */
    sheetClearAllButton: string;
    /**
      Submit button text for the barcode sheet.
      @defaultValue "Submit";
      */
    sheetSubmitButton: string;
    /**
      Start scanning button text for the barcode sheet.
      @defaultValue "Start scanning";
      */
    sheetStartScanningButton: string;
    /**
      Title for the barcode sheet placeholder.
      @defaultValue "No barcodes here!";
      */
    sheetPlaceholderTitle: string;
    /**
      Subtitle for the barcode sheet placeholder.
      @defaultValue "The barcode list is currently empty. Close this sheet and scan your items to add them.";
      */
    sheetPlaceholderSubtitle: string;
    /**
      Accessibility description for the button that increases a scanned barcode's count in the barcode sheet.
      @defaultValue "Increase count";
      */
    sheetManualCountIncreaseButton: string;
    /**
      Accessibility description for the button that decreases a scanned barcode's count in the barcode sheet.
      @defaultValue "Decrease count";
      */
    sheetManualCountDecreaseButton: string;
    /**
      Cancel button text for the single mode confirmation dialog.
      @defaultValue "Close";
      */
    singleModeConfirmationCancelButton: string;
    /**
      Title for the multiple mode barcode sheet.
      @defaultValue "%d items";
      */
    multipleModeSheetTitle: string;
    /**
      Title for the find and pick barcode sheet.
      @defaultValue "%d/%d scanned";
      */
    findAndPickSheetTitle: string;
    /**
      Subtitle for the find and pick barcode sheet.
      @defaultValue "%d/%d added";
      */
    findAndPickSheetBarcodeItemSubtitle: string;
    /**
      Title for the find and pick partial alert.
      @defaultValue "Incomplete scan!";
      */
    findAndPickPartialAlertTitle: string;
    /**
      Subtitle for the find and pick partial alert.
      @defaultValue "Some codes are yet to be scanned. Proceed with submission anyway?";
      */
    findAndPickPartialAlertSubtitle: string;
    /**
      Cancel button text for the find and pick partial alert.
      @defaultValue "Cancel";
      */
    findAndPickPartialAlertCancelButton: string;
    /**
      Submit button text for the find and pick partial alert.
      @defaultValue "Yes, Submit";
      */
    findAndPickPartialAlertSubmitButton: string;
    /**
      Title for the find and pick complete alert.
      @defaultValue "All codes found!";
      */
    findAndPickCompleteAlertTitle: string;
    /**
      Subtitle for the find and pick complete alert.
      @defaultValue "You have successfully scanned all codes. Proceed with submission?";
      */
    findAndPickCompleteAlertSubtitle: string;
    /**
      Cancel button text for the find and pick complete alert.
      @defaultValue "Dismiss";
      */
    findAndPickCompleteAlertCancelButton: string;
    /**
      Accessibility description for the 'cancel' button in the top bar.
      @defaultValue "Cancel";
      */
    accessibilityDescriptionCancelButton: string;
    /**
      Accessibility caption voiced after successful scan. %d is replaced with the number of items found.
      @defaultValue "%d items found";
      */
    accessibilityDescriptionItemsScanned: string;
    /**
      Accessibility description for the sheet handle.
      @defaultValue "Sheet handle.";
      */
    accessibilityDescriptionSheetHandle: string;
    /**
      Accessibility description for the sheet handle when collapsed.
      @defaultValue "Collapsed.";
      */
    accessibilityDescriptionSheetCollapsed: string;
    /**
      Accessibility description for the sheet handle when expanded.
      @defaultValue "Expanded.";
      */
    accessibilityDescriptionSheetExpanded: string;
    /**
      Accessibility description for the flash button.
      @defaultValue "Toggle flash";
      */
    accessibilityDescriptionFlashButton: string;
    /**
      Accessibility value for the flash on button.
      @defaultValue "On";
      */
    accessibilityStateFlashOnButton: string;
    /**
      Accessibility value for the flash off button.
      @defaultValue "Off";
      */
    accessibilityStateFlashOffButton: string;
    /**
      Accessibility description for the zoom button.
      @defaultValue "Toggle camera zoom";
      */
    accessibilityDescriptionZoomButton: string;
    /**
      Accessibility description for the flip camera button.
      @defaultValue "Flip camera";
      */
    accessibilityDescriptionFlipCameraButton: string;
    /**
      Accessibility value for the flip camera back button.
      @defaultValue "Back";
      */
    accessibilityStateFlipCameraBackButton: string;
    /**
      Accessibility value for the flip camera front button.
      @defaultValue "Front";
      */
    accessibilityStateFlipCameraFrontButton: string;
    /**
      The title of the camera permission dialog.
      @defaultValue "Camera permission denied!";
      */
    cameraPermissionEnableCameraTitle: string;
    /**
      The explanation text of the camera permission dialog.
      @defaultValue "Please allow the usage of the camera to start the scanning process.";
      */
    cameraPermissionEnableCameraExplanation: string;
    /**
      The 'enable' button title of the camera permission dialog.
      @defaultValue "Grant permission";
      */
    cameraPermissionEnableCameraButton: string;
    /**
      The 'close' button title of the camera permission dialog.
      @defaultValue "Close";
      */
    cameraPermissionCloseButton: string;
    /**
      The accessibility hint for the 'enable' button of the camera permission dialog.
      @defaultValue "Tap to grant camera permission";
      */
    accessibilityDescriptionCameraPermissionEnableCameraButton: string;
    /**
      The accessibility hint for the 'close' button of the camera permission dialog.
      @defaultValue "Close screen without granting permission";
      */
    accessibilityDescriptionCameraPermissionCloseButton: string;
    /**
      The accessibility hint for the 'select camera' button, located in the top bar of the camera screen.
      @defaultValue "Tap to open camera selection menu";
      */
    accessibilityDescriptionCameraSelectButton: string;
    /**
      The accessibility hint for the 'select camera' menu item, accessed via the top bar button on the camera screen.
      @defaultValue "Tap to select camera";
      */
    accessibilityDescriptionCameraSelectMenuItem: string;
    /**
      The title of the camera selection menu.
      @defaultValue "Select camera";
      */
    cameraSelectCameraMenuTitle: string;
    /** @param source {@displayType `DeepPartial<BarcodeTextLocalization>`} */
    constructor(source?: DeepPartial<BarcodeTextLocalization>);
}
