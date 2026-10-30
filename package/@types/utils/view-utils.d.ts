import { MagneticLine } from "./dto/MagneticLine";
import { Size } from "./dto/Size";
import { Point } from "./dto/Point";
import { ScannerConfiguration } from "../model/configuration/scanner-configuration";
import { Root } from "react-dom/client";
export declare class ViewUtils {
    static convertLinesToViewportLines(elementSize: Size, lines: MagneticLine[]): MagneticLine[];
    static convertToViewportPointsFromParentSize(elementSize: Size, points: any[]): Point[] | undefined;
    private static calculateScale;
    static findScale(element: Size, video: Size): {
        x: number;
        y: number;
        scale: number;
    };
    private static preventDefaultCallback;
    static disableScreenMovement(): void;
    static enableScreenMovement(): void;
    static findContainerOrThrow(configuration: ScannerConfiguration): HTMLElement;
    /**
     * Measures the element's rendered box, independent of any particular DOM "client size"
     * implementation (e.g. clientWidth/clientHeight, which round to integers and ignore
     * transforms). getBoundingClientRect() reflects the actual visual box the element occupies.
     */
    private static getEffectiveSize;
    /**
     * Returns whether the element currently has a layout box at all, i.e. it (and all of its
     * ancestors) is attached to the document and not display:none. If false, the element's
     * measured size is meaningless (not "empty", just not laid out yet).
     */
    private static isRendered;
    static unmountSafely(root: Root): void;
}
