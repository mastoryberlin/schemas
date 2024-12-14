import type { JSONSchema } from "json-schema-to-ts";
import url from '../../core/url'
import type identifier from "./identifier";

export default {
  /**
  * A tool to interact with a canvas.
  * 
  * Fragments of this class will only work when placed directly under a `Canvas` fragment.
  *
  * @example
  * ```jsonc
  * {
  *   "id": "myTool",
  *   "class": "CanvasTool",
  *   "text": "My New Tool",
  *   "icon": "https://mastory.io/my-tool-icon.png"
  * }
  * ```
  */
  "properties": {
    "text": {
      /**
       * The text to show on the toolbar button. If blank, only an icon will be shown.
       */
      "type": "string"
    },
    "icon": {
      /**
       * An icon to show on the toolbar button.
       */
      "$ref": "../../core/url.json"
    } as unknown as typeof url,
    "canvasActivityWhileSelected": {
      /**
       * If set, the tool will temporarily replace its parent canvas's
       * `controllingActivity` by the provided fragment ID 
       * when selected, and reset it to the previous value when deselected.
       * 
       * This can be useful to bind more specific support and instructions
       * to the parent canvas while it is being used with this tool.
       */
      "$ref": "./identifier.json"
    } as unknown as typeof identifier
  },
  "required": [
    "icon"
  ]
} as const satisfies JSONSchema