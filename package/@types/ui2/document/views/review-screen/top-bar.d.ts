import React from 'react';
import { DocumentScanningFlow } from "../../../configuration/document/DocumentScanningFlow";
declare class Props {
    config: DocumentScanningFlow;
    numPages: number;
    onCloseButtonClick: () => void;
    buttonsEnabled: boolean;
    style?: React.CSSProperties;
    isLandscape?: boolean;
    onSubmitClick?: () => void;
}
export declare function TopBar(props: Props): React.JSX.Element;
export {};
