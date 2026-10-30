import React from 'react';
import { MrzScannerScreenConfiguration } from "../../configuration/mrz/MRZScannerScreenConfiguration";
import MrzScannerView from "../../../mrz-scanner-view";
interface Props {
    config: MrzScannerScreenConfiguration;
    baseInsets: {
        left: number;
        right: number;
    };
    scanner: MrzScannerView | null;
}
export declare function DebugFinderSizeSlider(props: Props): React.JSX.Element;
export {};
