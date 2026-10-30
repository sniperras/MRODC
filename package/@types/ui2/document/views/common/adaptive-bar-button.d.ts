import React from "react";
import { AdaptiveBarButtonConfiguration } from "../../../configuration/common/Common";
declare class Props {
    config: AdaptiveBarButtonConfiguration;
    /** 'bar' renders the button inline on the tool bar, 'popup' renders it as an item in the 'more' popup menu. */
    variant: "bar" | "popup";
    icon: (props: {
        color: string;
    }) => React.JSX.Element;
    onClick: () => void;
    enabled: boolean;
    debugName: string;
    /** Only relevant for the 'popup' variant. Take focus when the menu opens. */
    autoFocus?: boolean;
}
/**
 * Renders an AdaptiveBarButtonConfiguration either as a bar button or as a popup menu item,
 * depending on the requested variant. The button's visibility is fully controlled by
 * `config.barButton.visible`, regardless of which variant is rendered.
 */
export declare function AdaptiveBarButton(props: Props): React.JSX.Element;
export {};
