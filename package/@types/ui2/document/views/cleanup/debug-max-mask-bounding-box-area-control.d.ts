import React from "react";
interface Props {
    /** Current value of engineConfiguration.maxMaskBoundingBoxArea. */
    value: number;
    /** Called (on slider release) with the new maxMaskBoundingBoxArea value. */
    onChange: (value: number) => void;
    /** Whether the popover is open. Controlled by the parent so it can coordinate with its own focus trap. */
    open: boolean;
    /** Called with `true` when the FAB is clicked, and `false` when the popover requests to close. */
    onOpenChange: (open: boolean) => void;
    /** Called once the popover's closing transition has fully finished. */
    onExited?: () => void;
    /**
     * The DOM node this popover's Modal should scope its background aria-hiding/portal to, instead
     * of the default `document.body`. See AlertDialog for the same pattern/rationale: without this,
     * MUI would aria-hide the screen's own FocusTrap-wrapped container while it still holds focus,
     * causing a "Maximum call stack size exceeded" infinite loop between the two focus traps.
     */
    container?: HTMLElement | null;
}
/**
 * DEBUG-ONLY control (not part of the shippable configuration): a floating action button, fixed
 * to the bottom-right of the viewport (independent of the toolbar layout), that opens a popover
 * slider to live-tune engineConfiguration.maxMaskBoundingBoxArea - to test/reproduce the
 * ERROR_MASK_TOO_LARGE cleanup status without editing code.
 *
 * Fully self-contained - remove/comment out its single usage in CleanupScreenController to disable it.
 */
export declare function DebugMaxMaskBoundingBoxAreaControl(props: Props): React.JSX.Element;
export {};
