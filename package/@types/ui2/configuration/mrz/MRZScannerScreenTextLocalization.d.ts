import type { DeepPartial } from "../utils";
/**
Configuration of the all strings for MRZ scanner screen.
*/
export declare class MrzScannerScreenTextLocalization {
    /**
      Title for the top bar.
      @defaultValue "MRZ Scanner";
      */
    topBarTitle: string;
    /**
      Cancel button text for the top bar.
      @defaultValue "Cancel";
      */
    topBarCancelButton: string;
    /**
      Text for the top user guidance caption.
      @defaultValue "Scan your Identity Document";
      */
    topUserGuidance: string;
    /**
      Text for the user guidance caption below the finder view.
      @defaultValue "Scan the MRZ";
      */
    finderViewUserGuidance: string;
    /**
      Title for the introduction screen.
      @defaultValue "How to scan an MRZ";
      */
    introScreenTitle: string;
    /**
      Start scanning button text for the introduction screen.
      @defaultValue "Start Scanning";
      */
    introScreenDoneButton: string;
    /**
      The text explanation for the introduction screen.
      @defaultValue "The Machine Readable Zone (MRZ) is a special code on your ID document (such as a passport or ID card) that contains your personal information in a machine-readable format.\n\nTo scan it, simply hold your camera over the document, so that it aligns with the MRZ section. Once scanned, the data will be automatically processed, and you will be directed to the results screen.\n\nPress 'Start Scanning' to begin.";
      */
    introScreenText: string;
    /**
      Caption for the success overlay.
      @defaultValue "Scanned successfully";
      */
    completionOverlaySuccessMessage: string;
    /**
      Accessibility description for the 'open introduction screen' button in top bar.
      @defaultValue "Open introduction screen.";
      */
    accessibilityDescriptionOpenIntroScreenButton: string;
    /**
      Accessibility description for the 'done'/'start scanning' button in the introduction screen.
      @defaultValue "Start scanning";
      */
    accessibilityDescriptionIntroScreenDoneButton: string;
    /**
      Accessibility description for the 'cancel' button in the top bar.
      @defaultValue "Cancel";
      */
    accessibilityDescriptionCancelButton: string;
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
    /** @param source {@displayType `DeepPartial<MrzScannerScreenTextLocalization>`} */
    constructor(source?: DeepPartial<MrzScannerScreenTextLocalization>);
}
