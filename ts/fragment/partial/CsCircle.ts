import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "radius": {
      "type": "number"
    }
  },
  "required": [
    "radius"
  ]
} as const satisfies JSONSchema