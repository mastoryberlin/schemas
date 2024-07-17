import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/classes/Sprite.json",
  "oneOf": [
    {
      "$ref": "../Flag.json"
    },
    {
      "$ref": "../Point2.json"
    },
    {
      "$ref": "../Sprite.json"
    }
  ],
  "unevaluatedProperties": false,
  "required": []
} as const satisfies JSONSchema