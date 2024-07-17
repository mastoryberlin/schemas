import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/Sprite.json",
  "properties": {
    "showPoint": {
      "type": "boolean"
    },
    "pointColor": {
      "$ref": "../core/color.json"
    },
    "src": {
      "$ref": "../core/url.json"
    }
  }
} as const satisfies JSONSchema