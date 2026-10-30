import React from "react";
import { DocumentCleanupStrokeSizeSlider } from "../../../configuration/document/DocumentCleanupScreenConfiguration";
interface Props {
    config: DocumentCleanupStrokeSizeSlider;
    value: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    isLandscape?: boolean;
}
export declare function StrokeSizeSlider({ config, value, onChange, disabled, isLandscape }: Props): React.JSX.Element;
export {};
