import type { JSONSchema } from "json-schema-to-ts";
import type color from "../../core/color";

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/Text.json",
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    "size": {
      "enum": [
        "small",
        "medium",
        "large",
        "huge"
      ]
    },
    "align": {
      "enum": [
        "left",
        "center",
        "right"
      ]
    },
    "color": {
      "$ref": "../../core/color.json"
    } as unknown as typeof color
  },
  "required": [
    "text"
  ]
} as const satisfies JSONSchema