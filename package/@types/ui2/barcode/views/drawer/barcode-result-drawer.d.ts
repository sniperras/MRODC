import * as React from 'react';
import { ManualCountEditDialog, Sheet, SheetContent } from '../../../configuration';
import { CountedBarcodeAction } from "../../model/counted-barcodes";
import { DrawerHeaderContentProps } from "./subviews/drawer-header-content";
import { NavigationBarSize } from "../../../document/views/camera-screen/top-bar";
declare class Props {
    isPlaceholderVisible: boolean;
    sheetStyle: Sheet;
    contentStyle: SheetContent;
    manualCountEditDialog: ManualCountEditDialog;
    onBarcodeChange: (action: CountedBarcodeAction) => void;
    children: React.ReactNode;
    drawerHeaderContentProps: DrawerHeaderContentProps;
    isOpen: boolean;
    onSwipe: (action: 'swipe-to-open' | 'swipe-to-close') => void;
    closedSheetVisibleHeight: number;
    navigationBarSize: NavigationBarSize;
}
export declare function BarcodeResultDrawer(props: Props): React.JSX.Element;
export {};
