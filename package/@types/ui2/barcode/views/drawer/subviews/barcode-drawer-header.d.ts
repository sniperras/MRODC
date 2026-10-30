import React, { Ref } from "react";
import { DragProps } from "../hooks/use-drag-listener";
import { DrawerHeaderContentProps } from "./drawer-header-content";
import { SheetContent } from "../../../../configuration";
export declare class Props {
    innerRef: Ref<HTMLDivElement>;
    dragProps?: DragProps;
    drawerHeaderContentProps: DrawerHeaderContentProps;
    sheetContent: SheetContent;
    isOpen: boolean;
    onToggle?: () => void;
    accessibilityLabel?: string;
}
export declare function BarcodeDrawerHeader(props: Props): React.JSX.Element;
