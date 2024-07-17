import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/Sprite.json",
  "properties": {
    "showPoint": {
      "type": "boolean",
      "description": "If set to `true` (default), displays a Point showing the exact location of this Sprite."
    },
    "pointColor": {
      "$ref": "../core/color.json"
    },
    "src": {
      "$ref": "../core/url.json"
    }
  }
} as const satisfies JSONSchema