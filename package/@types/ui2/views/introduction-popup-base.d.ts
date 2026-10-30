import React from "react";
type Props = {
    backgroundColor: string;
    isOpen: boolean;
    onClose: () => void;
    /**
     * Called once the dialog's closing transition has fully finished and it has been removed from the DOM.
     * Useful for deferring re-enabling any outer focus trap until MUI has cleaned up the `aria-hidden`
     * attributes it applies to background content while this dialog is open/closing — reacting to `isOpen`
     * alone would re-grab focus into still-`aria-hidden` content and trigger a browser warning.
     */
    onExited?: () => void;
    /**
     * The DOM node this dialog's Modal should scope its background aria-hiding/portal to, instead of
     * the default `document.body`. Pass the surrounding screen's own focus-trapped container here so
     * that container is never itself treated as an aria-hidden "sibling" while the dialog is open.
     */
    container?: HTMLElement | null;
    children?: React.ReactNode;
};
export declare function IntroductionPopupBase(props: Props): React.JSX.Element;
export {};
