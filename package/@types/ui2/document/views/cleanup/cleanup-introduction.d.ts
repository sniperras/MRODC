import React from "react";
import { DocumentCleanupIntroductionScreenConfiguration } from "../../../configuration/document/DocumentCleanupScreenConfiguration";
type Props = {
    config: DocumentCleanupIntroductionScreenConfiguration;
    isOpen: boolean;
    onClose: () => void;
    onExited?: () => void;
    container?: HTMLElement | null;
};
export declare function CleanupIntroduction(props: Props): React.JSX.Element;
export {};
