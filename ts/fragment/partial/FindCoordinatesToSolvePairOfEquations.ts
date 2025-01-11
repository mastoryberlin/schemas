import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "equations": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 2,
      "maxItems": 2
    },
    "variables": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "equations"
  ]
} as const satisfies JSONSchema