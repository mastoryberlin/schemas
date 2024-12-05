import type { JSONSchema } from "json-schema-to-ts";
import identifier from './identifier'

export default {
  "properties": {
    /**
     * The name of a boolean unit variable which defines whether this activity is solved.
     */
    "bind": {
      "$ref": "./identifier.json"
    } as unknown as typeof identifier
  },
  "required": [
    "bind"
  ]
} as const satisfies JSONSchema