import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "deselectAfterAdding": {
      "type": "boolean"
    },
    "addObjectPrototype": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "object"
        }
      ],
      "minItems": 2,
      "maxItems": 2
    }
  },
  "required": []
} as const satisfies JSONSchema