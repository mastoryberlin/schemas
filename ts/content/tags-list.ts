import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "tags": {
      "type": "array",
      "items": {
        "$ref": "./tags.json"
      }
    }
  }
} as const satisfies JSONSchema