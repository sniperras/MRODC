import React from "react";
import type { CameraPermissionScreen } from "../../configuration/common/CameraPermission";
import { NavigationBarSize } from "../../document/views/camera-screen/top-bar";
interface Props {
    visible: boolean;
    onCloseClick: () => void;
    config: CameraPermissionScreen;
    navigationBarSize: NavigationBarSize;
}
export declare function CameraPermissionDenied(props: Props): React.JSX.Element;
export {};
