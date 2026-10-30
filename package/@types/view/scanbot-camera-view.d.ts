/// <reference types="webrtc" />
import React from "react";
import VideoStream from "../utils/video-stream";
import { Size } from "../utils/dto/Size";
import { Frame } from "../utils/dto/Frame";
import { CameraFacingMode, CameraInfo } from "../model/camera-info";
import { ScannerConfiguration } from "../model/configuration/scanner-configuration";
import { VideoToImageData } from "../utils/video-to-image-data/video-to-image-data";
import type { Image } from "../core-types";
export interface ScanbotCameraViewProps {
    configuration?: ScannerConfiguration;
    videoConstraints: MediaTrackConstraints;
    mirrored: boolean;
    onReady: () => void;
    onError: (err: Error) => void;
    preferredCamera?: string;
    zoom?: number;
}
export interface ScanbotCameraViewState {
    facingMode: CameraFacingMode;
    mirrored: boolean;
    deviceId: string;
}
export default class ScanbotCameraView extends React.Component<ScanbotCameraViewProps, ScanbotCameraViewState> {
    video: HTMLVideoElement | null;
    videoStream: VideoStream | null;
    canvas: VideoToImageData | null;
    videoLoaded: boolean;
    reloadCanvas: boolean;
    swapCameraEnabled: boolean;
    private activeCamera;
    didLoadVideo: any;
    finderFrame: Frame;
    constructor(props: any);
    nativeFacingModeToType(native: string | string[] | ConstrainStringParameters): CameraFacingMode;
    videoSize(): {
        width: number;
        height: number;
    };
    save: boolean;
    saveExtractedData(): void;
    zoom(): number;
    get previewMode(): "FIT_IN" | "FILL_IN";
    get fitPreview(): boolean;
    /**
     * Returns the rectangle (in CSS pixels, relative to the video element) that the actual
     * video content occupies when `previewMode === "FIT_IN"` (object-fit: contain).
     * Black-bar areas on each side are excluded.
     * Returns `undefined` when not in FIT_IN mode, the video is not yet loaded, or dimensions
     * are not yet available.
     */
    fitInVideoFrame(): Frame | undefined;
    /**
     * Returns the effective reference frame to use for overlay polygon mapping.
     *
     * The overlay maps image pixel coordinates to CSS coordinates using:
     *   dest = image * (frame.size / imageSize) + frame.origin
     * so `frame.origin` must match the CSS position of image pixel (0,0) and `frame.size`
     * must scale proportionally to the image dimensions.
     *
     * In FILL_IN mode this is just `holeRect` (unchanged).
     * In FIT_IN mode the viewfinder may extend into the black-bar area. Because
     * `createImageData` clamps the extraction to the actual video content, the image
     * origin no longer aligns with `holeRect.origin`. The correct frame is therefore
     * the intersection of `holeRect` with the video content area.
     * When there is no viewfinder in FIT_IN mode, the full video content frame is used.
     */
    effectiveOverlayFrame(holeRect?: Frame): Frame | undefined;
    private capture?;
    private imageCapture;
    private _reusableImageBuffer;
    /**
     * If set and the provided buffer has the correct size, `createImageData` will write the ImageData into this buffer.
     *  Otherwise, `createImageData` will create a new Buffer.
     **/
    set reusableImageBuffer(image: Image);
    createImageData(maxLargerLength?: number, useImageCaptureAPI?: boolean): Promise<ImageData>;
    windowSize(): Frame;
    /**
     * The max size of the video frame that will be extracted from the video stream.
     * e.g. the DOMRect of the container is 390x844, and the video is 1920x1080,
     * scales 390x844 up to 499x1080, as that's the max size that fits into the video.
     */
    calculateClientVideoConstraints(): {
        clientVideoWidth: number;
        clientVideoHeight: number;
        coef: number;
    };
    calculateFrameSize(maxLargerLength: number, videoWidth: number, videoHeight: number): Size;
    getCanvasRenderingContext(): VideoToImageData;
    releaseCanvas(): void;
    componentWillUnmount(): void;
    onStreamChanged: (stream: MediaStream) => void;
    style(): React.CSSProperties;
    zoomMargin(): number;
    render(): React.JSX.Element;
    updateConfiguration(props: {
        deviceId?: string;
        mode: CameraFacingMode;
    }): void;
    setFacingMode(mode: CameraFacingMode): Promise<void>;
    switchCamera(deviceId: string, mirrored?: boolean, mode?: CameraFacingMode): Promise<void>;
    getActiveCameraInfo(): CameraInfo | undefined;
    setTorchState(enabled: boolean): Promise<void>;
}
