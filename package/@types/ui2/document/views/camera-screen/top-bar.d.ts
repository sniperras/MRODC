import React from "react";
import { ButtonConfiguration, IconButton, StyledText } from "../../../configuration/common/Common";
import { TopBarMode } from "../../../configuration/common/TopBarConfiguration";
import { CameraSelectConfig } from "./camera-select-dropdown";
import { SelectCameraMenu } from "../../../configuration/common/SelectCameraMenu";
export declare class NavigationBarSize {
    height: number;
    remainingVisibleBodyHeight: string;
    minTopPaddingForContent: number;
    minTopPaddingForViewFinder: number;
}
declare class Props {
    title: StyledText;
    backgroundColor: string;
    backButton: ButtonConfiguration;
    introButton?: IconButton;
    cameraSelectConfig: SelectCameraMenu;
    onCloseButtonClick: () => void;
    onShowIntroButtonClick: () => void;
    cameraConfig: CameraSelectConfig;
    isCancelDisabled: boolean;
    mode: TopBarMode;
    onSizeCalculated?: (size: NavigationBarSize) => void;
    isLandscape?: boolean;
    /** When set, the bar is narrowed by this amount (e.g. a sidebar's width) so its content
     * (title, buttons) stays within the remaining space instead of being covered by the sidebar. */
    reservedRightWidth?: string;
    /** Forces the bar to overlay the content (like GRADIENT mode does) regardless of `mode`, and reports
     * the reserved height via `minTopPaddingForContent`/`remainingVisibleBodyHeight` accordingly. Used when
     * a sibling element (e.g. a results sidebar) needs to span the full height starting at y=0, so the bar
     * can't reserve its own row in normal document flow (that would only push down the content it directly
     * precedes, leaving a gap above anything positioned beside it, like a sidebar). */
    alwaysOverlay?: boolean;
}
export declare function TopBar(props: Props): React.JSX.Element;
export {};
