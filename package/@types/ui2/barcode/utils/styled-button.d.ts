import React from "react";
import { ButtonConfiguration } from "../../configuration";
export interface ButtonProps extends Omit<ButtonConfiguration, "accessibilityDescription"> {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    icon?: React.ReactNode;
    debugName?: string;
    disabled?: boolean;
    id?: string;
    ariaLabel?: string;
    /** Set when this button toggles an attached popup/list (e.g. a dropdown menu), reflecting its open state. */
    ariaExpanded?: boolean;
    iconPosition?: 'left' | 'right';
    styleOverrides?: React.CSSProperties;
    buttonWidth?: number | string;
}
export declare function StyledButton(props: ButtonProps): React.JSX.Element;
