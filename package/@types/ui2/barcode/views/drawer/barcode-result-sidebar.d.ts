import React from 'react';
import { DrawerHeaderContentProps } from "./subviews/drawer-header-content";
import { SheetContent } from "../../../configuration/barcode/MultipleScanningModeUseCase";
export declare class Props {
    headerProps: DrawerHeaderContentProps;
    sheetContent: SheetContent;
    isEmptyStateVisible: boolean;
    barcodeList: React.JSX.Element;
}
/** Fraction of the Grid's 12 columns occupied by the sidebar, kept in sync with the `xs` prop below. */
export declare const SIDEBAR_GRID_COLUMNS = 5;
export declare const SIDEBAR_WIDTH_PERCENT: string;
export default function BarcodeResultSidebar(props: Props): React.JSX.Element;
