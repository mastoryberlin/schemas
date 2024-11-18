import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "click": {
      /**
       * Whether users can click on this object.
       */
      "oneOf": [
        {
          "type": "boolean"
        }
      ],
      "default": true
    }
  }
} as const satisfies JSONSchema