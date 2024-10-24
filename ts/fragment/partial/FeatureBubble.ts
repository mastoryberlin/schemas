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
        "x": { "oneOf": [{ "type": "number" }, { "type": "string" }], "examples": ["50%", 277] },
        "y": { "oneOf": [{ "type": "number" }, { "type": "string" }], "examples": ["50%", 138] }
      },
      "required": [
        "x", "y"
      ],
      "additionalProperties": false
    }
  },
  "required": ["pointsTo"]
} as const satisfies JSONSchema