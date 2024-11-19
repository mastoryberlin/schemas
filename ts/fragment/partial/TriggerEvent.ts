import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "event": {
      /**
       * The event for which the activity listens.
       */
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        }
      ]
    },
    "target": {
      /**
       * The ID(s) of one or more fragments on which the activity listens to the specified event(s).
       */
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        }
      ]
    }
  },
  "required": [
    "target"
  ]
} as const satisfies JSONSchema