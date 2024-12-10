import type { JSONSchema } from "json-schema-to-ts";
import url from '../../core/url'

export default {
  /**
  * A tool to interact with a coordinate system.
  * 
  * Fragments of this class will only work when placed directly under a `CoordinateSystem` fragment.
  *
  * @example
  * ```jsonc
  * {
  *   "id": "myTool",
  *   "class": "CsTool",
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
    } as unknown as typeof url
  },
  "required": [
    "icon"
  ]
} as const satisfies JSONSchema