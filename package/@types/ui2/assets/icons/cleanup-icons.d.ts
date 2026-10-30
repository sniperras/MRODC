import React from "react";
interface IconProps {
    color?: string;
}
export default class CleanupIcons {
    static Undo({ color }?: IconProps): React.JSX.Element;
    static Redo({ color }?: IconProps): React.JSX.Element;
    static Reset({ color }?: IconProps): React.JSX.Element;
}
export {};
