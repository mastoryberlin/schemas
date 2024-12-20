import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "activeMap": {
      /**
       * The currently selected coordinates map.
       * 
       * Must be set to one of the keys in the containing canvas's "maps"
       * object, or "pixels".
       * 
       * If set, coordinate values measured with this tool
       * will be translated between
       * pixel coordinates and the coordinate units
       * defined by the selected map.
       * 
       * If not set, defaults to the value of the
       * containing canvas's "defaultMapForChildren" property.
       */
      "type": "string"
    }
  },
  "required": []
} as const satisfies JSONSchema