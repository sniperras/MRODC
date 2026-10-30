import React from "react";
import { Root } from "react-dom/client";
import type ScanbotSDK from "./scanbot-sdk";
import { DocumentCleanupViewConfiguration } from "./model/configuration/document-cleanup-view-configuration";
import { IDocumentCleanupViewHandle } from "./interfaces/i-document-cleanup-view-handle";
import { type DeepPartial, DocumentCleanupResult, Image } from "./core-types";
export interface DocumentCleanupViewProps {
    configuration: DocumentCleanupViewConfiguration;
    container?: HTMLElement;
    root: Root;
    onReady?: (view: DocumentCleanupView) => void;
    onError?: (err: Error) => void;
    sdk: ScanbotSDK;
}
export interface DocumentCleanupViewState {
    imageUrl: string;
}
export default class DocumentCleanupView extends React.Component<DocumentCleanupViewProps, DocumentCleanupViewState> implements IDocumentCleanupViewHandle {
    private _configuration?;
    private sdk;
    private engine;
    private originalImageUrl;
    private brushCanvasRef;
    private containerRef;
    private onResizeCallback;
    private static root;
    constructor(props: DocumentCleanupViewProps);
    static create(configuration: DocumentCleanupViewConfiguration, sdk: ScanbotSDK): Promise<DocumentCleanupView>;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    onResize(): void;
    private refreshDisplayedImage;
    /**
     * Public API methods
     */
    apply(): Promise<DocumentCleanupResult>;
    undo(): Promise<Image>;
    redo(): Promise<Image>;
    reset(): Promise<Image>;
    canUndo(): Promise<boolean>;
    canRedo(): Promise<boolean>;
    clearBrushStrokes(): void;
    updateConfiguration(config: DeepPartial<DocumentCleanupViewConfiguration>): void;
    dispose(): void;
    get configuration(): DocumentCleanupViewConfiguration;
    render(): React.JSX.Element;
}
