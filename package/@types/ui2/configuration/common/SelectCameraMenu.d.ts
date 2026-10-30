import type { DeepPartial } from "../utils";
import { IconButton } from "./Common";
import { PopupMenuItem } from "./Common";
import { StyledText } from "./Common";
/**
Configuration of the 'select camera' menu.
*/
export declare class SelectCameraMenu {
    /**
      Configuration of the icon that toggles the 'select camera' menu.
      @defaultValue new IconButton({
          "color": "?sbColorOnPrimary",
          "accessibilityDescription": "?accessibilityDescriptionCameraSelectButton"
      });
      */
    button: IconButton;
    /**
      The background color of the 'select camera' menu.
      @defaultValue "?sbColorSurface";
      */
    backgroundColor: string;
    /**
      Configuration of the title of the 'select camera' menu.
      @defaultValue new StyledText({
          "text": "?cameraSelectCameraMenuTitle",
          "color": "?sbColorOnSurfaceVariant"
      });
      */
    title: StyledText;
    /**
      The color of the divider that separates the 'select camera' title from the menu items.
      @defaultValue "?sbColorOutline";
      */
    dividerColor: string;
    /**
      Configuration of the menu items in the 'select camera' menu.
      @defaultValue new PopupMenuItem({
          "title": new StyledText({
              "color": "?sbColorOnSurface"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraSelectMenuItem",
          "icon": new IconStyle({
              "color": "?sbColorOnSurface"
          })
      });
      */
    menuEntry: PopupMenuItem;
    /**
      Configuration of the active menu items in the 'select camera' menu.
      @defaultValue new PopupMenuItem({
          "title": new StyledText({
              "color": "?sbColorPrimary"
          }),
          "accessibilityDescription": "?accessibilityDescriptionCameraSelectMenuItem",
          "icon": new IconStyle({
              "color": "?sbColorPrimary"
          })
      });
      */
    menuEntryActive: PopupMenuItem;
    /** @param source {@displayType `DeepPartial<SelectCameraMenu>`} */
    constructor(source?: DeepPartial<SelectCameraMenu>);
}
