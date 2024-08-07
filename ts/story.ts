import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/content/story.json",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "units": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^\\w+$"
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "units"
  ]
} as const satisfies JSONSchema