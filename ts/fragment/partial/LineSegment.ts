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
    }

  },
  "required": []
} as const satisfies JSONSchema