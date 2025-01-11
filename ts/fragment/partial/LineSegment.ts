import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "startPoint": {
      /**
       * One of the two points that delimit the segment.
       * 
       * Currently, this must be a string matching the
       * ID of an existing Point fragment.
       */
      "oneOf": [
        {
          "type": "string"
        }
      ]
    },
    "endPoint": {
      /**
       * One of the two points that delimit the segment.
       * 
       * Currently, this must be a string matching the
       * ID of an existing Point fragment.
       */
      "oneOf": [
        {
          "type": "string"
        }
      ]
    },
    "thickness": {
      /** The thickness of the line in pixels. */
      "type": "number",
      "exclusiveMinimum": 0
    },
    "extendToInfinity": {
      /** 
       * Whether the line should infinitely extend beyond
       * the startPoint, the endPoint, or both.
       * 
       * Setting this property to true is equivalent to "both",
       * i.e. the segment becomes an infinite line connecting
       * the start and end points.
       */
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "enum": [
            "start",
            "end",
            "both"
          ]
        }
      ]
    }
  },
  "required": []
} as const satisfies JSONSchema