import React from "react";
import { ZoomOverlay } from "../../configuration/document/ReviewScreenConfiguration";
import { SBPage } from "../model/sb-page";
declare class Props {
    open: boolean;
    page: SBPage;
    config: ZoomOverlay;
    onCloseButtonClick: () => void;
}
export declare function ZoomDialog(props: Props): React.JSX.Element;
export {};
