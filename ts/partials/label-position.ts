import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/label-position.json",
  "type": "string",
  "enum": [
    "left",
    "right",
    "above",
    "below"
  ]
} as const satisfies JSONSchema