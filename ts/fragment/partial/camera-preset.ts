import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "string",
  "enum": [
    "free flight",
    "first person walker",
    "look around from fixed position"
  ]
} as const satisfies JSONSchema