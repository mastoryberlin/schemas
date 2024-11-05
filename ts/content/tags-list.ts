import type { JSONSchema } from "json-schema-to-ts";
import tags from './tags'

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "tags": {
      "type": "array",
      "items": {
        "$ref": "./tags.json"
      } as unknown as typeof tags
    }
  }
} as const satisfies JSONSchema