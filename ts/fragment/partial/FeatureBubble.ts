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
    },
    "pointsTo": {
      "type": "object",
      "properties": {
        "x": { "type": "number" },
        "y": { "type": "number" }
      },
      "required": [
        "x", "y"
      ],
      "additionalProperties": false
    }
  },
  "required": ["pointsTo"]
} as const satisfies JSONSchema