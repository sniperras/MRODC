import React from "react";
declare class Props {
    children: React.ReactNode;
    ariaLabel: string;
    onClick: () => void;
    textColor: string;
    /** Take focus when the menu opens. Should be true for exactly one item in the menu. */
    autoFocus: boolean;
    disabled: boolean;
    /** Marks this item as the currently selected one, exposed to assistive technology via `aria-selected`. */
    selected?: boolean;
    /** Renders as a `data-sb-button-${debugName}` attribute, matching the BarButton/StyledButton convention. */
    debugName?: string;
}
export declare function StyledMenuItem(props: Props): React.JSX.Element;
export {};
