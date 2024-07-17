import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/label.json",
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    // "model": {
    //   "type": "string"
    // },
    "visible": {
      "type": "boolean"
    }
  }
} as const satisfies JSONSchema