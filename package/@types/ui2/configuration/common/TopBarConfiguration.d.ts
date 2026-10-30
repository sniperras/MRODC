import type { DeepPartial } from "../utils";
import { ButtonConfiguration } from "./Common";
import { SelectCameraMenu } from "./SelectCameraMenu";
import { StyledText } from "./Common";
/**
Configuration of the top bar's appearance.
*/
export declare class TopBarConfiguration {
    /**
      Appearance of the top bar's title.
      @defaultValue new StyledText({
          "visible": false,
          "text": "Scan Item",
          "color": "?sbColorOnPrimary"
      });
      */
    title: StyledText;
    /**
      The visual mode used for the top bar.
      @defaultValue "SOLID";
      */
    mode: TopBarMode;
    /**
      The background color of the top bar to be used when the visual mode is specified as SOLID. Otherwise ignored. Providing a color with reduced opacity to simulate a transparent top bar is deprecated and does not work correctly in landscape orientation. Provide a fully opaque color instead.
      @defaultValue "?sbColorPrimary";
      */
    backgroundColor: string;
    /**
      Configuration of the 'cancel' button's appearance.
      @defaultValue new ButtonConfiguration({
          "text": "Cancel",
          "background": new BackgroundStyle({
              "strokeColor": "#00000000",
              "fillColor": "#00000000",
              "strokeWidth": 0.0
          }),
          "foreground": new ForegroundStyle({
              "color": "?sbColorOnPrimary"
          })
      });
      */
    cancelButton: ButtonConfiguration;
    /**
      Configuration of the 'select camera' button, located in the top bar.
      @defaultValue new SelectCameraMenu({});
      */
    cameraSelect: SelectCameraMenu;
    /** @param source {@displayType `DeepPartial<TopBarConfiguration>`} */
    constructor(source?: DeepPartial<TopBarConfiguration>);
}
/**
The visual mode used for the top bar.

- `SOLID`:
   Display the top bar with a background color or with transparency. Using a semi-transparent background color is deprecated and is only supported in portrait orientation. Use a fully opaque background color instead.
- `GRADIENT`:
   Display the top bar with a gradient background color or a gradient with transparency. The buttons will still be visible.
- `HIDDEN`:
   Hide the top bar completely.
*/
export type TopBarMode = 
/**
  Display the top bar with a background color or with transparency. Using a semi-transparent background color is deprecated and is only supported in portrait orientation. Use a fully opaque background color instead.
  */
"SOLID"
/**
  Display the top bar with a gradient background color or a gradient with transparency. The buttons will still be visible.
  Deprecated. GRADIENT mode is deprecated and is only supported in portrait orientation. Use SOLID with a fully opaque background color instead.
  */
 | "GRADIENT"
/**
  Hide the top bar completely.
  Deprecated. HIDDEN mode is deprecated. Use SOLID with a fully opaque background color instead.
  */
 | "HIDDEN";
/** @hidden */
export declare const TopBarModeValues: ReadonlyArray<TopBarMode>;
