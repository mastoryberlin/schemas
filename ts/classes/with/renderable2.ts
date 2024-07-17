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
          "$ref": "../classes/Point2.json"
        }
      ]
    },
    {
      "items": [
        {
          "const": "Sprite"
        },
        {
          "$ref": "../classes/Sprite.json"
        }
      ]
    },
    {
      "items": [
        {
          "const": "Flag"
        },
        {
          "$ref": "../classes/Flag.json"
        }
      ]
    }
  ],
  "minItems": 2,
  "maxItems": 2,
  "unevaluatedProperties": false
} as const satisfies JSONSchema