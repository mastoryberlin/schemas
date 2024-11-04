import type { JSONSchema } from 'json-schema-to-ts'

export default {
  "type": "object",
  "properties": {
    "whileActive": {
      "$comment": "This property consists of a description of what the presence of the fragment contributes to the overall situation in the game while the fragment is active.",
      "type": "string"
    },
    "afterDone": {
      "$comment": "This property consists of a description of how the appearance of the fragment has affected the overall situation in the game once the fragment is finished.",
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "whileActive",
    "afterDone"
  ]
} as const satisfies JSONSchema