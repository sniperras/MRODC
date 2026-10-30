import React from "react";
declare class Props {
    /** If anchor is null, the menu is closed. */
    anchor: HTMLElement | null;
    onClose: () => void;
    /** The id of the element that opens the menu. */
    ariaLabelledBy: string;
    backgroundColor: string;
    /**
     * It is important that items is an array of <MenuItem> JSX elements.
     * Otherwise, the keyboard navigation of the menu will not work correctly.
     */
    children: React.ReactNode[];
    minWidth: string;
    /** Caps the menu paper's width so long entries (e.g. camera names) are ellipsized instead of
     * growing the menu past its intended size - important for WCAG text spacing, where wider text
     * would otherwise force the paper wider rather than truncating. */
    maxWidth: string;
}
export declare function StyledMenu(props: Props): React.JSX.Element;
export {};
