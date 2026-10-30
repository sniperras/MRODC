import React from "react";
import { Image } from "../../core-types";
export interface BrushCanvasProps {
    imageSrc: string;
    brushSize: number;
    brushColor: string;
    padding: number;
    onPinchStart?: () => void;
    onPinchEnd?: () => void;
    onStrokeCompleted?: () => void;
}
export interface BrushCanvasState {
    offsetLeft: number;
    offsetTop: number;
    scale: number;
    tx: number;
    ty: number;
}
/**
 * Renders the image, committed-strokes canvas, and stroke canvas inside a
 * pinch-zoomable container. Single-pointer interactions draw brush strokes;
 * two-pointer interactions zoom and pan.
 */
export declare class BrushCanvas extends React.Component<BrushCanvasProps, BrushCanvasState> {
    private imageRef;
    private canvasRef;
    private strokeCanvasRef;
    private zoomRootRef;
    private currentStrokePoints;
    private isDrawing;
    private activePointers;
    private pinchStart;
    private static readonly MAX_SCALE;
    constructor(props: BrushCanvasProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onWheel;
    updateCanvasSize(): void;
    private onImageLoaded;
    /**
     * Clears the stroke canvas and redraws the entire current stroke as one
     * continuous path, ensuring uniform opacity regardless of pointer speed.
     */
    private redrawCurrentStroke;
    /**
     * Converts a pointer event position to canvas pixel coordinates, accounting
     * for the current CSS zoom scale applied to the canvas element.
     */
    private getCanvasPoint;
    private commitStroke;
    private abortStroke;
    private startPinch;
    private updatePinch;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    clearCanvas(): void;
    /**
     * Converts the current canvas brush strokes into a full-resolution mask Image
     * by scaling the displayed canvas up to the original image dimensions.
     */
    buildMaskImage(): Image;
    render(): React.JSX.Element;
}
