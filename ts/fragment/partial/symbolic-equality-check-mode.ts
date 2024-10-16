import type { JSONSchema } from "json-schema-to-ts";
export default {
  "type": "string",
  "enum": [
    "formal identity",
    "canonical",
    "mathematical equivalence"
  ]
} as const satisfies JSONSchema