import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "text": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "flipped": {
      "oneOf": [
        {
          "type": "object",
          "properties": {
            "text": {
              "type": "string"
            },
            "image": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "markdown": {
              "type": "string"
            }
          }
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": []
} as const satisfies JSONSchema