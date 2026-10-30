export type CameraFacingMode = 'environment' | 'user' | 'unknown';
export interface CameraInfo {
    deviceId: string;
    label: string;
    maxNumPixels: number | undefined;
    supportsTorchControl: boolean | undefined;
    facingMode: CameraFacingMode;
}
