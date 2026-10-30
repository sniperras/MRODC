import { CameraFacingMode, CameraInfo } from "../../model/camera-info";
export interface IScannerCommon {
    switchCamera(deviceId: string, mirrored?: boolean): void;
    fetchAvailableCameras(): Promise<CameraInfo[]>;
    getActiveCameraInfo(): CameraInfo | undefined;
    setTorchState(state: boolean): Promise<void>;
    setFacingMode(mode: CameraFacingMode): Promise<void>;
    dispose(): void;
    getCapabilities(): MediaTrackCapabilities | undefined;
    setZoom(zoom: number): void;
}
