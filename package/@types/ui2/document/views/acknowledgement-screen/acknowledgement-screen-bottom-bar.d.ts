import React from "react";
import { AcknowledgementToolbar } from "../../../configuration/document/AcknowledgementScreenConfiguration";
import { BarButtonConfiguration } from "../../../configuration/common/Common";
declare class Props {
    isQualityAcceptable: boolean | null;
    backgroundColor: string;
    config: AcknowledgementToolbar;
    useAnywayButton: BarButtonConfiguration;
    onRetake: () => void;
    onAccept: () => void;
    isLandscape?: boolean;
}
export declare const BarHeight = 78;
export declare const LandscapeBarWidth = 78;
export declare function AcknowledgementScreenBottomBar(props: Props): React.JSX.Element;
export {};
