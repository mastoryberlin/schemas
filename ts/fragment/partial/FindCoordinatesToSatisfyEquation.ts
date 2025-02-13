import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "equation": {
      "type": "string"
    },
    "variables": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "equation"
  ]
} as const satisfies JSONSchema