/**
The visual mode used for the toolbar.

- `SOLID`:
   Display the toolbar with a background color or with transparency. Using a semi-transparent background color is deprecated and is only supported in portrait orientation. Use a fully opaque background color instead.
- `GRADIENT`:
   Display the toolbar with a gradient background color or a gradient with transparency. The buttons will still be visible.
- `HIDDEN`:
   Hide the toolbar completely.
*/
export type ToolbarMode = 
/**
  Display the toolbar with a background color or with transparency. Using a semi-transparent background color is deprecated and is only supported in portrait orientation. Use a fully opaque background color instead.
  */
"SOLID"
/**
  Display the toolbar with a gradient background color or a gradient with transparency. The buttons will still be visible.
  Deprecated. GRADIENT mode is deprecated and is only supported in portrait orientation. Use SOLID with a fully opaque background color instead.
  */
 | "GRADIENT"
/**
  Hide the toolbar completely.
  Deprecated. HIDDEN mode is deprecated. Use SOLID with a fully opaque background color instead.
  */
 | "HIDDEN";
/** @hidden */
export declare const ToolbarModeValues: ReadonlyArray<ToolbarMode>;
