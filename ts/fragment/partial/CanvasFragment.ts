import type { JSONSchema } from "json-schema-to-ts";
import color from '../../core/color'

export default {
  "properties": {
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