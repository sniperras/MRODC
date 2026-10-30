import type { DeepPartial } from "../utils";
/**
Configuration of all the strings for the standalone cropping screen.
*/
export declare class DocumentScannerTextLocalization {
    /**
      The 'cancel' button title, located in the top bar of the camera screen and the reorder pages screen.
      @defaultValue "Cancel";
      */
    cameraTopBarCancelButtonTitle: string;
    /**
      The title of the camera screen, located in the top bar.
      @defaultValue "Scan Document";
      */
    cameraTopBarTitle: string;
    /**
      The text for the static user guidance, located just below the top bar of the camera screen.
      @defaultValue "Scan each page of your document.";
      */
    cameraTopGuidance: string;
    /**
      The user guidance text that is initially displayed, before a document is detected.
      @defaultValue "Please hold your device over a document.";
      */
    cameraUserGuidanceStart: string;
    /**
      The user guidance text displayed when no document is found.
      @defaultValue "No document found";
      */
    cameraUserGuidanceNoDocumentFound: string;
    /**
      The user guidance text displayed when a document is found but borders are outside the image.
      @defaultValue "Document already cropped. Move camera to fit document in the frame.";
      */
    cameraUserGuidanceAlreadyCropped: string;
    /**
      The user guidance text displayed a detected documents aspect ratio is not within the acceptable range.
      @defaultValue "Bad aspect ratio";
      */
    cameraUserGuidanceBadAspectRatio: string;
    /**
      The user guidance text displayed when a landscape document is detected when the camera is in portrait mode (and vice versa).
      @defaultValue "Orientation mismatch";
      */
    cameraUserGuidanceOrientationMismatch: string;
    /**
      The user guidance text displayed when the document pitch/skew angle is unacceptable.
      @defaultValue "Bad angles";
      */
    cameraUserGuidanceBadAngles: string;
    /**
      The user guidance text displayed when the background is too noisy.
      @defaultValue "Its too noisy. Try another background for the document";
      */
    cameraUserGuidanceTooNoisy: string;
    /**
      The user guidance text displayed when the document is not centered in the finder view.
      @defaultValue "Document is off center";
      */
    cameraUserGuidanceTextHintOffCenter: string;
    /**
      The user guidance text displayed when the document is too far from camera.
      @defaultValue "Document is too small. Move camera closer.";
      */
    cameraUserGuidanceTooSmall: string;
    /**
      The user guidance text displayed when it is too dark to capture an adequate image.
      @defaultValue "Its too dark. Add more light.";
      */
    cameraUserGuidanceTooDark: string;
    /**
      The user guidance text displayed when the device is in energy saving mode. iOS only.
      @defaultValue "Energy save mode is on";
      */
    cameraUserGuidanceEnergySaveMode: string;
    /**
      The user guidance text displayed when the document is ready to be captured in 'auto snapping' mode.
      @defaultValue "Hold still capturing...";
      */
    cameraUserGuidanceReadyToCapture: string;
    /**
      The user guidance text displayed when the document is ready to be captured in 'manual snapping' mode.
      @defaultValue "Ready to capture!";
      */
    cameraUserGuidanceReadyToCaptureManual: string;
    /**
      The 'import image' button title, located in the toolbar of the camera screen.
      @defaultValue "Import";
      */
    cameraImportButtonTitle: string;
    /**
      The 'flashlight on' button title, located in the toolbar of the camera screen.
      @defaultValue "On";
      */
    cameraTorchOnButtonTitle: string;
    /**
      The 'flashlight off' button title, located in the toolbar of the camera screen.
      @defaultValue "Off";
      */
    cameraTorchOffButtonTitle: string;
    /**
      The 'auto snapping' mode button title, located in the toolbar of the camera screen.
      @defaultValue "Auto";
      */
    cameraAutoSnapButtonTitle: string;
    /**
      The 'manual snapping' mode button title, located in the toolbar of the camera screen.
      @defaultValue "Manual";
      */
    cameraManualSnapButtonTitle: string;
    /**
      The 'preview' button title, located in the toolbar of the camera screen. '%d' denotes the total number of captured pages.
      @defaultValue "%d Pages";
      */
    cameraPreviewButtonTitle: string;
    /**
      The 'preview' button title, located in the toolbar of the camera screen. With the badge showing the number of captured pages.
      @defaultValue "Submit";
      */
    cameraBadgedPreviewButtonTitle: string;
    /**
      The 'done' button title of the introduction screen, located in the top bar.
      @defaultValue "Done";
      */
    cameraIntroDoneButton: string;
    /**
      The title of the introduction screen, located in the top bar.
      @defaultValue "How to scan a document";
      */
    cameraIntroTitle: string;
    /**
      The subtitle of the introduction screen.
      @defaultValue "Follow the steps below to create a high-quality document scan";
      */
    cameraIntroSubtitle: string;
    /**
      The first scanning step text of the introduction screen.
      @defaultValue "1. Place your document on a flat surface.";
      */
    cameraIntroItem1: string;
    /**
      The second scanning step text of the introduction screen.
      @defaultValue "2. Hold your phone above the document.";
      */
    cameraIntroItem2: string;
    /**
      The third scanning step text of the introduction screen.
      @defaultValue "3. Follow the on-screen guidance to find the optimal position.";
      */
    cameraIntroItem3: string;
    /**
      The fourth scanning step text of the introduction screen.
      @defaultValue "4. Once you reach the optimal position, you can manually scan the document or let the app scan it automatically.";
      */
    cameraIntroItem4: string;
    /**
      The title of the cancel camera screen alert dialog.
      @defaultValue "Cancel?";
      */
    cameraCancelAlertTitle: string;
    /**
      The subtitle of the cancel camera screen alert dialog.
      @defaultValue "Canceling will delete all the pages scanned so far. Are you sure you want to cancel?";
      */
    cameraCancelAlertSubtitle: string;
    /**
      The 'no' button title of the cancel camera screen alert dialog.
      @defaultValue "No";
      */
    cameraCancelNoButtonTitle: string;
    /**
      The 'yes' button title of the cancel camera screen alert dialog.
      @defaultValue "Yes, Cancel";
      */
    cameraCancelYesButtonTitle: string;
    /**
      The title of the page limit reached alert dialog.
      @defaultValue "You reached the limit!";
      */
    cameraLimitReachedAlertTitle: string;
    /**
      The subtitle of the page limit reached alert dialog.
      @defaultValue "You have scanned the maximum number of pages and cannot add any more. Please delete at least one page to perform a new scan.";
      */
    cameraLimitReachedAlertSubtitle: string;
    /**
      The 'OK' button title of the page limit reached alert dialog.
      @defaultValue "Ok";
      */
    cameraLimitReachedOkButtonTitle: string;
    /**
      The 'retake' button title of the acknowledgement screen.
      @defaultValue "Retake";
      */
    acknowledgementRetakeButtonTitle: string;
    /**
      The 'accept' button title of the acknowledgement screen.
      @defaultValue "Use Scan";
      */
    acknowledgementAcceptButtonTitle: string;
    /**
      The proceed anyway button title when document is not found.
      @defaultValue "Use Scan";
      */
    proceedAnywayButtonDocumentNotFound: string;
    /**
      The proceed anyway button title when document quality is unacceptable.
      @defaultValue "Use Scan";
      */
    proceedAnywayButtonUnacceptableQuality: string;
    /**
      The proceed anyway button title when document quality is uncertain.
      @defaultValue "Use Scan";
      */
    proceedAnywayButtonUncertainQuality: string;
    /**
      The warning text when document is not found.
      @defaultValue "No document detected. Continue or retake.";
      */
    acknowledgementWarningDocumentNotFound: string;
    /**
      The warning text when document quality is unacceptable.
      @defaultValue "Scan quality too low.";
      */
    acknowledgementWarningUnacceptableQuality: string;
    /**
      The warning text when document quality is uncertain.
      @defaultValue "Scan quality unclear. Continue or retake.";
      */
    acknowledgementWarningUncertainQuality: string;
    /**
      The title of the review screen, located in the top bar. '%d' denotes the total number of captured pages.
      @defaultValue "Review (%d)";
      */
    reviewScreenTitle: string;
    /**
      The 'back' button title, located in the top bar of the review screen.
      @defaultValue "Back";
      */
    reviewTopBarBackButtonTitle: string;
    /**
      The page count label text. The first occurrence of '%d' denotes the current page number, while the second occurrence of '%d' denotes the total number of captured pages.
      @defaultValue "Page %d/%d";
      */
    reviewScreenPageCount: string;
    /**
      The 'add' button title, located in the toolbar of the review screen.
      @defaultValue "Add";
      */
    reviewScreenAddButtonTitle: string;
    /**
      The 'retake' button title, located in the toolbar of the review screen.
      @defaultValue "Retake";
      */
    reviewScreenRetakeButtonTitle: string;
    /**
      The 'crop' button title, located in the toolbar of the review screen.
      @defaultValue "Crop";
      */
    reviewScreenCropButtonTitle: string;
    /**
      The 'rotate' button title, located in the toolbar of the review screen.
      @defaultValue "Rotate";
      */
    reviewScreenRotateButtonTitle: string;
    /**
      The 'cleanup' button title, located in the toolbar of the review screen.
      @defaultValue "Cleanup";
      */
    reviewScreenDocumentCleanupButtonTitle: string;
    /**
      The 'delete' button title, located in the toolbar of the review screen.
      @defaultValue "Delete";
      */
    reviewScreenDeleteButtonTitle: string;
    /**
      The 'submit' button title, located in the toolbar of the review screen.
      @defaultValue "Submit";
      */
    reviewScreenSubmitButtonTitle: string;
    /**
      The 'More' button title, located in the toolbar of the review screen.
      @defaultValue "More";
      */
    reviewScreenMoreButtonTitle: string;
    /**
      The 'delete all' menu button title, accessed via the 'more' button of the review screen.
      @defaultValue "Delete all";
      */
    reviewScreenDeleteAllButtonTitle: string;
    /**
      The 'reorder pages' menu button title, located in the toolbar of the review screen.
      @defaultValue "Reorder";
      */
    reviewScreenReorderPagesButtonTitle: string;
    /**
      The 'reorder pages' popup menu button title, accessed via the 'more' button of the review screen.
      @defaultValue "Reorder pages";
      */
    reviewScreenPopupReorderPagesButtonTitle: string;
    /**
      The 'close' button title of the zoom overlay for the review screen.
      @defaultValue "Close";
      */
    zoomOverlayCancelButtonText: string;
    /**
      The title of the delete page alert dialog for the review screen.
      @defaultValue "Delete page?";
      */
    reviewDeletePageAlertTitle: string;
    /**
      The title of the delete all pages alert dialog for the review screen.
      @defaultValue "Delete all?";
      */
    reviewDeleteAllPagesAlertTitle: string;
    /**
      The subtitle of the delete page alert dialog for the review screen.
      @defaultValue "Are you sure you want to delete the page?";
      */
    reviewDeletePageAlertSubTitle: string;
    /**
      The subtitle of the delete all pages alert dialog for the review screen.
      @defaultValue "Are you sure you want to delete all pages?";
      */
    reviewDeleteAllPagesAlertSubtitle: string;
    /**
      The 'confirm' button title of the delete page alert dialog for the review screen.
      @defaultValue "Yes, Delete";
      */
    reviewDeletePageAlertConfirmButtonTitle: string;
    /**
      The 'confirm' button title of the delete all pages alert dialog for the review screen.
      @defaultValue "Yes, Delete all";
      */
    reviewDeleteAllPagesAlertDeleteButtonTitle: string;
    /**
      The 'delete and retake' button title of the delete page alert dialog for the review screen.
      @defaultValue "Delete and Retake";
      */
    reviewDeletePageAlertDeleteRetakeButtonTitle: string;
    /**
      The 'cancel' button title of the delete page alert dialog for the review screen.
      @defaultValue "Cancel";
      */
    reviewDeletePageAlertCancelButtonTitle: string;
    /**
      The 'cancel' button title of the delete all pages alert dialog for the review screen.
      @defaultValue "Cancel";
      */
    reviewDeleteAllPagesAlertCancelButtonTitle: string;
    /**
      The title of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Re-cropping will erase your cleanup edits";
      */
    reviewReCroppingWarningAlertTitle: string;
    /**
      The body text of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Your cleanup edits will be permanently lost if you crop again. This can't be undone.";
      */
    reviewReCroppingWarningAlertSubtitle: string;
    /**
      The 'continue' button title of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Yes, Continue";
      */
    reviewReCroppingWarningAlertContinueButtonTitle: string;
    /**
      The 'cancel' button title of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Cancel";
      */
    reviewReCroppingWarningAlertCancelButtonTitle: string;
    /**
      The title of the reorder pages screen, located in the top bar.
      @defaultValue "Reorder Pages";
      */
    reorderPageTitle: string;
    /**
      The title of the acknowledgement screen, located in the top bar.
      @defaultValue "Acknowledgement";
      */
    acknowledgementTitle: string;
    /**
      The text for the static user guidance, located just below the top bar of the reorder pages screen.
      @defaultValue "Drag pages to reorder";
      */
    reorderPageGuidanceTitle: string;
    /**
      The title below each page object of the reorder pages screen. '%d' denotes the current page number.
      @defaultValue "%d";
      */
    reorderPageText: string;
    /**
      Accessibility description for page item in the grid on the reorder pages screen. Is appended with item index automatically as it is an item in list (grid).
      @defaultValue "Scanned page";
      */
    accessibilityDescriptionReorderPageGridItem: string;
    /**
      The 'confirm' button title, located in the top bar of the reorder pages screen.
      @defaultValue "Done";
      */
    reorderTopBarConfirmButtonTitle: string;
    /**
      The 'cancel' button title, located in the top bar of the reorder pages screen.
      @defaultValue "Cancel";
      */
    reorderTopBarCancelButtonTitle: string;
    /**
      The accessibility hint for the 'introduction' button, located in the top bar of the camera screen.
      @defaultValue "Tap to open introduction screen";
      */
    accessibilityDescriptionCameraTopBarIntroButton: string;
    /**
      The accessibility hint for the 'cancel' button, located in the top bar of the camera screen.
      @defaultValue "Tap to close scanner screen";
      */
    accessibilityDescriptionCameraTopBarCancelButton: string;
    /**
      The accessibility hint for the 'import image' button, located in the toolbar of the camera screen.
      @defaultValue "Tap to import image";
      */
    accessibilityDescriptionCameraImportButton: string;
    /**
      The accessibility hint for the 'flashlight on' button, located in the toolbar of the camera screen.
      @defaultValue "Tap to disable torch";
      */
    accessibilityDescriptionCameraTorchOnButton: string;
    /**
      The accessibility hint for the 'flashlight off' button, located in the toolbar of the camera screen.
      @defaultValue "Tap to enable torch";
      */
    accessibilityDescriptionCameraTorchOffButton: string;
    /**
      The accessibility hint for the 'shutter' button, located in the toolbar of the camera screen.
      @defaultValue "Tap to take image";
      */
    accessibilityDescriptionCameraShutterButton: string;
    /**
      The accessibility state announced when the 'shutter' button is in automatic scanning mode.
      @defaultValue "Automatic scanning mode";
      */
    accessibilityDescriptionShutterButtonAutomaticScanningMode: string;
    /**
      The accessibility state announced when the 'shutter' button is in manual scanning mode.
      @defaultValue "Manual scanning mode";
      */
    accessibilityDescriptionShutterButtonManualScanningMode: string;
    /**
      The accessibility state announced when the 'shutter' button is processing the scanned document.
      @defaultValue "Processing document";
      */
    accessibilityDescriptionShutterButtonProcessingDocument: string;
    /**
      The accessibility hint for the 'auto snapping' mode button, located in the toolbar of the camera screen.
      @defaultValue "Tap to enable manual snapping mode";
      */
    accessibilityDescriptionCameraAutoSnapButton: string;
    /**
      The accessibility hint for the 'manual snapping' mode button, located in the toolbar of the camera screen.
      @defaultValue "Tap to enable auto snapping mode";
      */
    accessibilityDescriptionCameraManualSnapButton: string;
    /**
      The accessibility hint for the 'preview' button, located in the toolbar of the camera screen.
      @defaultValue "Tap to preview %d scanned pages";
      */
    accessibilityDescriptionCameraPreviewButton: string;
    /**
      The accessibility hint for the 'done' button of the introduction screen.
      @defaultValue "Tap to close introduction screen";
      */
    accessibilityDescriptionCameraIntroDoneButton: string;
    /**
      The accessibility hint for the 'retake' button of the acknowledgement screen.
      @defaultValue "Tap to retake the image";
      */
    accessibilityDescriptionAcknowledgementRetakeButton: string;
    /**
      The accessibility hint for the 'accept' button of the acknowledgement screen.
      @defaultValue "Tap to accept the image regardless of its quality";
      */
    accessibilityDescriptionAcknowledgementAcceptButton: string;
    /**
      The accessibility hint for the 'proceed anyway' button when document is not found.
      @defaultValue "Tap to proceed with scan despite no document being found";
      */
    accessibilityDescriptionProceedAnywayButtonDocumentNotFound: string;
    /**
      The accessibility hint for the 'proceed anyway' button when document quality is unacceptable.
      @defaultValue "Tap to proceed with scan despite unacceptable quality";
      */
    accessibilityDescriptionProceedAnywayButtonUnacceptableQuality: string;
    /**
      The accessibility hint for the 'proceed anyway' button when document quality is uncertain.
      @defaultValue "Tap to proceed with scan despite uncertain quality";
      */
    accessibilityDescriptionProceedAnywayButtonUncertainQuality: string;
    /**
      The accessibility hint for the acknowledgement warning display.
      @defaultValue "Quality warning message";
      */
    accessibilityDescriptionAcknowledgementWarning: string;
    /**
      The accessibility hint for the acknowledgement warning when document is not found.
      @defaultValue "Warning No document found in the image";
      */
    accessibilityDescriptionAcknowledgementWarningDocumentNotFound: string;
    /**
      The accessibility hint for the acknowledgement warning when document quality is unacceptable.
      @defaultValue "Warning Document quality is unacceptable";
      */
    accessibilityDescriptionAcknowledgementWarningUnacceptableQuality: string;
    /**
      The accessibility hint for the acknowledgement warning when document quality is uncertain.
      @defaultValue "Warning Document quality is uncertain";
      */
    accessibilityDescriptionAcknowledgementWarningUncertainQuality: string;
    /**
      The accessibility hint for the 'confirm' button, located in the top bar of the reorder pages screen.
      @defaultValue "Tap to apply changes";
      */
    accessibilityDescriptionReorderTopBarConfirmButton: string;
    /**
      The accessibility hint for the 'cancel' button, located in the top bar of the reorder pages screen.
      @defaultValue "Tap to close screen without applying changes";
      */
    accessibilityDescriptionReorderTopBarCancelButton: string;
    /**
      The accessibility hint for the 'next page' button of the review screen.
      @defaultValue "Tap to switch to the new page";
      */
    accessibilityDescriptionReviewNextPageButton: string;
    /**
      The accessibility hint for the 'previous page' button of the review screen.
      @defaultValue "Tap to switch to the previous page";
      */
    accessibilityDescriptionReviewPreviousPageButton: string;
    /**
      The accessibility hint for the 'add' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Add new page";
      */
    accessibilityDescriptionReviewAddButton: string;
    /**
      The accessibility hint for the 'retake' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Retake current selected page";
      */
    accessibilityDescriptionReviewRetakeButton: string;
    /**
      The accessibility hint for the 'crop' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Crop selected page";
      */
    accessibilityDescriptionReviewCropButton: string;
    /**
      The accessibility hint for the 'rotate' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Rotate selected page clockwise";
      */
    accessibilityDescriptionReviewRotateButton: string;
    /**
      The accessibility hint for the 'cleanup' button, located in the toolbar of the review screen.
      @defaultValue "Tap to open 'Document Cleanup' screen for the selected page";
      */
    accessibilityDescriptionReviewDocumentCleanupButton: string;
    /**
      The accessibility hint for the 'delete' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Delete selected page";
      */
    accessibilityDescriptionReviewDeleteButton: string;
    /**
      The accessibility hint for the 'submit' button, located in the toolbar of the review screen.
      @defaultValue "Tap to Submit document";
      */
    accessibilityDescriptionReviewSubmitButton: string;
    /**
      The accessibility hint for the 'more' button, located in the toolbar of the review screen.
      @defaultValue "Tap to show additional options";
      */
    accessibilityDescriptionReviewMoreButton: string;
    /**
      The accessibility hint for the 'delete all' menu button, accessed via the 'more' button of the review screen.
      @defaultValue "Tap to Delete all pages";
      */
    accessibilityDescriptionReviewDeleteAllButton: string;
    /**
      The accessibility hint for the 'reorder pages' menu button, located in the toolbar of the review screen.
      @defaultValue "Tap to Reorder pages";
      */
    accessibilityDescriptionReviewReorderPagesButton: string;
    /**
      The accessibility hint for the 'close' button of the zoom overlay for the review screen.
      @defaultValue "Tap to Close zoom overlay";
      */
    accessibilityDescriptionZoomOverlayCancelButton: string;
    /**
      The accessibility hint for the 'zoom' button of the review screen.
      @defaultValue "Tap to open zoom overlay for selected page";
      */
    accessibilityDescriptionReviewZoomButton: string;
    /**
      The accessibility hint for the 'back' button, located in the top bar of the review screen.
      @defaultValue "Tap to Close review screen";
      */
    accessibilityDescriptionReviewTopBarBackButton: string;
    /**
      The accessibility hint for the 'confirm' button of the delete page alert dialog for the review screen.
      @defaultValue "Tap to Delete page";
      */
    accessibilityDescriptionReviewDeletePageAlertConfirmButton: string;
    /**
      The accessibility hint for the 'confirm' button of the delete all pages alert dialog for the review screen.
      @defaultValue "Tap to Delete all pages";
      */
    accessibilityDescriptionReviewDeleteAllPagesAlertDeleteButton: string;
    /**
      The accessibility hint for the 'delete and retake' button of the delete page alert dialog for the review screen.
      @defaultValue "Tap to Delete page and Retake it";
      */
    accessibilityDescriptionReviewDeletePageAlertDeleteRetakeButton: string;
    /**
      The accessibility hint for the 'cancel' button of the delete page alert dialog for the review screen.
      @defaultValue "Tap to Cancel operation";
      */
    accessibilityDescriptionReviewDeletePageAlertCancelButton: string;
    /**
      The accessibility hint for the 'cancel' button of the delete all pages alert dialog for the review screen.
      @defaultValue "Tap to Cancel operation";
      */
    accessibilityDescriptionReviewDeleteAllPagesAlertCancelButton: string;
    /**
      The accessibility hint for the 'continue' button of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Tap to continue and erase cleanup edits";
      */
    accessibilityDescriptionReviewReCroppingWarningAlertContinueButton: string;
    /**
      The accessibility hint for the 'cancel' button of the re-cropping warning alert dialog for the review screen.
      @defaultValue "Tap to cancel re-cropping";
      */
    accessibilityDescriptionReviewReCroppingWarningAlertCancelButton: string;
    /**
      The accessibility hint for the 'OK' button of the page limit reached alert dialog.
      @defaultValue "Tap to close alert dialog";
      */
    accessibilityDescriptionCameraLimitReachedOkButton: string;
    /**
      The accessibility hint for the 'yes' button of the cancel camera screen alert dialog.
      @defaultValue "Tap to cancel document";
      */
    accessibilityDescriptionCameraCancelYesButton: string;
    /**
      The accessibility hint for the 'no' button of the cancel camera screen alert dialog.
      @defaultValue "Tap to close alert dialog";
      */
    accessibilityDescriptionCameraCancelNoButton: string;
    /**
      The accessibility description for the preview document image on the review screen.
      @defaultValue "Captured Image, Page %d";
      */
    accessibilityDescriptionDocumentImagePreview: string;
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
    /**
      The 'cancel' button title, located in the top bar of the cropping screen.
      @defaultValue "Cancel";
      */
    croppingTopBarCancelButtonTitle: string;
    /**
      The 'confirm' button title, located in the top bar of the cropping screen.
      @defaultValue "Done";
      */
    croppingTopBarConfirmButtonTitle: string;
    /**
      The 'detect document' button title, located in the toolbar of the cropping screen.
      @defaultValue "Detect";
      */
    croppingDetectButtonTitle: string;
    /**
      The 'rotate page' button title, located in the toolbar of the cropping screen.
      @defaultValue "Rotate";
      */
    croppingRotateButtonTitle: string;
    /**
      The 'reset detection' button title, located in the toolbar of the cropping screen.
      @defaultValue "Reset";
      */
    croppingResetButtonTitle: string;
    /**
      The cropping screen title, located in the top bar.
      @defaultValue "Crop";
      */
    croppingScreenTitle: string;
    /**
      The accessibility hint for the 'confirm' button, located in the top bar of the cropping screen.
      @defaultValue "Tap to apply changes";
      */
    accessibilityDescriptionCroppingTopBarConfirmButton: string;
    /**
      The accessibility hint for the 'cancel' button, located in the top bar of the cropping screen.
      @defaultValue "Tap to close screen without applying changes";
      */
    accessibilityDescriptionCroppingTopBarCancelButton: string;
    /**
      The accessibility hint for the 'detect document' button, located in the toolbar of the cropping screen.
      @defaultValue "Tap to detect document on the image";
      */
    accessibilityDescriptionCroppingDetectButton: string;
    /**
      The accessibility hint for the 'rotate page' button, located in the toolbar of the cropping screen.
      @defaultValue "Tap to rotate document";
      */
    accessibilityDescriptionCroppingRotateButton: string;
    /**
      The accessibility hint for the 'reset detection' button, located in the toolbar of the cropping screen.
      @defaultValue "Tap to reset document contour to whole image";
      */
    accessibilityDescriptionCroppingResetButton: string;
    /**
      The 'confirm' button title, located in the top bar of the clean up screen.
      @defaultValue "Done";
      */
    documentCleanupTopBarConfirmButtonTitle: string;
    /**
      The 'cancel' button title, located in the top bar of the clean up screen.
      @defaultValue "Cancel";
      */
    documentCleanupTopBarCancelButtonTitle: string;
    /**
      The 'undo' button title, located in the toolbar of the clean up screen.
      @defaultValue "Undo";
      */
    documentCleanupUndoButtonTitle: string;
    /**
      The 'redo' button title, located in the toolbar of the clean up screen.
      @defaultValue "Redo";
      */
    documentCleanupRedoButtonTitle: string;
    /**
      The 'reset' button title, located in the toolbar of the clean up screen.
      @defaultValue "Reset";
      */
    documentCleanupResetButtonTitle: string;
    /**
      The caption displayed above the stroke-size slider of the clean up screen.
      @defaultValue "Stroke size";
      */
    documentCleanupStrokeSizeCaption: string;
    /**
      The title of the clean up screen, located in the top bar.
      @defaultValue "Cleanup";
      */
    documentCleanupScreenTitle: string;
    /**
      The title of the introduction screen for the clean up screen.
      @defaultValue "Clean your document";
      */
    documentCleanupIntroductionTitle: string;
    /**
      The title of the close button on the introduction screen for the clean up screen.
      @defaultValue "Got it";
      */
    documentCleanupIntroductionCloseButton: string;
    /**
      The title of the 'draw to erase' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Draw to Erase";
      */
    documentCleanupIntroductionDrawTitle: string;
    /**
      The content of the 'draw to erase' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Draw over highlights, stains, or scribbles to remove them.";
      */
    documentCleanupIntroductionDrawContent: string;
    /**
      The title of the 'pinch to zoom' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Pinch to Zoom";
      */
    documentCleanupIntroductionPinchTitle: string;
    /**
      The content of the 'pinch to zoom' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Zoom in for better control over small details.";
      */
    documentCleanupIntroductionPinchContent: string;
    /**
      The title of the 'move the page' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Move the page";
      */
    documentCleanupIntroductionMoveTitle: string;
    /**
      The content of the 'move the page' instruction item on the introduction screen for the clean up screen.
      @defaultValue "Drag with two fingers to inspect other areas.";
      */
    documentCleanupIntroductionMoveContent: string;
    /**
      The title of the reset all edits alert dialog for the clean up screen.
      @defaultValue "Reset all cleanup edits?";
      */
    documentCleanupResetAllEditsAlertTitle: string;
    /**
      The subtitle of the reset all edits alert dialog for the clean up screen.
      @defaultValue "All cleanup edits made in this session will be permanently removed.";
      */
    documentCleanupResetAllEditsAlertSubtitle: string;
    /**
      The 'reset' button title of the reset all edits alert dialog for the clean up screen.
      @defaultValue "Yes, Reset";
      */
    documentCleanupResetAllEditsAlertResetButtonTitle: string;
    /**
      The 'cancel' button title of the reset all edits alert dialog for the clean up screen.
      @defaultValue "Cancel";
      */
    documentCleanupResetAllEditsAlertCancelButtonTitle: string;
    /**
      The title of the discard changes alert dialog for the clean up screen.
      @defaultValue "Discard changes and cancel?";
      */
    documentCleanupDiscardChangesAlertTitle: string;
    /**
      The subtitle of the discard changes alert dialog for the clean up screen.
      @defaultValue "Your unsaved cleanup edits will be lost.";
      */
    documentCleanupDiscardChangesAlertSubtitle: string;
    /**
      The 'confirm' button title of the discard changes alert dialog for the clean up screen.
      @defaultValue "Yes, Cancel";
      */
    documentCleanupDiscardChangesAlertConfirmButtonTitle: string;
    /**
      The 'cancel' button title of the discard changes alert dialog for the clean up screen.
      @defaultValue "No";
      */
    documentCleanupDiscardChangesAlertCancelButtonTitle: string;
    /**
      The title of the alert dialog displayed when the erased stroke area is too large to process, for the clean up screen.
      @defaultValue "Area too large to clean up";
      */
    documentCleanupAreaTooLargeAlertTitle: string;
    /**
      The subtitle of the alert dialog displayed when the erased stroke area is too large to process, for the clean up screen.
      @defaultValue "This stroke covers too much of the image to process. Reduce your brush size and try again.";
      */
    documentCleanupAreaTooLargeAlertSubtitle: string;
    /**
      The button title of the alert dialog displayed when the erased stroke area is too large to process, for the clean up screen.
      @defaultValue "Got it";
      */
    documentCleanupAreaTooLargeAlertButtonTitle: string;
    /**
      The accessibility hint for the 'confirm' button, located in the top bar of the clean up screen.
      @defaultValue "Tap to apply changes";
      */
    accessibilityDescriptionDocumentCleanupTopBarConfirmButton: string;
    /**
      The accessibility hint for the 'cancel' button, located in the top bar of the clean up screen.
      @defaultValue "Tap to close screen without applying changes";
      */
    accessibilityDescriptionDocumentCleanupTopBarCancelButton: string;
    /**
      The accessibility hint for the 'undo' button, located in the toolbar of the clean up screen.
      @defaultValue "Tap to undo the latest cleanup stroke";
      */
    accessibilityDescriptionDocumentCleanupUndoButton: string;
    /**
      The accessibility hint for the 'redo' button, located in the toolbar of the clean up screen.
      @defaultValue "Tap to restore the latest reverted cleanup stroke";
      */
    accessibilityDescriptionDocumentCleanupRedoButton: string;
    /**
      The accessibility hint for the 'reset' button, located in the toolbar of the clean up screen.
      @defaultValue "Tap to reset the cleanup strokes and start over";
      */
    accessibilityDescriptionDocumentCleanupResetButton: string;
    /**
      The accessibility hint for the button that increases the stroke size, located next to the stroke-size slider.
      @defaultValue "Tap to increase the stroke size";
      */
    accessibilityDescriptionDocumentCleanupIncreaseStrokeSizeButton: string;
    /**
      The accessibility hint for the button that decreases the stroke size, located next to the stroke-size slider.
      @defaultValue "Tap to decrease the stroke size";
      */
    accessibilityDescriptionDocumentCleanupDecreaseStrokeSizeButton: string;
    /**
      The accessibility hint for the 'close' button on the introduction screen of the clean up screen.
      @defaultValue "Tap to close introduction screen";
      */
    accessibilityDescriptionDocumentCleanupIntroductionCloseButton: string;
    /**
      The accessibility hint for the 'reset' button of the reset all edits alert dialog for the clean up screen.
      @defaultValue "Tap to reset all cleanup edits";
      */
    accessibilityDescriptionDocumentCleanupResetAllEditsAlertResetButton: string;
    /**
      The accessibility hint for the 'cancel' button of the reset all edits alert dialog for the clean up screen.
      @defaultValue "Tap to cancel reset";
      */
    accessibilityDescriptionDocumentCleanupResetAllEditsAlertCancelButton: string;
    /**
      The accessibility hint for the 'confirm' button of the discard changes alert dialog for the clean up screen.
      @defaultValue "Tap to discard changes and cancel";
      */
    accessibilityDescriptionDocumentCleanupDiscardChangesAlertConfirmButton: string;
    /**
      The accessibility hint for the 'cancel' button of the discard changes alert dialog for the clean up screen.
      @defaultValue "Tap to keep editing";
      */
    accessibilityDescriptionDocumentCleanupDiscardChangesAlertCancelButton: string;
    /**
      The accessibility hint for the button of the alert dialog displayed when the erased stroke area is too large to process, for the clean up screen.
      @defaultValue "Tap to dismiss";
      */
    accessibilityDescriptionDocumentCleanupAreaTooLargeAlertButton: string;
    /** @param source {@displayType `DeepPartial<DocumentScannerTextLocalization>`} */
    constructor(source?: DeepPartial<DocumentScannerTextLocalization>);
}
