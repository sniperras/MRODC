import { ScanbotAlertDialog } from "../../../configuration/common/ScanbotAlertDialog";
import React from "react";
declare class Props {
    config: ScanbotAlertDialog;
    open: boolean;
    onCancelClick: () => void;
    onOkClick: () => void;
    onActionClick?: () => void;
    onExited?: () => void;
    /**
     * The DOM node this dialog's Modal should scope its background aria-hiding/portal to, instead of
     * the default `document.body`. Pass the surrounding screen's own focus-trapped container here so
     * that container is never itself treated as an aria-hidden "sibling" while the dialog is open.
     */
    container?: HTMLElement | null;
}
export declare function AlertDialog(props: Props): React.JSX.Element;
export {};
