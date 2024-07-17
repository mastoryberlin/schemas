import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/classes/Sprite.json",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "$schema": {
          "type": "string"
        }
      }
    },
    {
      "$ref": "../partials/tuple2.json"
    },
    {
      "$ref": "../partials/renderable2.json"
    },
    {
      "$ref": "../partials/Sprite.json"
    }
  ],
  "unevaluatedProperties": false,
  "required": []
} as const satisfies JSONSchema