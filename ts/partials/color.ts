import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/color.json",
  "properties": {
    "color": {
      "allOf": [
        {
          "description": "NOTE: Currently, the only supported format is hexadecimal, for example `#a347bf`."
        },
        {
          "$ref": "../core/color.json"
        }
      ]
    }
  }
} as const satisfies JSONSchema