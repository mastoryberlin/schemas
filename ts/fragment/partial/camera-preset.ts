import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "string",
  "enum": [
    "first person walker",
    "look around"
  ]
} as const satisfies JSONSchema