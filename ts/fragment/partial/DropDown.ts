import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "options": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "options"
  ]
} as const satisfies JSONSchema
