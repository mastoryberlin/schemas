import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "oneOf": [
    {
      "items": [
        {
          "const": "Point2"
        },
        {
          "$ref": "../Point2.json"
        }
      ]
    },
    {
      "items": [
        {
          "const": "Sprite"
        },
        {
          "$ref": "../Sprite.json"
        }
      ]
    },
    {
      "items": [
        {
          "const": "Flag"
        },
        {
          "$ref": "../Flag.json"
        }
      ]
    }
  ],
  "minItems": 2,
  "maxItems": 2
} as const satisfies JSONSchema