import type { JSONSchema } from "json-schema-to-ts";
import color from '../../core/color'

export default {
  "properties": {
    "activeMap": {
      /**
       * The currently selected coordinates map.
       * 
       * Must be set to one of the keys in the containing canvas's "maps"
       * object, or "pixels".
       * 
       * If set, all coordinate values got or set for this fragment
       * will be translated back and forth between
       * pixel coordinates and the coordinate units
       * defined by the selected map.
       * 
       * If not set, defaults to the value of the
       * containing canvas's "defaultMapForChildren" property.
       */
      "type": "string"
    },
    "color": {
      /**
       * The color of this element.
       * 
       * NOTE: Currently, the only format reliably supported is
       * hexadecimal, for example `#a347bf`.
       */
      "$ref": "../../core/color.json"
    } as unknown as typeof color
  },
  "required": []
} as const satisfies JSONSchema