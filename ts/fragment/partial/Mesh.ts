import type { JSONSchema } from 'json-schema-to-ts'

export default {
  "properties": {
    "checkCollisions": {
      "type": "boolean",
      "default": true
    }
  },
  "required": []
} as const satisfies JSONSchema