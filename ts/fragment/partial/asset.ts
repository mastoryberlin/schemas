import type { JSONSchema } from 'json-schema-to-ts'
import url from './url'

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "image",
        "video",
        "audio"
      ]
    },
    "src": {
      "$ref": "./url.json"
    } as unknown as typeof url,
    "alt": {
      "type": "string"
    }
  },
  "required": [
    "type",
    "src"
  ]
} as const satisfies JSONSchema