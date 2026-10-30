import React from "react";
import { CameraInfo } from "../../../../model/camera-info";
import { SelectCameraMenu } from "../../../configuration/common/SelectCameraMenu";
export declare class CameraSelectConfig {
    availableCameras: CameraInfo[];
    activeCamera: CameraInfo;
    onSelect: (camera: CameraInfo) => Promise<void>;
}
declare class Props {
    config: SelectCameraMenu;
    cameraSelectConfig: CameraSelectConfig;
}
export declare function CameraSelectDropdown(props: Props): React.JSX.Element;
export {};
