import type { FromSchema, JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
} as const satisfies JSONSchema