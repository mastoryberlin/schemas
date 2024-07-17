import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/color.json",
  "properties": {
    "color": {
      "$ref": "../core/color.json"
    }
  }
} as const satisfies JSONSchema