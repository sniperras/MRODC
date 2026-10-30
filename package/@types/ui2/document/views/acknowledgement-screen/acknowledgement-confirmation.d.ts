import React from "react";
import { AcknowledgementToolbar } from "../../../configuration/document/AcknowledgementScreenConfiguration";
import { AcknowledgementWarning } from "../../controller/acknowledgment-screen-controller";
declare class Props {
    visible: boolean;
    isQualityAcceptable: boolean | null;
    base64Image: string | null;
    bottomBar: {
        backgroundColor: string;
        config: AcknowledgementToolbar;
        onRetake: () => void;
        onAccept: () => void;
    };
    warning: AcknowledgementWarning;
    isLandscape?: boolean;
}
export declare function AcknowledgementConfirmation(props: Props): React.JSX.Element;
export {};
