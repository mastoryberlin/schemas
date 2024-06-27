export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/content/story-variant.json",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "season": {
      "type": "integer",
      "minimum": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "title"
  ]
} as const